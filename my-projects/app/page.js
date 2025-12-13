import Image from "next/image"
export default function Projects() {
  const projects = [
    { id: 1,img:"/project1.jpg", name: "Project 1", des: "mmcc", url: "#" },
    { id: 2,img:"/project2.jpg", name: "Project 2", des: "mmcc", url: "#" },
    { id: 3, img:"/project3.jpg", name: "Project 3", des: "mmcc", url: "#" },
    { id: 4, img:"/project4.jpg", name: "Project 4", des: "mmcc", url: "#" },
    { id: 5, img:"/project5.jpg", name: "Project 5", des: "mmcc", url: "#" },
    { id: 6, img:"/project6.jpg", name: "Project 6", des: "mmcc", url: "#" },
    { id: 7, img:"/project7.jpg", name: "Project 7", des: "mmcc", url: "#" },
    { id: 8,img:"/project8.jpg", name: "Project 8", des: "mmcc", url: "#" },
    { id: 9, img:"/project9.jpg", name: "Project 9", des: "mmcc", url: "#" },
    { id: 10, img:"/project10.jpg", name: "Project 10", des: "mmcc", url: "#" },
    { id: 11, img:"/project11.jpg", name: "Project 11", des: "mmcc", url: "#" },
    { id: 12, img:"/project12.jpg", name: "Project 12", des: "mmcc", url: "#" },
    { id: 13, img:"/project13.jpg", name: "Project 13", des: "mmcc", url: "#" },
  ]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen py-2 px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {projects.map((p) => {
          return (
            <div key={p.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image src={p.img} alt={p.name} width={200} height={200} />
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600">{p.des}</p>
              <a href={p.url} className="text-blue-500 hover:underline">View Project</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}