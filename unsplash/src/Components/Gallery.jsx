import { ArrowDown, Bookmark, Plus } from 'lucide-react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Gallery = () => {
    const [Img, setImg] = useState([]);
    const [Page, setPage] = useState(1);
    const [Loading, setLoading] = useState(false);

    // api fetch
    useEffect (() => {
        const ImgApi = async () => {
            if (Loading) return;
            setLoading(true);
            try{
                let data = await axios.get(`https://picsum.photos/v2/list?page=${Page}`,);
                console.log(data.data);
                console.log(Page);
                // setImg(data.data)
                setImg((prev)=>[...prev, ...data.data]);
            } catch(error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        ImgApi();
    }, [Page]);

    // Scrolling effect
    useEffect (() => {
        const handleScroll = () => {
            if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300){
                setPage((prev)=>{
                   return prev + 1;
                });
            }
        }
        window.addEventListener("scroll",handleScroll);
        // remove event after onetime calling
        return ()=> window.removeEventListener("scroll",handleScroll)
    }, [Loading]);

    return (
        <>
          <section>
            <div className='columns-1 sm:columns-2 md:columns-3 gap-4 p-4'>

                {/* Api Calling Image Div */}
                {Img.map((data, id) => {
                    return(
                        <div key={id} className='mb-4 break-inside-avoid overflow-hidden shadow group relative'>
                        <img src={data.download_url} 
                        alt='img' 
                        className='w-full object-cover'/>

                        {/* Overlay Div */}
                        <div className='absolute top-0 inset-0 flex flex-col justify-between p-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                            {/* top icons */}
                            <div className='flex items-center justify-end gap-2'>
                                <div className='bg-white p-2 rounded-md'>
                                    < Bookmark />
                                </div>
                                <div className='bg-white p-2 rounded-md'>
                                    < Plus/>
                                </div>
                            </div>
                            {/* bottom icons */}
                            <div className='flex items-center justify-between'>
                                <p className='text-white'>{data.author}</p>
                                <div className='p-2 bg-white rounded-md'>
                                    <ArrowDown/>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })}

                
            </div>
          </section>  
        </>
    )
}

export default Gallery
