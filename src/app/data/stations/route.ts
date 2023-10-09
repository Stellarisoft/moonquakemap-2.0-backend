import { getAll } from "@/db/stations";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ stations: getAll() }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}