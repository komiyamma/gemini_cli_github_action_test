import { UserManager } from './user';
import { Calculator } from './calculator';

class App {
    private userManager: UserManager;
    private calculator: Calculator;

    constructor() {
        this.userManager = new UserManager();
        this.calculator = new Calculator();
    }

    public async start(): Promise<void> {
        console.log('アプリケーションを開始しています...');
        
        // ユーザーを作成
        const user = this.userManager.createUser('田中太郎', 'tanaka@example.com');
        console.log(`作成されたユーザー: ${user.name} (${user.email})`);
        
        // 計算を実行
        const result = this.calculator.add(10, 20);
        console.log(`計算結果: 10 + 20 = ${result}`);
        
        const complexResult = this.calculator.calculate('multiply', 5, 8);
        console.log(`複雑な計算結果: 5 × 8 = ${complexResult}`);
        
        // ユーザー一覧を表示
        const allUsers = this.userManager.getAllUsers();
        console.log('登録されているユーザー:', allUsers);
    }
}

// アプリケーションを実行
const app = new App();
app.start().catch(error => {
    console.error('エラーが発生しました:', error);
});
