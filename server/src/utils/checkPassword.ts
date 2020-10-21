import bcrypt from 'bcryptjs';

const checkPassword = async (
  password: string,
  password_hash: string,
): Promise<boolean> => bcrypt.compare(password, password_hash);
export default checkPassword;
