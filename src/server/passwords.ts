import { randomBytes, scrypt as scryptCallback, timingSafeEqual, createHash } from 'node:crypto';

const derive = (password: string, salt: string) =>
  new Promise<Buffer>((resolve, reject) =>
    scryptCallback(
      password,
      salt,
      64,
      { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 },
      (error, key) => (error ? reject(error) : resolve(key)),
    ),
  );
export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex');
  return `scrypt-v1$${salt}$${(await derive(password, salt)).toString('hex')}`;
}
export async function verifyPassword(password: string, stored: string) {
  const [scheme, salt, key] = stored.split('$');
  if (scheme !== 'scrypt-v1' || !salt || !key) return false;
  const expected = Buffer.from(key, 'hex'),
    actual = await derive(password, salt);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
export const opaqueToken = () => randomBytes(32).toString('base64url');
export const tokenHash = (value: string) => createHash('sha256').update(value).digest('hex');
