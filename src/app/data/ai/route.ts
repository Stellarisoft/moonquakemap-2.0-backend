import { getAllAi } from "@/db/ai";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ ai: getAllAi() }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}