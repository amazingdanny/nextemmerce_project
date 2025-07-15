import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {AuthenticationSchemaSignUp } from "@/Validation/AuthenticationValidation/schema";

const userDataPath = path.join(process.cwd(), "src", "app", "api", "signIn", "users.json");

export async function POST(req: Request) {
    const body = await req.json();
    const result = AuthenticationSchemaSignUp.safeParse(body);

    if (!result.success) {
        return NextResponse.json(
            { success: false, errors: result.error.flatten().fieldErrors },
            { status: 400 }
        );
    }

    const { email, password, name} = result.data;

    let users = [];
    if (fs.existsSync(userDataPath)) {
        const userData = JSON.parse(fs.readFileSync(userDataPath, "utf-8"));
        users = userData.users || [];
    }
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
        return NextResponse.json(
            { success: false, errors: { email: ["Email already exists"] } },
            { status: 409 }
        );
    }

    users.push({ email, password, name });
    console.log("New user registered:", { email, password });
    fs.writeFileSync(userDataPath, JSON.stringify({ users }, null, 2));

    return NextResponse.json({ success: true, message: "User registered successfully" });
}