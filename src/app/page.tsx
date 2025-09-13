import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="mx-auto grid min-h-screen max-w-3xl grid-rows-[auto_1fr_auto] px-6 py-10 sm:px-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/transparent-logo.png" alt="Lantern logo" width={40} height={40} priority />
            <span className="text-base font-semibold tracking-tight">Lantern</span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#download" className="underline">Download</Link>
          </nav>
        </header>

        {/* Main */}
        <main className="mt-12 flex flex-col gap-12">
          {/* Hero */}
          <section className="flex flex-col items-start gap-6">
            <h1 className="text-2xl font-bold leading-tight tracking-tight">
              Lantern is a small light for the next steps
            </h1>
            <p className="max-w-prose text-base text-gray-700">
              We are parents of our son Philip, who is 7 and autistic. When he was younger we often felt lost. There were many questions but no clear answers about what to do every day.
            </p>
            <p className="max-w-prose text-gray-700">
              From this experience we decided to create Lantern. It is a simple app that gives parents a plan and small steps to practice with their child. Our goal is to make things a little easier for families who are on the same path.
            </p>

          </section>


          {/* What Lantern offers */}
          <section id="features" className="grid gap-4">
            <h2 className="text-l font-semibold tracking-tight">What Lantern offers</h2>
            <ul className="grid gap-3 text-gray-700">
              <li className="rounded-2xl border border-gray-200 p-4"><b>Skill roadmap</b> across communication, motor, social, self-help, and play</li>
              <li className="rounded-2xl border border-gray-200 p-4"><b>Interactive activities</b> you can try right away at home</li>
              <li className="rounded-2xl border border-gray-200 p-4"><b>Child-first design</b>: stop anytime, respect every way of communicating, celebrate each small step</li>
            </ul>
          </section>

          {/* Download section with 2-column layout */}
          <section id="download" className="grid gap-6">
            <h2 className="text-xl font-semibold tracking-tight">Get Lantern</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                     {/* App Store link column */}
              <div className="flex flex-col items-center justify-center md:items-center">
                <p className="text-gray-700 text-center md:text-left">
                  Download Lantern on the App Store and start your journey with small, meaningful steps.
                </p>
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="inline-flex items-center transition-transform hover:scale-105"
                >
                  <Image
                    src="/App Store Apple Logo.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                  />
                </a>
              </div>
              {/* Screenshot column */}
              <div className="flex justify-center md:justify-center">
                <div className="overflow-hidden rounded-2xl border border-gray-200 w-48">
                  <Image
                    src="/screenshot.png"
                    alt="Lantern app screenshot"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
       
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="grid gap-2">
            <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
            <p className="text-gray-700">Questions or feedback are very welcome.</p>
            <a href="mailto:asdlantern@gmail.com" className="underline text-gray-900">asdlantern@gmail.com</a>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Lantern</span>
          <nav className="flex items-center gap-4">
            <Link href="/terms" className="underline">Terms</Link>
            <Link href="/privacy" className="underline">Privacy</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
