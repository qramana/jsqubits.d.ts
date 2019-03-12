declare const jsqubits: JSQubitsStatic;

declare namespace jsqubits {
  namespace jsqubits {
    interface QState {
      multiply(amount: number): QState; // 正しくはComplexだがまだd.ts書いてない
      X(targetBits: number): QState;
      toString(): string;
    }
  }
}

interface JSQubitsStatic {
  jsqubits: InternalJSQubitsStatic;
}

interface InternalJSQubitsStatic {
  (bitString: string): any;
  // ZERO: jsqubits.jsqubits.QState; // 正しくは Complexだがまだd.ts書いてない
  QState: QStateStatic;
}

interface QStateStatic {
  new (bitString: string): jsqubits.jsqubits.QState;
  fromBits(bitString: string): jsqubits.jsqubits.QState;
}

declare module "jsqubits" {
  export = jsqubits;
}
