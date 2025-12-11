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
            <h1 className="text-3xl font-bold mb-6 my-20">Posts</h1>
            <ul className="space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                        <h2 className="text-xl font-semibold mb-2 text-black">{post.title} | {post.id}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}