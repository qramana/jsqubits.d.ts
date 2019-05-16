declare const jsqubits: JSQubitsStatic;

declare namespace jsqubits {
  namespace jsqubits {
    interface QState {
      multiply(amount: number | Complex): QState;
      tensorProduct(qState: QState): QState;
      x(targetBits: number): QState;
      X(targetBits: number): QState;
      not(targetBits: number): QState;
      y(targetBits: number): QState;
      Y(targetBits: number): QState;
      z(targetBits: number): QState;
      Z(targetBits: number): QState;
      hadamard(targetBits: number): QState;
      s(targetBits: number): QState;
      S(targetBits: number): QState;
      t(targetBits: number): QState;
      T(targetBits: number): QState;
      cnot(controlBits: number, targetBits: number): QState;
      measure(bits: number | number[] | jsqubits.ALL | MeasureBitsRange): Measurement;

      toString(): string;
      numBits(): number;

      add(qState: QState): QState;
      subtract(qState: QState): QState;
      normalize(): QState;

    }

    export type ALL = "ALL";

    interface Complex {
      add(other: number | Complex): Complex;
      multiply(other: number | Complex): Complex;
      conjugate(): Complex;
      toString(): string;
      inspect(): string;
      format(options?: any): string;
      negate(): Complex;
      magnitude(): number;
      phase(): number;
      subtract(other: number | Complex): Complex;
      eql(other: number | Complex): boolean;
      closeTo(other: Complex): number;
    }
    interface Measurement {
      numBits: number;
      result: number;
      newState: QState;
      toString(): string;
      asBitString(): string;
    }
  }
}

interface JSQubitsStatic {
  jsqubits: InternalJSQubitsStatic;
}

interface InternalJSQubitsStatic {
  (bitString: string): jsqubits.jsqubits.QState;
  QState: QStateStatic;
  Complex: ComplexStatic;
  Measurement: MeasurementStatic;
  real: (real: number) => ComplexStatic;
}

interface QStateStatic {
  new (numBits: number, amplitudes?: jsqubits.jsqubits.Complex[]): jsqubits.jsqubits.QState;
  fromBits(bitString: string): jsqubits.jsqubits.QState;
}

interface ComplexStatic {
  ONE: jsqubits.jsqubits.Complex;
  ZERO: jsqubits.jsqubits.Complex;
  SQRT2: jsqubits.jsqubits.Complex;
  SQRT1_2: jsqubits.jsqubits.Complex;
  new (real: number, imaginary: number): jsqubits.jsqubits.Complex;
}

/*
interface MeasurementStatic {
  new (numBits: number, result: number, newState: jsqubits.jsqubits.QState): jsqubits.jsqubits.Measurement;
}
*/
type MeasurementStatic = new (numBits: number, result: number, newState: jsqubits.jsqubits.QState) => jsqubits.jsqubits.Measurement;

interface MeasureBitsRange {
  from: number;
  to: number;
}

declare module "jsqubits" {
  export = jsqubits;
}
