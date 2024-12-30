import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header / Hero Section */}
      <header className="row-start-1 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Lateral Thinking Web App</h1>
      </header>

      {/* Main Content */}
      <main className="row-start-2 flex flex-col gap-8 items-center sm:items-start max-w-xl">

        <p className="text-center sm:text-left text-sm font-[family-name:var(--font-geist-mono)]">
          Welcome to the Lateral Thinking Web App! This platform is designed to 
          help you practice and explore lateral thinking puzzles, riddles, and 
          creative problem-solving methods.
        </p>

        <ol className="list-inside list-decimal text-sm font-[family-name:var(--font-geist-mono)] space-y-2 text-left">
          <li>Try a new lateral thinking puzzle every day.</li>
          <li>Challenge your friends or colleagues.</li>
          <li>Track your progress and compare solutions.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/daily-puzzle"
          >
            Get Started
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
          >
            
            Read the Guide
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://www.example.com/about-lateral-thinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About Lateral Thinking
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://www.example.com/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Example Puzzles
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://www.example.com/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
      </footer>
    </div>
  );
}
