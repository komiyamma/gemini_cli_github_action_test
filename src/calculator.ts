// 計算機クラス - Calculator class with Japanese support
export type CalculationOperation = 'add' | 'subtract' | 'multiply' | 'divide';

export class Calculator {
    /**
     * 2つの数値を加算します
     * Add two numbers
     * @param a 第一の数値
     * @param b 第二の数値
     * @returns 計算結果
     */
    public add(a: number, b: number): number {
        return a + b;
    }

    /**
     * 2つの数値を減算します
     * Subtract two numbers
     * @param a 第一の数値
     * @param b 第二の数値
     * @returns 計算結果
     */
    public subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * 2つの数値を乗算します
     * Multiply two numbers
     * @param a 第一の数値
     * @param b 第二の数値
     * @returns 計算結果
     */
    public multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * 2つの数値を除算します
     * Divide two numbers
     * @param a 第一の数値（被除数）
     * @param b 第二の数値（除数）
     * @returns 計算結果
     * @throws ゼロ除算エラー
     */
    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('ゼロで割ることはできません (Cannot divide by zero)');
        }
        return a / b;
    }

    /**
     * 指定された操作で2つの数値を計算します
     * Calculate two numbers with specified operation
     * @param operation 計算の種類
     * @param a 第一の数値
     * @param b 第二の数値
     * @returns 計算結果
     */
    public calculate(operation: CalculationOperation, a: number, b: number): number {
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
                throw new Error(`未知の操作です: ${operation} (Unknown operation: ${operation})`);
        }
    }

    /**
     * 数値の平方根を計算します
     * Calculate square root of a number
     * @param a 数値
     * @returns 平方根
     */
    public sqrt(a: number): number {
        if (a < 0) {
            throw new Error('負の数の平方根は計算できません (Cannot calculate square root of negative number)');
        }
        return Math.sqrt(a);
    }

    /**
     * 数値の累乗を計算します
     * Calculate power of a number
     * @param base 底
     * @param exponent 指数
     * @returns 累乗の結果
     */
    public power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }
}