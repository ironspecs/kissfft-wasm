import { ComplexArray, KissFFTArray, RealArray, Int, KissFFTConfig, ConfigPointer } from "./types.js";
declare abstract class AbstractRealFFTNDConfig<T extends KissFFTArray, K extends KissFFTArray> extends KissFFTConfig<T, K> {
    readonly dims: readonly Int[];
    protected ptr: ConfigPointer;
    constructor(dims: readonly Int[], inverse: boolean);
    get pointer(): ConfigPointer;
    free(): void;
}
export declare class RealFFTNDConfig extends AbstractRealFFTNDConfig<RealArray, ComplexArray> {
    constructor(dims: Int[]);
    work(input: RealArray, output: ComplexArray): void;
}
export declare class InverseRealFFTNDConfig extends AbstractRealFFTNDConfig<ComplexArray, RealArray> {
    constructor(dims: Int[]);
    work(input: ComplexArray, output: RealArray): void;
}
export {};
