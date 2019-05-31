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
  it("static interface", (done: any) => {
    expect(jsq.jsqubits.real(1)).toBeInstanceOf(jsq.jsqubits.Complex);
    expect(jsq.jsqubits.complex(1, 1)).toBeInstanceOf(jsq.jsqubits.Complex);
    done();
  });

  it("qubit initiate", (done: any) => {
    const state0String = "|0>";
    expect(jsq.jsqubits(state0String)).toBeInstanceOf(jsq.jsqubits.QState);
    expect(jsq.jsqubits.QState.fromBits(state0String)).toBeInstanceOf(jsq.jsqubits.QState);
    expect(jsq.jsqubits(state0String)).toBeInstanceOf(jsq.jsqubits.QState);
    expect(new jsq.jsqubits.QState(1)).toBeInstanceOf(jsq.jsqubits.QState);
    expect(new jsq.jsqubits.QState(1, [jsq.jsqubits.Complex.ZERO])).toBeInstanceOf(jsq.jsqubits.QState);
    done();
  });

  describe("QState", () => {
    const state0String = "|0>";
    const QState = jsq.jsqubits.QState;
    let state: jsq.jsqubits.QState;

    beforeEach(() => {
      state = jsq.jsqubits(state0String);
    });

    it("static interface", (done: any) => {
      expect(typeof QState.fromBits).toBe("function");
      expect(() => { QState.fromBits(state0String); }).not.toThrow();
      done();
    });
    it("state methods", (done: any) => {
      expect(typeof state.multiply).toBe("function");
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

describe("QState operator", () => {
  describe("single qubit", () => {
    it("operator existence check", (done: any) => {
      const state = jsq.jsqubits("|0>");
      expect(typeof state.x).toBe("function");
      expect(typeof state.X).toBe("function");
      expect(typeof state.y).toBe("function");
      expect(typeof state.Y).toBe("function");
      expect(typeof state.z).toBe("function");
      expect(typeof state.Z).toBe("function");
      expect(typeof state.s).toBe("function");
      expect(typeof state.S).toBe("function");
      expect(typeof state.t).toBe("function");
      expect(typeof state.T).toBe("function");
      expect(typeof state.r).toBe("function");
      expect(typeof state.hadamard).toBe("function");
      expect(typeof state.measure).toBe("function");
      expect(typeof state.rotateX).toBe("function");
      expect(typeof state.rotateY).toBe("function");
      expect(typeof state.rotateZ).toBe("function");
      done();
    });

    it("x", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.x(0).toString()).toBe("|1>");
      expect(state.x(0).x(0).toString()).toBe("|0>");
      state = jsq.jsqubits("|1>");
      expect(state.x(0).toString()).toBe("|0>");
      done();
    });

    it("y", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.y(0).toString()).toBe("(i)|1>");
      state = jsq.jsqubits("|1>");
      expect(state.y(0).toString()).toBe("(-i)|0>");
      done();
    });

    it("z", (done: any) => {
      let state = (jsq.jsqubits("|0>")).add(jsq.jsqubits("|1>")).normalize();
      expect(state.z(0).toString()).toBe("(0.7071)|0> + (-0.7071)|1>");
      state = (jsq.jsqubits("|0>")).subtract(jsq.jsqubits("|1>")).normalize();
      expect(state.z(0).toString()).toBe("(0.7071)|0> + (0.7071)|1>");
      done();
    });

    it("h", (done: any) => {
      const state = jsq.jsqubits("|0>");
      expect(state.hadamard(0).toString()).toBe("(0.7071)|0> + (0.7071)|1>");
      done();
    });

    it("s", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.s(0).toString()).toBe("|0>");
      state = jsq.jsqubits("|1>");
      expect(state.s(0).toString()).toBe("(i)|1>");
      done();
    });

    it("t", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.t(0).toString()).toBe("|0>");
      state = jsq.jsqubits("|1>");
      expect(state.t(0).toString()).toBe("(0.7071+0.7071i)|1>");
      done();
    });

    it("r", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.r(0, Math.PI / 4).toString()).toBe("|0>");
      state = jsq.jsqubits("|1>");
      expect(state.r(0, Math.PI / 4).toString()).toBe("(0.7071+0.7071i)|1>");
      done();
    });

    it("roteteX", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.rotateX(0, Math.PI / 4).toString()).toBe("(0.9239)|0> + (-0.3827i)|1>");
      state = jsq.jsqubits("|1>");
      expect(state.rotateX(0, Math.PI / 4).toString()).toBe("(-0.3827i)|0> + (0.9239)|1>");
      done();
    });

    it("roteteY", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.rotateY(0, Math.PI / 4).toString()).toBe("(0.9239)|0> + (0.3827)|1>");
      state = jsq.jsqubits("|1>");
      expect(state.rotateY(0, Math.PI / 4).toString()).toBe("(-0.3827)|0> + (0.9239)|1>");
      done();
    });

    it("roteteZ", (done: any) => {
      let state = jsq.jsqubits("|0>");
      expect(state.rotateZ(0, Math.PI / 4).toString()).toBe("(0.9239-0.3827i)|0>");
      state = jsq.jsqubits("|1>");
      expect(state.rotateZ(0, Math.PI / 4).toString()).toBe("(0.9239+0.3827i)|1>");
      done();
    });
  });

  describe("dual qubits", () => {
    it("operator existence check", (done: any) => {
      const state = jsq.jsqubits("|0>");
      expect(typeof state.cnot).toBe("function");
      done();
    });

    it("cnot", (done: any) => {
      let state = jsq.jsqubits("|0>");
      const states = ["|00>", "|10>", "|01>", "|11>"];
      const expectStates = ["|00>", "|10>", "|11>", "|01>"];

      states.forEach((s, index) => {
        state = jsq.jsqubits(s);
        expect(state.cnot(0, 1).toString()).toBe(expectStates[index]);
      });
      done();
    });

    it("multi range single qubit operator", (done: any) => {
      let state = jsq.jsqubits("|000>");
      expect(state.x([0, 2]).toString()).toBe("|101>");
      state = jsq.jsqubits("|000>");
      expect(state.x(jsq.jsqubits.ALL).toString()).toBe("|111>");
      state = jsq.jsqubits("|000>");
      expect(state.x({ from: 1, to: 2 }).toString()).toBe("|110>");
      done();
    });
  });
});
