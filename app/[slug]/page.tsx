import { PortableText, SanityDocument } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    }
  },
  body[]
}`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to main page
      </Link>
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full object-cover rounded-md aspect-video"
        />
      )}
      <div className="flex w-full items-start justify-between">
        <h1 className="text-2xl font-bold mb-8">{post.title}</h1>
        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      </div>
      <div className="">
        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({ value }) => (
                <img
                  src={urlFor(value.asset).width(800).url()}
                  alt={value.alt || "Image"}
                  className="rounded-lg my-4"
                />
              ),
            },
          }}
        />
      </div>
    </main>
  );
}
