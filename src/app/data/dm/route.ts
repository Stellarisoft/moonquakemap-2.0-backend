import { NextResponse } from "next/server"

const dm = [
    {
        type: "Deep moonquake",
        date: 118235400.0,
        lat: -17.4,
        long: -38.4,
        depth: 917
    },
    {
        type: "Deep moonquake",
        date: 205177920.0,
        lat: 49.7,
        long: 54.7,
        depth: 860
    },
    {
        type: "Deep moonquake",
        date: 205150260.0,
        lat: 24,
        long: 53.7,
        depth: 900
    },
    {
        type: "Deep moonquake",
        date: 232653120.0,
        lat: -28,
        long: -28.1,
        depth: 940
    },
    {
        type: "Deep moonquake",
        date: 230093880.0,
        lat: -37.8,
        long: -30.8,
        depth: 975
    },
    {
        type: "Deep moonquake",
        date: 235483260.0,
        lat: 9.3,
        long: 17.5,
        depth: 1200
    },
    {
        type: "Deep moonquake",
        date: 107488380.0,
        lat: -28.7,
        long: -33.9,
        depth: 880
    },
    {
        type: "Deep moonquake",
        date: 89999520.0,
        lat: 23.1,
        long: -18,
        depth: 861
    },
    {
        type: "Deep moonquake",
        date: 95147400.0,
        lat: 18.6,
        long: 34.7,
        depth: 882
    },
    {
        type: "Deep moonquake",
        date: 74823480.0,
        lat: 21.7,
        long: -41,
        depth: 1055
    },
    {
        type: "Deep moonquake",
        date: 235012620.0,
        lat: -36.8,
        long: -38.9,
        depth: 980
    },
    {
        type: "Deep moonquake",
        date: 234760500.0,
        lat: 34.4,
        long: 59.3,
        depth: 898
    },
    {
        type: "Deep moonquake",
        date: 232614060.0,
        lat: 22.5,
        long: 18.5,
        depth: 1059
    },
    {
        type: "Deep moonquake",
        date: 74936520.0,
        lat: 11.8,
        long: -34.3,
        depth: 921
    },
    {
        type: "Deep moonquake",
        date: 87705300.0,
        lat: 6.9,
        long: 117.8,
        depth: 887
    },
    {
        type: "Deep moonquake",
        date: 77420040.0,
        lat: 7,
        long: -9.3,
        depth: 932
    },
    {
        type: "Deep moonquake",
        date: 110098080.0,
        lat: -1.6,
        long: -10.9,
        depth: 886
    },
    {
        type: "Deep moonquake",
        date: 76893360.0,
        lat: 13.9,
        long: -26.8,
        depth: 953
    },
    {
        type: "Deep moonquake",
        date: 105267120.0,
        lat: 22.7,
        long: -53.5,
        depth: 1004
    },
    {
        type: "Deep moonquake",
        date: 138190140.0,
        lat: 51.9,
        long: 57.1,
        depth: 956
    },
    {
        type: "Deep moonquake",
        date: 105005100.0,
        lat: 9.4,
        long: -51.6,
        depth: 835
    },
    {
        type: "Deep moonquake",
        date: 130433700.0,
        lat: 8.8,
        long: 15.7,
        depth: 888
    },
    {
        type: "Deep moonquake",
        date: 232895280.0,
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