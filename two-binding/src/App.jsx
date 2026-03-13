import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function SubmitForm(){
    console.log("Login Successfully !!!");
    const data ={ username, password};
    console.log(data);
    setUsername("");
    setPassword("");
  }

  return (
    <>
    <h1 className='text-center mt-10 font-bold text-5xl'>Two Way Binding : Login, SignUp{" "} </h1>
    <h1 className="text-5xl font-bold text-center text-shadow-orange-200 text-shadow mt-10 ">Log In Form</h1>
    <section className="flex items-center justify-center mt-10">
      
      <form 
      autoComplete="off" 
      onSubmit={(e)=> {
        e.preventDefault();
        SubmitForm();
      }}>
        <input className="bg-[#555] text-white outline-none px-4 py-2 block my-2 rounded-xl focus:ring-2 ring-amber-400" type="text" placeholder="Username" 
        value={username} 
        onChange={(e)=>{
          setUsername(e.target.value);
        }} />
        <input className="bg-[#555] text-white outline-none px-4 py-2 block my-2 rounded-xl focus:ring-2 ring-amber-400" type="password" placeholder="Password" 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }} />
        <input type="submit" value="Login" className="w-full px-4 py-1 bg-orange-500 active:scale-95 active:bg-orange-200 rounded-xl"/>
      </form>
    </section>
    </>
  )
}

export default App
