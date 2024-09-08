import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../dashboard/ThemeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/utils/db";
import Defaultimage from "@/public/default.png";

async function getDbUser(userId: string) {
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      firstName: true,
      profileImage: true,
    },
  });
  return dbUser;
}

export async function Hero() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  let profileImage = Defaultimage.src;
  let firstName = "";

  if (user) {
    const dbUser = await getDbUser(user.id);
    if (dbUser) {
      profileImage = dbUser.profileImage || Defaultimage.src;
      firstName = dbUser.firstName;
    }
  }

  return (
    <section>
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <h4 className="text-3xl font-semibold">
              One<span className="text-primary">Ticket</span>
            </h4>
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <nav className="hidden md:flex md:items-center md:justify-end md:space-x-4">
          <ThemeToggle />
          {user ? (
            <>
              <Image src={profileImage} alt="User Avatar" width={40} height={40} className="rounded-full" />
              <span>{firstName}</span>
              <LogoutLink>
                <Button variant="secondary">Logout</Button>
              </LogoutLink>
            </>
          ) : (
            <>
              <Link href="/api/auth/login">
                <Button variant="secondary">Sign in</Button>
              </Link>
              <Link href="/api/auth/register">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </section>
  );
}