// import { useState } from 'react'
//import './index.css'

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="grid grid-cols-2 grid-rows-2 absolute w-full h-full -z-10">
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/17264c25b2390e63bf21e8f09205a575650c9b3f.jpg?updatedAt=1754041073910')] bg-cover bg-center"></div>
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/76cc17ce61edba1f611c2f04d50ed2fb0aa0d69c.jpg?updatedAt=1754041436873')] bg-cover bg-center"></div>
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/8faf00be5eb69a93a65afbe3d74139ee52d7c888.jpg?updatedAt=1754041518305')] bg-cover bg-center"></div>
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/df41397809637783efe77643f73b5262ba12bbea.jpg?updatedAt=1754041583021')] bg-cover bg-center"></div>
    </div>


      <div className=" bg-white w-[350px] mx-auto p-[30px] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] relative z-[1] text-center">
        <img src="https://res-console.cloudinary.com/dlwfzdhi4/thumbnails/v1/image/upload/v1754019249/NmZhZDIwODM4ODU1OTk3ZDE2NGRkODhkODg1ZmFkODdiZGZhM2JlNl9ubmNsOWE=/preview" alt="NxtMart Logo" className="w-[100px] h-auto mb-[10px]" />
        <h2 className="text-[28px] mb-[20px]">Nxt<span>Mart</span></h2>
        <form>
          <label>Username</label>
          <div className="mb-[15px]">
            <input type="text" placeholder="Enter username" />
          </div>

          <label>Password</label>
          <div className="mb-[15px]">
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="d-flex items-center gap-[8px] mb-[15px]">
            <input type="checkbox" id="show" />
            <label htmlFor="show">Show Password</label>
          </div>

          <button type="submit" className="w-full p-[10px] bg-[#ccc] border-none rounded-[6px] text-[16px] cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm 
