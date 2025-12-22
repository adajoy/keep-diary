import * as jose from "jose"

export const generateToken = async (payload: { userId: string }) => {
  return await new jose.SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET))
}

export const verifyToken = async (token: string) => {
  return await jose.jwtVerify<{ payload: { userId: string } }>(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET)
  )
}
