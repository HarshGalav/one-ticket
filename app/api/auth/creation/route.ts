import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  try {
    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
      console.log("New user created:", dbUser);
    } else {
      console.log("Existing user found:", dbUser);
    }

    return NextResponse.redirect(
      process.env.NODE_ENV === "production"
        ? "https://oneticket.vercel.app/dasboard"
        : "http://localhost:3000/dashboard"
    );
  } catch (error) {
    console.error("Error in user creation/retrieval:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
