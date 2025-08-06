// ユーザー管理クラス - User management class with Japanese support
export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

export class UserManager {
    private users: User[] = [];
    private nextId: number = 1;

    /**
     * 新しいユーザーを作成します
     * Create a new user
     * @param name ユーザー名 (日本語対応)
     * @param email メールアドレス
     * @returns 作成されたユーザー
     */
    public createUser(name: string, email: string): User {
        const user: User = {
            id: this.nextId++,
            name: name,
            email: email,
            createdAt: new Date()
        };
        
        this.users.push(user);
        return user;
    }

    /**
     * 全てのユーザーを取得します
     * Get all users
     * @returns ユーザー一覧
     */
    public getAllUsers(): User[] {
        return [...this.users]; // コピーを返す
    }

    /**
     * IDでユーザーを検索します
     * Find user by ID
     * @param id ユーザーID
     * @returns ユーザー または undefined
     */
    public findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    /**
     * 名前でユーザーを検索します（日本語対応）
     * Find user by name (Japanese support)
     * @param name ユーザー名
     * @returns ユーザー または undefined
     */
    public findUserByName(name: string): User | undefined {
        return this.users.find(user => user.name === name);
    }
}