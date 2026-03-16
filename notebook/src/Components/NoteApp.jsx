import { useState } from "react"

const NoteApp = () => {
    const [Heading, setHeading] = useState('');
    const [Notes, setNotes] = useState('');
    const [Tasks, setTasks] = useState([]);

    function Submitform(){
        console.log("Task Created:", {Title: Heading, Topics: Notes});

        let card = [...Tasks];
        card.push({Title: Heading, Topics: Notes});
        setTasks(card);

        console.log(Tasks);

        setHeading("");
        setNotes("");
    }
    console.log(Tasks);

    return (
        <>
          <section className='lg:flex items-center justify-center'>
            {/* Add Task */}
            <div className='lg:w-1/2 h-screen flex items-center justify-center '>
                <form className='bg-[#222] rounded-xl p-6' onSubmit={(e) => {e.preventDefault(); Submitform();}}>
                    <h1 className='text-center text-3xl font-bold text-amber-600' >Create Your Notes</h1>

                    <input type='text' 
                    className='bg-[#555] px-4 py-2 outline-none text-white rounded-md block my-4 w-96 focus:ring-2 focus:ring-amber-600 font-bold' 
                    placeholder='Heading'
                    value={Heading}
                    onChange={(e) => {
                        setHeading(e.target.value);
                    }}/>

                    <textarea 
                    rows="5" 
                    className='bg-[#555] px-4 py-2 outline-none text-white rounded-md block my-4 w-96 focus:ring-2 focus:ring-amber-600' placeholder='Topics....'
                    value={Notes}
                    onChange={(e) =>{
                        setNotes(e.target.value);
                    }} ></textarea>
                    <input type='submit' value='Create Note' className='w-96 px-4 py-2 rounded-md bg-amber-600 active:scale-95 active:bg-amber-100 active:text-amber-600 ' />
                </form>
            </div>

            {/* Create Note */}
            <div className='lg:w-1/2 h-screen max-lg:border-t-2 lg:border-l-2 border-dashed border-black bg-gray-50 p-8 flex flex-wrap gap-4 justify-center overflow-auto'>
                {Tasks.map((task , id) => {
                    return(
                    <div className="w-full max-w-72 h-72 bg-white shadow-2xl rounded-4xl flex items-end justify-center pb-4 relative" key={id}>
                    <img src="./pin.png" alt="pin" className="w-15 h-10 absolute z-10 top-0  drop-shadow-2xl" />
                    <div className="bg-orange-200 rounded-4xl w-64 h-58 p-4">
                        <h1 className="text-3xl text-orange-400 py-1">0{id + 1}</h1>
                        <h1 className="text-center text-2xl font-semibold py-1 text-black">{task.Title}</h1>
                        <p className="text-md text-gray-400 font">{task.Topics}</p>
                    </div>
                </div>
                )})}
            </div>
          </section>  
        </>
    )
}

export default NoteApp
