import { SessionOptions } from "iron-session";
import { User } from "@/types/User"; 

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD as string, 
  cookieName: "myapp_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};


declare module "iron-session" {
    interface IronSessionData {
      user?: {
        name: string;
        email: string;
        password: string;
      };
    }
  }