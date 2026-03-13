import { Bookmark } from 'lucide-react';

const Card1 = ({data}) => {
    return (
        <div className="max-w-sm bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 font-sans">
            
            <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center p-2 shadow-inner">
                    <img src={data.logo} alt="Amzon" className='w-8 h-8 object-contain' />
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-100 text-gray-400 hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium">Save</span>
                    <Bookmark size={16} strokeWidth={2} />
                </button>
            </div>

            <div className="mb-6">
                <p className="text-gray-900 font-bold text-lg inline-block mr-2">{data.company}</p>
                <span className="text-gray-400 text-sm">{data.postedTime}</span>
                <h2 className="text-[28px] font-bold text-gray-900 mt-2 tracking-tight leading-tight">
                    {data.title}
                </h2>
            </div>

            <div className="flex gap-2 mb-10">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl">
                   {data.tags[0]}
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl">
                    {data.tags[1]}
                </span>
            </div>

            <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
            <div>
                <p className="text-xl font-bold text-gray-900 leading-none">{data.salary}</p>
                <p className="text-gray-400 text-xs mt-1">{data.location}</p>
            </div>
            <button className="bg-black text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-all active:scale-95">
                Apply now
            </button>
            </div>
        </div>
    )
}

export default Card1
