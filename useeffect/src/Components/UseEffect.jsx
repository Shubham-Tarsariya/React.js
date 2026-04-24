import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [Count1, setCount1] = useState(1)
    const [Count2, setCount2] = useState(10)

    const response = async () => {
        let data = await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
        console.log("Api Calling", data);
    }

    useEffect(() => {
        response();
    }, [Count1])

    function Btn1() {
        setCount1(Count1 + 1);
    }
    function Btn2() {
        setCount2(Count2 + 1);
    }
    return (
        <>
            <div className="flex items-center justify-center gap-6 p-8">
                <div className="bg-black text-white w-64 h-64 flex items-center justify-center text-7xl font-bold">Page:{Count1}</div>
                <button
                    onClick={Btn1}
                    className="bg-black text-white px-4 py-2 font-bold rounded-md">Click</button>
            </div>

            <div className="flex items-center justify-center gap-6 p-8">
                <div className="bg-black text-white w-64 h-64 flex items-center justify-center text-7xl font-bold">{Count2}</div>
                <button
                    onClick={Btn2}
                    className="bg-black text-white px-4 py-2 font-bold rounded-md">Click</button>
            </div>
        </>
    )
}

export default UseEffect
