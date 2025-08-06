export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export class Calculator {
    private history: string[] = [];

    public add(a: number, b: number): number {
        const result = a + b;
        this.addToHistory(`${a} + ${b} = ${result}`);
        return result;
    }

    public subtract(a: number, b: number): number {
        const result = a - b;
        this.addToHistory(`${a} - ${b} = ${result}`);
        return result;
    }

    public multiply(a: number, b: number): number {
        const result = a * b;
        this.addToHistory(`${a} × ${b} = ${result}`);
        return result;
    }

    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('ゼロで割ることはできません');
        }
        const result = a / b;
        this.addToHistory(`${a} ÷ ${b} = ${result}`);
        return result;
    }

    public calculate(operation: Operation, a: number, b: number): number {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                throw new Error(`未知の演算: ${operation}`);
        }
    }

    public power(base: number, exponent: number): number {
        if (exponent < 0) {
            throw new Error('負の指数はサポートされていません');
        }
        const result = Math.pow(base, exponent);
        this.addToHistory(`${base}^${exponent} = ${result}`);
        return result;
    }

    public sqrt(value: number): number {
        if (value < 0) {
            throw new Error('負の数の平方根は計算できません');
        }
        const result = Math.sqrt(value);
        this.addToHistory(`√${value} = ${result}`);
        return result;
    }

    public factorial(n: number): number {
        if (n < 0 || !Number.isInteger(n)) {
            throw new Error('階乗は非負の整数でのみ計算可能です');
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        
        this.addToHistory(`${n}! = ${result}`);
        return result;
    }

    public getHistory(): string[] {
        return [...this.history]; // 履歴のコピーを返す
    }

    public clearHistory(): void {
        this.history = [];
    }

    private addToHistory(entry: string): void {
        this.history.push(`[${new Date().toLocaleTimeString()}] ${entry}`);
        
        // 履歴が100件を超えた場合、古いものから削除
        if (this.history.length > 100) {
            this.history.shift();
        }
    }
}
