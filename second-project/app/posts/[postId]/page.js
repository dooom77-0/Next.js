import {notFound} from 'next/navigation';

export default async function PostDatailsPage({ params }) {
    const { postId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 120
        }
    });
    const post = await res.json();
    console.log(post);
    if (!post) {
        return notFound();
    }
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen w-screen" >
            <h1 className="text-4xl font-bold text-emerald-300">Post Details Page</h1>
            <h2 className="text-3xl text-center">Post ID: <b>{post.id}</b> </h2>
            <h3 className="text-2xl text-center">Post Title: <b>{post.title}</b></h3>
            <h3 className="text-2xl text-center">Post Body: <b>{post.body}</b></h3>
        </div>
    )
}