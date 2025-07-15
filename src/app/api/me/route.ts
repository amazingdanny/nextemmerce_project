import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/sessions";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const res = new NextResponse();
  const session = await getIronSession(req, res, sessionOptions);

  if (!session.user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({ user: session.user });
}
