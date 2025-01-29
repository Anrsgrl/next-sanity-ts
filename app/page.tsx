import Posts from "@/components/layout/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex items-center text-4xl">
            <span> + </span>
            <Image
              className="mx-2"
              src="/sanity.svg"
              alt="Sanity logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Create a Sanity project and configure it in your{" "}
            <code className="step-code">sanity/config</code> file. Add your
            Sanity project ID and dataset name using{" "}
            <code className="step-code">process.env.</code> for environment
            variable safety.
          </li>
          <li className="mb-2">
            Install the required Sanity client library:{" "}
            <code className="step-code">npm install @sanity/client</code>.
          </li>
          <li className="mb-2">
            To fetch data, use Sanity's{" "}
            <code className="step-code">client.fetch</code> method. Write{" "}
            <code className="step-code">groq</code> queries to fetch the
            necessary content, such as blog posts, authors, or any other
            documents you've defined in your Sanity Studio.
          </li>
          <li className="mb-2">
            For querying blog posts or other content by{" "}
            <code className="step-code">slug</code>, use dynamic routing with
            Next.js and fetch the data using the{" "}
            <code className="step-code">slug</code> parameter.
          </li>
          <li className="mb-2">
            To render rich text content (like a blog post body), use the{" "}
            <code className="step-code">PortableText</code> component. It will
            handle Sanity's rich text format and render it as HTML.
          </li>
          <li className="mb-2">
            For images and assets, use Sanity's{" "}
            <code className="step-code">@sanity/image-url</code> package to
            generate image URLs and render them in your application.
          </li>
          <li>
            I have temporarily commented out{" "}
            <code className="step-code">Posts.jsx</code>. You can uncomment it
            once you have added your{" "}
            <code className="step-code">projectId</code> to the{" "}
            <code className="step-code">sanity/client</code> configuration.
          </li>
        </ol>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://templates.anarr.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore all templates
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.sanity.io/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanity docs →
          </a>
        </div>
        {/* <Posts /> */}
      </main>
    </div>
  );
}
