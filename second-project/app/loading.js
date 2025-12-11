export default function Loading() {
    return (
        <div className="flex flex-col gap-4 min-h-screen w-screen items-center justify-center ">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-500"></div>
            <h1 className="text-4xl font-bold">Loading Posts...</h1>
        </div>
    );
}