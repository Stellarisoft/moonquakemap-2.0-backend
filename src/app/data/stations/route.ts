import { NextResponse } from "next/server"

const stations = [
    {
        mission: "Apollo 11",
        lat: 0.67337,
        long: 23.47293,
    },
    {
        mission: "Apollo 12",
        lat: -3.01084,
        long: -23.42456,
    },
    {
        mission: "Apollo 14",
        lat: -3.64450,
        long: -17.47753,
    },
    {
        mission: "Apollo 15",
        lat: 26.13407,
        long: 3.62981,
    },
    {
        mission: "Apollo 16",
        lat: -8.97577,
        long: 15.49649,
    },
]

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ stations: stations }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}