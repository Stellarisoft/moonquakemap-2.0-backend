import { NextResponse } from "next/server"

const sm = [
    {
        type: "Shallow moonquake",
        year: 1971,
        day: 107,
        h: 7,
        m: 0,
        s: 55,
        lat: 48,
        long: 35,
        mag: 2.8
    },
    {
        type: "Shallow moonquake",
        year: 1971,
        day: 140,
        h: 17,
        m: 25,
        s: 10,
        lat: 42,
        long: -24,
        mag: 2
    },
    {
        type: "Shallow moonquake",
        year: 1971,
        day: 192,
        h: 13,
        m: 24,
        s: 45,
        lat: 43,
        long: -47,
        mag: 1.9
    },
    {
        type: "Shallow moonquake",
        year: 1972,
        day: 2,
        h: 22,
        m: 29,
        s: 40,
        lat: 54,
        long: 101,
        mag: 1.9
    },
    {
        type: "Shallow moonquake",
        year: 1972,
        day: 261,
        h: 14,
        m: 35,
        s: 55,
        lat: 12,
        long: 46,
        mag: 1
    },
    {
        type: "Shallow moonquake",
        year: 1972,
        day: 341,
        h: 23,
        m: 8,
        s: 20,
        lat: 51,
        long: 45,
        mag: 1.4
    },
    {
        type: "Shallow moonquake",
        year: 1972,
        day: 344,
        h: 3,
        m: 50,
        s: 15,
        lat: -20,
        long: -80,
        mag: 1.2
    },
    {
        type: "Shallow moonquake",
        year: 1973,
        day: 39,
        h: 22,
        m: 52,
        s: 10,
        lat: 33,
        long: 35,
        mag: 0.8
    },
    {
        type: "Shallow moonquake",
        year: 1973,
        day: 72,
        h: 7,
        m: 56,
        s: 30,
        lat: -84,
        long: -134,
        mag: 3.2
    },
    {
        type: "Shallow moonquake",
        year: 1973,
        day: 171,
        h: 20,
        m: 22,
        s: 0,
        lat: -1,
        long: -71,
        mag: 2.2
    },
    {
        type: "Shallow moonquake",
        year: 1973,
        day: 274,
        h: 3,
        m: 58,
        s: 0,
        lat: -37,
        long: -29,
        mag: 1.1
    },
    {
        type: "Shallow moonquake",
        year: 1974,
        day: 54,
        h: 21,
        m: 16,
        s: 50,
        lat: 36,
        long: -16,
        mag: 0.7
    },
    {
        type: "Shallow moonquake",
        year: 1974,
        day: 86,
        h: 9,
        m: 11,
        s: 0,
        lat: -48,
        long: -106,
        mag: 1.6
    },
    {
        type: "Shallow moonquake",
        year: 1974,
        day: 109,
        h: 13,
        m: 35,
        s: 15,
        lat: -37,
        long: 42,
        mag: 0.9
    },
    {
        type: "Shallow moonquake",
        year: 1974,
        day: 192,
        h: 0,
        m: 46,
        s: 30,
        lat: 21,
        long: 88,
        mag: 2.7
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 3,
        h: 1,
        m: 42,
        s: 0,
        lat: 29,
        long: -98,
        mag: 3.2
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 12,
        h: 3,
        m: 14,
        s: 10,
        lat: 75,
        long: 40,
        mag: 1.7
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 13,
        h: 0,
        m: 26,
        s: 20,
        lat: -2,
        long: -51,
        mag: 1.1
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 44,
        h: 22,
        m: 3,
        s: 50,
        lat: -19,
        long: -26,
        mag: 1.4
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 127,
        h: 6,
        m: 37,
        s: 5,
        lat: -49,
        long: -45,
        mag: 1.3
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 147,
        h: 23,
        m: 29,
        s: 0,
        lat: 3,
        long: -58,
        mag: 1.4
    },
    {
        type: "Shallow moonquake",
        year: 1975,
        day: 314,
        h: 7,
        m: 52,
        s: 55,
        lat: -8,
        long: 64,
        mag: 1.8
    },
    {
        type: "Shallow moonquake",
        year: 1976,
        day: 4,
        h: 11,
        m: 18,
        s: 55,
        lat: 50,
        long: 30,
        mag: 1.8
    },
    {
        type: "Shallow moonquake",
        year: 1976,
        day: 12,
        h: 8,
        m: 18,
        s: 5,
        lat: 38,
        long: 44,
        mag: 1.1
    },
    {
        type: "Shallow moonquake",
        year: 1976,
        day: 66,
        h: 10,
        m: 12,
        s: 40,
        lat: 50,
        long: -20,
        mag: 2.3
    },
    {
        type: "Shallow moonquake",
        year: 1976,
        day: 68,
        h: 14,
        m: 42,
        s: 10,
        lat: -19,
        long: -12,
        mag: 1.8
    },
    {
        type: "Shallow moonquake",
        year: 1976,
        day: 137,
        h: 12,
        m: 32,
        s: 40,
        lat: 77,
        long: -10,
        mag: 1.5
    },
]
const ai = [
    {
        type: "Artificial Impact (12 LM)",
        year: 69,
        day: 324,
        h: 22,
        m: 17,
        s: 17.7,
        lat: -3.94,
        long: -21.2,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (13 S-IVB)",
        year: 70,
        day: 105,
        h: 1,
        m: 9,
        s: 41,
        lat: -2.75,
        long: -27.86,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (14 S-IVB)",
        year: 71,
        day: 35,
        h: 7,
        m: 40,
        s: 55.4,
        lat: -8.09,
        long: -26.02,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (14 LM)",
        year: 71,
        day: 38,
        h: 0,
        m: 45,
        s: 26.7,
        lat: -3.42,
        long: -19.67,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (15 S-IVB)",
        year: 71,
        day: 210,
        h: 20,
        m: 58,
        s: 42.9,
        lat: -1.51,
        long: -11.81,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (15 LM)",
        year: 71,
        day: 215,
        h: 3,
        m: 3,
        s: 37,
        lat: 26.36,
        long: 0.25,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (17 S-IVB)",
        year: 72,
        day: 345,
        h: 20,
        m: 32,
        s: 42.3,
        lat: -4.21,
        long: -12.31,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (17 LM)",
        year: 72,
        day: 350,
        h: 6,
        m: 50,
        s: 20.8,
        lat: 19.99,
        long: 30.51,
        mag: "N/A (AI)"
    },
]

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ sm: sm, ai: ai }, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}