import { AppDataSource } from '../config';
import { User } from '../entity/User';

export const authService = {
  async createUser(user: User): Promise<User> {
    const userRepository = AppDataSource.getRepository(User)
    const savedUser = await userRepository.save(user);
    return savedUser;
  },

  async getUserByUsername(username: string): Promise<User | undefined> {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ username }) as User;
    return user;
  },
};
