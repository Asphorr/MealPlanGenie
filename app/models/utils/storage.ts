import { User } from './user';

interface StorageOptions {
  username: string;
  password: string;
}

class Storage {
  private users: Map<string, User>;

  constructor(options: StorageOptions) {
    this.users = new Map<>();

    options.username && options.password ? this.setUser(options.username, options.password) : null;
  }

  setUser(username: string, password: string): void {
    const user = new User({ username, password });
    this.users.set(username, user);
  }

  getUser(username: string): User | null {
    return this.users.get(username);
  }

  async signin(username: string, password: string): Promise<User> {
    const user = await this.getUserByUsernameAndPassword(username, password);

    if (!user) throw new Error(`Invalid credentials`);

    return user;
  }

  async signup(username: string, password: string): Promise<User> {
    const user = new User({ username, password });
    this.users.set(username, user);
    return user;
  }

  private getUserByUsernameAndPassword(username: string, password: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.users.forEach((value, key) => {
        if (key === username && value.password === password) {
          resolve(value);
        }
      });
      reject(null);
    });
  }
}

export default Storage;
