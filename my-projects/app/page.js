import Image from "next/image"
export default function Projects() {
  const projects = [
    { id: 1,img:"/ayat.jpg", name: "عارض الآيات", des: "تطبيق يعرض آيات من القرآن الكريم بطريقة منظمة، مع تصميم بسيط يساعد على التأمل والقراءة.", url: "https://random-ayat-d7.pages.dev/",tags:"Html Css JS" },
    {
      id: 2, img: "/sunnah.jpg", name: "تطبيق السنة", des: "يعرض أحاديث نبوية مختارة، مع واجهة سهلة للتنقل بين الأحاديث، ويهدف لنشر السنة بأسلوب عصري.", url: "https://sunnah-app-d7.pages.dev/",
      tags:"Html Css JS React"
     },
    { id: 3, img:"/Old.png", name: "Old portfolio", des: "أول مشروع لي باستخدام html وcss", url: "https://my-own-site-k7k.pages.dev/", tags:"Html Css" },
    { id: 4, img:"/Memory.jpg", name: "لعبة الذاكرة", des: "لعبة تفاعلية تساعد على تحسين الذاكرة والتركيز.", url: "https://memory-game-d7.pages.dev/" ,tags:"Html Css JS"},
    { id: 5, img:"/Guess.jpg", name: "لعبة تخمين الرقم", des: "لعبة ممتعة لتخمين الرقم المُختار من قبل الحاسوب.", url: "https://guess-number-d7.pages.dev/", tags:"Html Css JS" },
    { id: 6, img:"/todo.jpeg", name: "قائمة المهام", des: "تطبيق يساعد على تنظيم المهام اليومية بسهولة.", url: "https://to-do-list-d7.pages.dev/", tags:"Html Css JS React" },
    { id: 7, img:"/weather.jpg", name: "تطبيق الطقس", des: "يعرض معلومات الطقس الحالية والتنبؤ بالطقس في مختلف المدن.", url: "https://weather-app-d7.pages.dev/", tags:"Html Css JS" },
    { id: 8,img:"/earth.jpg", name: "معلومات الدول", des: "يعرض معلومات شاملة عن الدول المختلفة حول العالم.", url: "https://countries-info-d7.pages.dev/", tags:"Html Css API" },
    { id: 9, img:"/currency.jpg", name: "محول العملات", des: "يقوم بتحويل مبلغ من وحدة العملات الى وحدة اخرى", url: "https://currency-converter-d7.pages.dev/", tags:"Html Css API" },
    { id: 10, img:"/New.png", name: "New portfolio", des: "موقعي الشخصي الجديد باستخدام react js", url: "https://potrfolio-d7.pages.dev/" },
    { id: 11, img:"/time.jpg", name: "مركز الوقت", des: "يعرض الوقت الحالي في مختلف المدن حول العالم.", url: "https://time-hub-d7.vercel.app/", tags:"Html Css Next js" },
  ]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-8 
    bg-blue-100">
      <h1 className="text-4xl font-bold mb-8">مشاريعي</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
        {projects.map((p) => {
          return (
            <div key={p.id} className="border rounded-lg p-4 hover:shadow-xl transition-shadow flex flex-col items-center bg-amber-50 h-full shadow-lg">
              <Image src={p.img} alt={p.name} width={300} height={200} />
              <h2 className="text-xl font-semibold my-5">{p.name}</h2>
              <div className="mb-3 flex flex-wrap justify-center">
                {p.tags && p.tags.split(" ").map((tag, index) => (
                  <span key={index} className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 ">{tag}</span>
                ))}
              </div>
              <p className="text-gray-600 text-center flex grow font-semibold">{p.des}</p>
              <a href={p.url} target="_blank" className="p-3 text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 rounded-lg mt-3 transition-colors">عرض المشروع</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}