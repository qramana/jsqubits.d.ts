import * as jsq from "jsqubits";

describe("export", () => {
  it("namespace", (done: any) => {
    const keys = Object.keys(jsq);
    expect(keys.indexOf("jsqubits")).not.toBe(-1);
    expect(keys.indexOf("default")).not.toBe(-1);
    expect(Object.keys(jsq.jsqubits).indexOf("QState")).not.toBe(-1);
    done();
  });
});

describe("jsqubits", () => {
  it("state initiate", (done: any) => {
    const state0String = "|0>";
    expect(jsq.jsqubits(state0String)).toBeInstanceOf(jsq.jsqubits.QState);
    expect(jsq.jsqubits.QState.fromBits(state0String)).toBeInstanceOf(jsq.jsqubits.QState);
    expect(jsq.jsqubits(state0String)).toBeInstanceOf(jsq.jsqubits.QState);
    done();
  });

  describe("QState", () => {
    const state0String = "|0>";
    const QState = jsq.jsqubits.QState;
    let state: jsq.jsqubits.QState;

    beforeEach(() => {
      state = new jsq.jsqubits.QState(state0String);
    });

    it("static interface", (done: any) => {
      expect(typeof QState.fromBits).toBe("function");
      expect(() => { QState.fromBits(state0String); }).not.toThrow();
      done();
    });
    it("methods", (done: any) => {
      expect(typeof state.X).toBe("function");
      expect(state.X(0).toString()).toBe("|1>");
      expect(state.hadamard(0).toString()).toBe("(0.7071)|0> + (0.7071)|1>");
      expect(typeof state.multiply).toBe("function");
      done();
    });
  });

  describe("cnot", () => {
    const states = ["|00>", "|10>", "|01>", "|11>"];
    const QState = jsq.jsqubits.QState;
    let state: jsq.jsqubits.QState;

    it("methods", (done: any) => {
      const expectResults = ["|00>", "|10>", "|11>", "|01>"];
      states.forEach((s, index) => {
        state = jsq.jsqubits(s);
        expect(state.cnot(0, 1).toString()).toBe(expectResults[index]);
      });
      done();
    });
  });

  describe("Complex", () => {
    const Complex = jsq.jsqubits.Complex;
    let complexNumber10: jsq.jsqubits.Complex;
    let complexNumber01: jsq.jsqubits.Complex;

    beforeEach(() => {
      complexNumber10 = new jsq.jsqubits.Complex(1, 0);
      complexNumber01 = new jsq.jsqubits.Complex(0, 1);
    });

    it("instantiate", (done: any) => {
      expect(new jsq.jsqubits.Complex(1, 1).toString()).toBe("1+i");
      expect(new jsq.jsqubits.Complex(1, -1).toString()).toBe("1-i");
      done();
    });
    it("static interface", (done: any) => {
      expect(jsq.jsqubits.Complex.ZERO.toString()).toBe("0");
      expect(jsq.jsqubits.Complex.ONE.toString()).toBe("1");
      expect(jsq.jsqubits.Complex.SQRT2.toString()).toBe(Math.SQRT2.toString());
      expect(jsq.jsqubits.Complex.SQRT1_2.toString()).toBe(Math.SQRT1_2.toString());
      done();
    });
    it("methods", (done: any) => {
      expect(complexNumber10.add(complexNumber01)).toEqual(new Complex(1, 1));
      expect(complexNumber10.add(1)).toEqual(new Complex(2, 0));
      done();
    });
  });
});
