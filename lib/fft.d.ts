import { ComplexArray, Int, KissFFTConfig, ConfigPointer } from "./types.js";
export declare class FFTConfig extends KissFFTConfig<ComplexArray, ComplexArray> {
    private ptr;
    constructor(nfft: Int, inverse: boolean);
    get pointer(): ConfigPointer;
    free(): void;
    work(input: ComplexArray, output: ComplexArray): void;
}
