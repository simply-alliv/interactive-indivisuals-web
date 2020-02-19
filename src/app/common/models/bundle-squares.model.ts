export type BundleSquareType = '';

export class BundleSquares {
    squares: BundleSquareType[];

    constructor(count: number) {
        this.squares = [];
        if (count > 0) {
            for (let i = 0; i < count; i++) {
                this.squares.push('');
            }
        }
    }
}