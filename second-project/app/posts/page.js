import Link from "next/link";

export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 120
        }
    });
    const posts = await res.json();
    console.log(posts)
    return (
        <div className="max-w-4xl mx-auto px-4 min-h-screen w-screen flex flex-col items-center justify-center">
            <p>,,,</p>
            <h1 className="text-3xl font-bold mb-6 my-20">Posts</h1>
            <Link>
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li key={post.id} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition hover:text-black">
                            <Link href={`/posts/${post.id}`}>
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-gray-600">{post.body}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Link>
            
        </div>
    )
}