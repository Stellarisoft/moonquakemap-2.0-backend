import { getStationById } from "@/db/stations";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const id = req.url.split("stations/")[1]
        return NextResponse.json({ station: getStationById(id) }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}