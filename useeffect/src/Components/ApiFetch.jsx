import React, { useState } from "react";
import axios from "axios";

const ApiFetch = () => {
    const [Data1, setData1] = useState([]);
    const [Data2, setData2] = useState([]);
    const [Data3, setData3] = useState([]);

    // Method 1
    const Method1 = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((rawdata) => {
                return rawdata.json();
            })
            .then((jsondata) => {
                return setData1(jsondata);
            })
            .catch((e) => {
                console.error(e);
            });

    };

    // Method 2
    const Method2 = async () => {
        try {
            let response = await fetch("https://dummyjson.com/products?limit=10");
            let data = await response.json();
            console.log(data.products);
            setData2(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    // Method 3
    const Method3 = async () => {
        let response = await axios.get("https://dummyjson.com/recipes?limit=10");
        setData3(response.data.recipes)
        console.log(response.data.recipes);
        // get ==> data recive only (data aave to get)
        // post ==> data send only (data jay to post)
        // patch ==> data modify only (data update/modify to patch)
        // delete ==> data delete  (data remove/delete  thay to )
    }

    return (
        <>
            <section className="flex flex-col flex-wrap p-6">
                <h1 className="text-6xl text-center font-bold">API Fetch Mathods</h1>

                {/* Method 1 */}
                <div className="w-full min-h-1/2  border-2  my-5 border-red-600 p-4 rounded-md flex  flex-col justify-center  items-center gap-y-4 ">
                    <h1 className="text-center text-3xl font-semibold">
                        Method 1: Fetch ,then, then, catch
                    </h1>

                    <div className="bg-black text-white p-3 rounded-md w-full h-96 flex flex-wrap items-center justify-center gap-4 overflow-auto ">
                        {Data1.map((data, id) => {
                            return (
                                <div key={id} className="bg-[#222] p-2 rounded-md w-1/2">
                                    <p>
                                        <span className="font-semibold">Name : </span>
                                        {data.name}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Email : </span>
                                        {data.email}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Website : </span>
                                        {data.website}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <button className="bg-orange-500 rounded-md px-4 py-3 w-36 focus:scale-95 text-white font-bold" onClick={Method1}>Get Data 1</button>
                </div>

                {/* Method 2 */}

                <div className="w-full min-h-1/2  border-2  my-5 border-teal-500  rounded-xl p-4 flex flex-col items-center justify-center gap-y-4">
                    <h1 className="text-3xl text-center font-bold">
                        Method 2: Async, Await, Fetch
                    </h1>

                    <div className="bg-black text-white p-3 rounded-md w-full h-96 flex flex-wrap items-center justify-center gap-4 overflow-auto ">

                        {Data2.map((data, id) => {
                            return (
                                <div className="bg-[#222] rounded-xl p-4 w-64 " key={id}>
                                    <img src={data.images[0]} alt="product" className="bg-[#555] rounded-2xl my-2"/>
                                    <div className="flex items-center justify-between gap-3 h-16 ">
                                        <h2 className="text-md font-bold">{data.title}</h2>
                                        <p className=" font-bold bg-black/50 p-2 rounded-md flex-nowrap">${data.price}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    <button className="bg-green-600 text-white w-36 px-4 py-2  focus:scale-95 font-bold rounded-md"
                        onClick={Method2}
                    >Get Data 2</button>
                </div>

                {/* Method 3 */}

                <div className="w-full min-h-1/2  border-2  my-5 border-cyan-600  rounded-xl p-4 flex flex-col items-center justify-center gap-y-4" >
                    <h1 className="text-3xl text-center font-bold">Method 3: Axios (Async, Await)</h1>

                    <div className="bg-black text-white p-3 rounded-md w-full h-96 flex flex-wrap items-center justify-center gap-4 overflow-auto ">
                        {Data3.map((data, id) => {
                            return(
                                <div className="bg-[#222] rounded-xl p-4 w-64 " key={id}>
                                    <img src={data.image} alt="product" className="bg-[#555] rounded-2xl my-2"/>
                                    <div className="flex items-center justify-between gap-3 h-16 ">
                                        <h2 className="text-md font-bold">{data.name}</h2>
                                        <p className=" font-bold bg-black/50 p-2 rounded-md flex-nowrap">{data.rating}/5</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="w-36 px-4 py-2 bg-blue-600 text-white focus:scale-95 font-bold rounded-md" onClick={Method3}>Get Data 3</button>
                </div>

            </section>
        </>
    )
}

export default ApiFetch;