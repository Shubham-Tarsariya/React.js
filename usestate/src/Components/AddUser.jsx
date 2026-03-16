import React, { useState } from 'react'

const AddUser = () => {

    const [Data, setData] = useState([
        {name: "Aarav Patel", email: "aaravpatel@gamil.com"},
        {name: "Riya Sharma", email: "riyasharma@gamil.com"},
        {name: "Vivan Maheta", email: "vivanmehta@gamil.com"},
    ])

    function Add(){
        let arr = [...Data];
        arr.push({name:"Ananya Gupta", email:"ananyagupta@gmail.com"});

        if(Data[3]?.name === "Ananya Gupta" || Data[5]?.name === "Ananya Gupta"){
            return;
        }
        setData(arr);
    }

        function Add2(){
        let arr = [...Data];
        arr.push({name:"Ajay Variya", email:"ajayvariya@gmail.com"});
        arr.push({name:"Meet Parmar", email:"meetparmar@gmail.com"});

        if(Data[4]?.name === "Meet Parmar" || Data[5]?.name === "Meet Parmar"){
            return;
        }
        setData(arr);
    }

        function remove(){
            let arr2 = [...Data];
            arr.pop();
            setData(arr2);
        }

    return (
        <>
          <section className='flex flex-wrap justify-center items-center flec-wrap gap-6 my-10'>
            {Data.map((user) => {
                return (
                <div className='bg-[#555] rounded-2xl w-full h-auto max-w-sm p-2 text-center text-2xl font-bold flex flex-col gap-2'>
                    <h1 className='bg-[#222] px-4 py-2 rounded-xl'>{user.name}</h1>
                    <h1 className='bg-[#222] px-4 py-2 rounded-xl'>{user.email}</h1>
                </div>
                )
            })}
          </section>  

            <div className='flex items-center justify-center'>
                <button className='bg-orange-400 py-2 px-4 text-center rounded-lg active:bg-orange-200' onClick={Add}>
                Add One More User
                </button>
            </div> <br></br>

            <div className='flex items-center justify-center'>
                <button className='bg-orange-400 py-2 px-4 text-center rounded-lg active:bg-orange-200' onClick={Add2}>
                Add Two More User
                </button>
            </div> <br></br>

            <div className='flex items-center justify-center'>
                <button className='bg-orange-400 py-2 px-4 text-center rounded-lg active:bg-orange-200' onClick={remove}>
                Clear All User
                </button>
            </div>

        </>
    )
}

export default AddUser
