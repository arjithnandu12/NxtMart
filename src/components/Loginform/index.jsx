
//import './index.css'
import {useState} from 'react';
import {useNavigate,Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showerror,setshowerror]=useState(false);
    const navigate = useNavigate();
    const onSubmitSuccess = (jwttoken) => {
        navigate('/');
        Cookies.set('jwt_token' ,jwttoken,{expires:30})
    
    }
    const onSubmitFailure=(error_msg)=>{
        console.log(error_msg)
        setError(error_msg);
        setshowerror(true);
    }
    const onChangeusername=(event)=>{
            setUsername(event.target.value);
    }
    const onChangepassword=(event)=>{
            setPassword(event.target.value);
    } 
    const SubmitEvent=async (event)=>{
        event.preventDefault();
        const userDetails={username,password}
        const url=('https://apis.ccbp.in/login')
        const option={
            method:'POST',
            
            body:JSON.stringify(userDetails)
        }
        const responce=await fetch(url,option);
        const data =await responce.json();
        console.log(data);
        if (responce.ok){
            onSubmitSuccess(data.jwt_token);
        }
        else{
            onSubmitFailure(data.error_msg)
        }


    }
    const jwt_token=Cookies.get('jwt_token');
    if (jwt_token!==undefined){
        return <Navigate to="/"  />
    }
    

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="grid grid-cols-2 grid-rows-2 absolute w-full h-full -z-10">
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/17264c25b2390e63bf21e8f09205a575650c9b3f.jpg?updatedAt=1754041073910')] bg-cover bg-center"></div>
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/76cc17ce61edba1f611c2f04d50ed2fb0aa0d69c.jpg?updatedAt=1754041436873')] bg-cover bg-center"></div>
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/8faf00be5eb69a93a65afbe3d74139ee52d7c888.jpg?updatedAt=1754041518305')] bg-cover bg-center"></div>
            <div className="bg-[url('https://ik.imagekit.io/kaw6s2obj/df41397809637783efe77643f73b5262ba12bbea.jpg?updatedAt=1754041583021')] bg-cover bg-center"></div>
    </div>


      <div className="bg-white w-[350px] mx-auto p-[30px] rounded-[16px] shadow-xl relative z-[1] text-center">
        <img src="https://res-console.cloudinary.com/dlwfzdhi4/thumbnails/v1/image/upload/v1754019249/NmZhZDIwODM4ODU1OTk3ZDE2NGRkODhkODg1ZmFkODdiZGZhM2JlNl9ubmNsOWE=/preview" alt="NxtMart Logo" className="w-[100px] h-auto mb-4 mx-auto" />
        <h2 className="text-[28px] font-semibold mb-6 text-gray-800">Nxt<span className="text-green-600">Mart</span></h2>
        <form onSubmit={SubmitEvent} className="space-y-4 text-left">
          <div>
            <label className="block mb-1 text-sm text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={onChangeusername}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={onChangepassword}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="show" className="w-4 h-4" />
            <label htmlFor="show" className="text-sm text-gray-600">Show Password</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
          >
            Login
          </button>

          {showerror && <p className="text-red-500 mt-3 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm 
