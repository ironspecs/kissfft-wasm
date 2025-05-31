import { ComplexArray, KissFFTArray, RealArray, Int, KissFFTConfig, ConfigPointer } from "./types.js";
export declare function checkRealFFT(nfft: Int): void;
declare abstract class AbstractRealFFTConfig<T extends KissFFTArray, K extends KissFFTArray> extends KissFFTConfig<T, K> {
    protected ptr: ConfigPointer;
    constructor(nfft: Int, inverse: boolean);
    get pointer(): ConfigPointer;
    free(): void;
}
export declare class RealFFTConfig extends AbstractRealFFTConfig<RealArray, ComplexArray> {
    constructor(nfft: Int);
    work(input: RealArray, output: ComplexArray): void;
}
export declare class InverseRealFFTConfig extends AbstractRealFFTConfig<ComplexArray, RealArray> {
    constructor(nfft: Int);
    work(input: ComplexArray, output: RealArray): void;
}
export {};
