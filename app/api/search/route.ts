import db from "@/app/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const query = request.nextUrl.searchParams.get("q");

    let data: Array<any> = [];

    if (!!query && !!query.trim()) {

        const stmt = db.prepare(`SELECT * FROM cities WHERE LOWER(name) LIKE ?`);

        data = stmt.all(`${query.toLowerCase()}%`) || [];
    }

    return NextResponse.json({
        data,
        length: data.length
    });
}