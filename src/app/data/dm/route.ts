import { NextResponse } from "next/server"

const dm = [
    {
        type: "Deep moonquake",
        year: 1973,
        month: 9,
        day: 30,
        h: 4,
        m: 10,
        s: 58.84,
        lat: -17.4,
        long: -38.4,
        depth: 917
    },
    {
        type: "Deep moonquake",
        year: 1976,
        month: 7,
        day: 2,
        h: 10,
        m: 52,
        s: 25.31,
        lat: 49.7,
        long: 54.7,
        depth: 860
    },
    {
        type: "Deep moonquake",
        year: 1976,
        month: 7,
        day: 2,
        h: 3,
        m: 11,
        s: 24.18,
        lat: 24,
        long: 53.7,
        depth: 900
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 5,
        day: 16,
        h: 10,
        m: 52,
        s: 29.35,
        lat: -28,
        long: -28.1,
        depth: 940
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 4,
        day: 16,
        h: 19,
        m: 58,
        s: 4.27,
        lat: -37.8,
        long: -30.8,
        depth: 975
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 6,
        day: 18,
        h: 5,
        m: 1,
        s: 16.06,
        lat: 9.3,
        long: 17.5,
        depth: 1200
    },
    {
        type: "Deep moonquake",
        year: 1973,
        month: 5,
        day: 28,
        h: 18,
        m: 53,
        s: 12.96,
        lat: -28.7,
        long: -33.9,
        depth: 880
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 10,
        day: 81,
        h: 52,
        m: 4,
        s: 35.48,
        lat: 6.8,
        long: 5.1,
        depth: 1105
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 11,
        day: 7,
        h: 8,
        m: 52,
        s: 7.94,
        lat: 23.1,
        long: -18,
        depth: 861
    },
    {
        type: "Deep moonquake",
        year: 1973,
        month: 1,
        day: 5,
        h: 22,
        m: 50,
        s: 30.86,
        lat: 18.6,
        long: 34.7,
        depth: 882
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 5,
        day: 15,
        h: 17,
        m: 18,
        s: 7.15,
        lat: 21.7,
        long: -41,
        depth: 1055
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 6,
        day: 12,
        h: 18,
        m: 17,
        s: 38.54,
        lat: -36.8,
        long: -38.9,
        depth: 980
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 6,
        day: 9,
        h: 20,
        m: 15,
        s: 7.55,
        lat: 34.4,
        long: 59.3,
        depth: 898
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 5,
        day: 16,
        h: 0,
        m: 1,
        s: 51.54,
        lat: 22.5,
        long: 18.5,
        depth: 1059
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 5,
        day: 17,
        h: 0,
        m: 42,
        s: 45.93,
        lat: 11.8,
        long: -34.3,
        depth: 921
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 10,
        day: 11,
        h: 19,
        m: 35,
        s: 46.79,
        lat: 6.9,
        long: 117.8,
        depth: 887
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 6,
        day: 14,
        h: 18,
        m: 34,
        s: 27.24,
        lat: 7,
        long: -9.3,
        depth: 932
    },
    {
        type: "Deep moonquake",
        year: 1973,
        month: 6,
        day: 27,
        h: 23,
        m: 48,
        s: 35.37,
        lat: -1.6,
        long: -10.9,
        depth: 886
    },
    {
        type: "Deep moonquake",
        year: 1972,
        month: 6,
        day: 8,
        h: 16,
        m: 16,
        s: 24.7,
        lat: 13.9,
        long: -26.8,
        depth: 953
    },
    {
        type: "Deep moonquake",
        year: 1973,
        month: 5,
        day: 3,
        h: 1,
        m: 52,
        s: 35.84,
        lat: 22.7,
        long: -53.5,
        depth: 1004
    },
    {
        type: "Deep moonquake",
        year: 1974,
        month: 5,
        day: 19,
        h: 3,
        m: 9,
        s: 4.66,
        lat: 51.9,
        long: 57.1,
        depth: 956
    },
    {
        type: "Deep moonquake",
        year: 1973,
        month: 4,
        day: 30,
        h: 1,
        m: 5,
        s: 26.01,
        lat: 9.4,
        long: -51.6,
        depth: 835
    },
    {
        type: "Deep moonquake",
        year: 1974,
        month: 2,
        day: 18,
        h: 8,
        m: 35,
        s: 27.4,
        lat: 8.8,
        long: 15.7,
        depth: 888
    },
    {
        type: "Deep moonquake",
        year: 1977,
        month: 5,
        day: 19,
        h: 6,
        m: 8,
        s: 21.53,
        lat: -3.4,
        long: 18.7,
        depth: 1000
    },
]

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ dm: dm }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}