import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { getAdminUserByEmail } from './data/admin'

const secretKey = process.env.JWT_SECRET || 'kulachi-wear-secret-key-change-in-production'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(email: string, password: string) {
  const user = await getAdminUserByEmail(email)
  
  if (!user) {
    return { error: 'Invalid email or password' }
  }
  
  // Simple password check (bcrypt comparison handled in seed/login)
  const bcrypt = await import('bcryptjs')
  const isValid = await bcrypt.compare(password, user.password)
  
  if (!isValid) {
    return { error: 'Invalid email or password' }
  }
  
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  const session = await encrypt({ userId: user.id, email: user.email, expiresAt: expiresAt.toISOString() })
  
  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  })
  
  return { success: true, user: { id: user.id, email: user.email, name: user.name } }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  
  if (!session?.value) {
    return null
  }
  
  try {
    const payload = await decrypt(session.value)
    return payload
  } catch (error) {
    return null
  }
}

export async function isAuthenticated() {
  const session = await getSession()
  return !!session
}
