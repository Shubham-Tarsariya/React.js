import { useState } from "react"

const App = () => {
  const [Number, setNumber] = useState(0);
  // usestate no use: variable define karva
  // Number ==> read only value (change na thai)
  // setNumber ==> write only value (Number ni value change karishu )
  console.log(Number);

  function IncreaseNum(){
    setNumber(Number + 1);
  }

  function DecreaseNum(){
    if(Number !== 0) return setNumber(Number - 1);
  }

  function IncreaseNum5(){
    setNumber(Number + 5);
  }

  function DecreaseNum5(){
    if(Number >= 5) return setNumber(Number - 5);
  }

  function ResetNum5(){
    setNumber(0);
  }

  // self task
  // jump 5 ==> value increase to 5 number
  // decrease jump 5 ==> decrease value  to 5 number
  // Reset Value

  return (
    <>
      <section>
        <h1 className="text-4xl text-center mt-10 font-extrabold">
          Usestate == change value of variable (variable no data change kari shakay)
        </h1>
        <p className="text-3xl text-center font-bold my-4">
          Increase and Decrease Counter
        </p>
        <div className="w-72 h-72 bg-[#222] text-[#555] rounded-xl px-4 py-2 flex items-center justify-center text-[15rem] font-bold mx-auto">
          {Number}
        </div>

        <div className='flex items-center justify-center py-6 gap-6'>
          <button className='py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition' onClick={IncreaseNum}>Increase</button>
          <button className='py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition' onClick={DecreaseNum}>Decrease</button>
        </div>

        <div className='flex items-center justify-center py-6 gap-6'>
          <button className='py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition' onClick={IncreaseNum5}>Increase + 5</button>
          <button className='py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition' onClick={DecreaseNum5}>Decrease - 5</button>
        </div>

        <div className='flex items-center justify-center py-6 gap-6'>
          <button className='py-4 px-8 text-4xl rounded-lg bg-[#555] active:scale-95 active:bg-amber-500 transition' onClick={ResetNum5}>Reset</button>
        </div>
      </section>
    </>
  )
}
export default App
