import { getDmById } from "@/db/dm"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const id = req.url.split("dm/")[1]
        return NextResponse.json({ dm: getDmById(id) }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}