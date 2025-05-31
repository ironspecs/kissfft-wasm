import { ComplexArray, Int, KissFFTConfig, ConfigPointer } from "./types.js";
export declare class FFTNDConfig extends KissFFTConfig<ComplexArray, ComplexArray> {
    readonly dims: readonly Int[];
    private ptr;
    constructor(dims: readonly Int[], inverse: boolean);
    get pointer(): ConfigPointer;
    free(): void;
    work(input: ComplexArray, output: ComplexArray): void;
}
