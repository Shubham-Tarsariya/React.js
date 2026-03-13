import { GalleryVerticalEnd, Plus, UserRound } from "lucide-react";

const Card = ({data}) => {
    console.log(data)
  return (
   <>
    <div className="card bg-orange-500 w-full h-auto max-w-[20rem]  rounded-4xl p-2 shadow-2xl" >
        <img src={data.photo} alt="user" className="w-84 h-auto object-contain rounded-4xl"/>

        <div className="content px-4 py-2">
            <h2 className="text-3xl font-bold my-2"> {data.name}</h2>
            <p className="text-md mb-2">{data.bio}</p>
        </div>

        <div className="numbers py-2 px-4 flex justify-between items-center">
            <p className="font-medium flex items-center gap-2"><UserRound className="inline-block font-bold"/>{data.followers}</p>
            <p className="font-medium flex items-center gap-2"><GalleryVerticalEnd className="inline-block font-bold"/>{data.photos}</p>
            <button className="rounded-full px-6 py-2 bg-white/95 text-black flex items-center gap-2">Follow<Plus className="inline-block font-bold"/></button>
        </div>
    </div>
   </>
  )
}

export default Card;