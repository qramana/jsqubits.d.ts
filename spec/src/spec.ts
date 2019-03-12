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

            expect(typeof state.multiply).toBe("function");
            done();
        });
    });
});
