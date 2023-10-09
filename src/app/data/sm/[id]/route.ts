import { getSmById } from "@/db/sm";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const id = req.url.split("sm/")[1]
        return NextResponse.json({ station: getSmById(id) }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}