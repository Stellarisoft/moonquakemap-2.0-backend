import { getAllDm } from "@/db/dm";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ dm: getAllDm() }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}