import Image from "next/image"
export default function Projects() {
  const projects = [
    { id: 1,img:"/project1.jpg", name: "عارض الآيات", des: "تطبيق يعرض آيات من القرآن الكريم بطريقة منظمة، مع تصميم بسيط يساعد على التأمل والقراءة.", url: "#" },
    { id: 2,img:"/project2.jpg", name: "تطبيق السنة", des: "", url: "#" },
    { id: 3, img:"/project3.jpg", name: "Old portfolio", des: "", url: "#" },
    { id: 4, img:"/project4.jpg", name: "لعبة الذاكرة", des: "", url: "#" },
    { id: 5, img:"/project5.jpg", name: "لعبة تخمين الرقم", des: "", url: "#" },
    { id: 6, img:"/project6.jpg", name: "قائمة المهام", des: "", url: "#" },
    { id: 7, img:"/project7.jpg", name: "تطبيق الطقس", des: "", url: "#" },
    { id: 8,img:"/project8.jpg", name: "معلومات الدول", des: "", url: "#" },
    { id: 9, img:"/project9.jpg", name: "محول العملات", des: "", url: "#" },
    { id: 10, img:"/project10.jpg", name: "New portfolio", des: "", url: "#" },
    { id: 11, img:"/project11.jpg", name: "مركز الوقت", des: "", url: "#" }
  ]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-8">
      <h1 className="text-4xl font-bold mb-8">مشاريعي</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {projects.map((p) => {
          return (
            <div key={p.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image src={p.img} alt={p.name} width={200} height={200} />
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600">{p.des}</p>
              <a href={p.url} className="text-blue-500 hover:underline">عرض المشروع</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}