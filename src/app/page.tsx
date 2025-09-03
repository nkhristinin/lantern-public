import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Lantern</h1>

        <div className="flex flex-col gap-4">
          We try to help parents with children with autism
        </div>

        <div className="text-sm text-gray-500">
          Any questions? Write email to{" "}
          <a href="asdlantern@gmail.com" className="underline">
            asdlantern@gmail.com
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <a className="underline" href="/terms">
            Terms
          </a>
        </div>
      </main>
    </div>
  );
}
