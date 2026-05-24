import prisma from "@/lib/prisma";

export default async function about() {
	const posts = await prisma.post.findMany();
	console.log("posts: ", posts)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
		<main>
		<div>
		<h1>About page</h1>
		</div>
      </main>
    </div>
  );
}