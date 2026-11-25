import {describe, it, expect } from "vitest";
import {compare} from "./index.js";
import {randomNum} from "./index.js"

describe("compare"), () => {
    it("Compara igualdad"), () => {
        const value = compare(4, 4);
        expect(value).not.toBe("PERDISTE")
    }   
}

describe("randomNum"), () => {
    it("Genera número random"), () => {
        const value = randomNum();
        expect(value).toBe(value < 10)
    }   
}


