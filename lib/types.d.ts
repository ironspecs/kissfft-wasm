export declare type Int = number & {
    __int__: never;
};
export declare type Float32 = number & {
    __float32__: never;
};
export declare type Pointer<T> = number & {
    __pointer__: T;
};
export declare type ConfigPointer = Pointer<"config">;
export interface ComplexNumber {
    real: Float32;
    imag: Float32;
}
export declare type DataArray = Float32[] | Float32Array;
export declare abstract class KissFFTArray {
    protected dataPointer: Pointer<Float32>;
    protected dataLength: Int;
    get pointer(): Pointer<Float32>;
    free(): void;
    get valid(): boolean;
    asFloat32Array(): Float32Array;
    toFloat32Array(): Float32Array;
    abstract get length(): Int;
}
export declare class RealArray extends KissFFTArray {
    constructor(nOrArray: Int | RealArray);
    get length(): Int;
    static fromDataArray(arr: DataArray): RealArray;
    static fromArray(arr: DataArray): RealArray;
}
export declare class ComplexArray extends KissFFTArray {
    constructor(nOrArray: Int | ComplexArray);
    get length(): Int;
    realAt(i: Int): Float32;
    imagAt(i: Int): Float32;
    valueAt(i: Int): ComplexNumber;
    static fromDataArray(arr: DataArray): ComplexArray;
    static fromArray(real: DataArray, imag?: DataArray): ComplexArray;
    toRealArray(): Float32Array;
    toImagArray(): Float32Array;
}
export declare abstract class KissFFTConfig<T extends KissFFTArray, K extends KissFFTArray> {
    readonly nfft: Int;
    readonly inverse: boolean;
    constructor(nfft: Int, inverse: boolean);
    abstract get pointer(): ConfigPointer;
    abstract free(): void;
    abstract work(input: T, output: K): void;
    get valid(): boolean;
    check(input: T, output: K): void;
}
