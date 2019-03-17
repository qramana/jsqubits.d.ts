declare const jsqubits: JSQubitsStatic;

declare namespace jsqubits {
  namespace jsqubits {
    interface QState {
      multiply(amount: number | Complex): QState;
      X(targetBits: number): QState;
      toString(): string;
    }

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
  }
}

interface JSQubitsStatic {
  jsqubits: InternalJSQubitsStatic;
}

interface InternalJSQubitsStatic {
  (bitString: string): any;
  QState: QStateStatic;
  Complex: ComplexStatic;
  real: (real: number) => ComplexStatic;
}

interface QStateStatic {
  new (bitString: string): jsqubits.jsqubits.QState;
  fromBits(bitString: string): jsqubits.jsqubits.QState;
}

interface ComplexStatic {
  ONE: jsqubits.jsqubits.Complex;
  ZERO: jsqubits.jsqubits.Complex;
  SQRT2: jsqubits.jsqubits.Complex;
  SQRT1_2: jsqubits.jsqubits.Complex;
  new (real: number, imaginary: number): jsqubits.jsqubits.Complex;
}

declare module "jsqubits" {
  export = jsqubits;
}
