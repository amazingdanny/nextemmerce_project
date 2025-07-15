import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { AuthenticationSchemaSignIn } from "@/Validation/AuthenticationValidation/schema";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/sessions";

const userDataPath = path.join(process.cwd(), "src", "app", "api", "signIn" ,"users.json");
const userData = JSON.parse(fs.readFileSync(userDataPath, "utf-8"));
const users = userData.users || [];


export async function POST(req: Request) {
    const body = await req.json();
    const result = AuthenticationSchemaSignIn.safeParse(body);
  
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    const { email, password } = result.data;

    const user = users.find(
        (u: any) => u.email === email && u.password === password
      );
    
      if (!user) {
        return NextResponse.json(
          { success: false, errors: { email: ["Invalid credentials"] } },
          { status: 401 }
        );
      }
    
      const response = NextResponse.json({ success: true, user });

      const session = await getIronSession(req, response, sessionOptions);
      session.user = {
        name: user.name,
        email: user.email,
        password: user.password
      };
      await session.save();

      return response
}  
