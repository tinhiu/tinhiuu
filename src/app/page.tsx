import Image from "next/image";
import prisma from "@/lib/prisma";


export default async function Home() {
	const users = await prisma.user.findMany();
	console.log("users: ", users)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

	
		<h1>Hello huowg chui</h1>
	

    </div>
  );
}
