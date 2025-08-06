export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

export class UserManager {
    private users: User[] = [];
    private nextId: number = 1;

    public createUser(name: string, email: string): User {
        if (!name || !email) {
            throw new Error('名前とメールアドレスは必須です');
        }

        if (!this.isValidEmail(email)) {
            throw new Error('有効なメールアドレスを入力してください');
        }

        const user: User = {
            id: this.nextId++,
            name,
            email,
            createdAt: new Date()
        };

        this.users.push(user);
        return user;
    }

    public getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    public getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    public getAllUsers(): User[] {
        return [...this.users]; // 配列のコピーを返す
    }

    public updateUser(id: number, updates: Partial<Omit<User, 'id' | 'createdAt'>>): User | null {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return null;
        }

        if (updates.email && !this.isValidEmail(updates.email)) {
            throw new Error('有効なメールアドレスを入力してください');
        }

        this.users[userIndex] = { ...this.users[userIndex], ...updates };
        return this.users[userIndex];
    }

    public deleteUser(id: number): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return false;
        }

        this.users.splice(userIndex, 1);
        return true;
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
