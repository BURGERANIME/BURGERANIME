"use client";
import {useTranslations} from 'next-intl';
import { useEffect, useState } from "react";
import "@/assets/css/Register.css";
import axios from "axios";
import { usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface AccunetObject {
   userId: string,
   username: string,
   email: string,
   avatar: string,
   role: {
      admin: boolean;
      modrator: boolean;
      helper: boolean;
      vip: boolean;
      demo: boolean;
   }

}

export default function Register() {
   // Translation
   const t = useTranslations('Header');

   // Server URL 
   const server = process.env.NEXT_PUBLIC_SERVER_URL;
   
   // States for Register and SignIn
   const [RejisOpen, setRejIsOpen] = useState(false);
   const [SigninisOpen, setSigninIsOpen] = useState(false);

   // Register States 
   const [username,setUsername] = useState<string>("");
   const [email,setEmail] = useState<string>("");
   const [password,setPassword] = useState<string>("");
   // SignIn States
   const [signInEmail,setSignInEmail] = useState<string>("");
   const [signInPassword,setSignInPassword] = useState<string>("");

   // Get Token & Decode it
      const [token, setToken] = useState<string | null>(null);
      const [decoded, setDecoded] = useState<any | null>(null);
      

      useEffect(() => {
         if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            if (storedToken != "undefined" && storedToken != "" ) {
               setToken(storedToken);
               const decodedToken = storedToken ? jwtDecode<AccunetObject>(storedToken) : {};
               setDecoded(decodedToken);
            }

            else {
               localStorage.removeItem("token");
            }
           
         }
      }, [token , usePathname()]);


   // Register Function
   const handleRegister = async (e: any) => {
      e.preventDefault();
      try {
         await axios.post(`${server}/api/accounts/signup`, {
            username,
            email,
            password
         }).then((res : any) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            if (typeof window !== 'undefined') {
               window.location.reload();
            }
         });
      } catch (error) {
         console.log(error);
      }
   }

   // SignIn Function
   const handleSignIn = async (e: any) => {
      e.preventDefault();
      try {
         await axios.post(`${server}/api/accounts/signin`, {
            email: signInEmail,
            password: signInPassword
         }).then((res : any) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);

            if (typeof window !== 'undefined') {
               window.location.reload();
            }

         });
      } catch (error) {
         console.log(error);
      }
   }
   


   // Logout Function
   const handleLogout = () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem("token");
        window.location.reload();
      }
    };


  return (
    <>

      {/* Buttons in Header  */}
      {/* Avatar  */}
      {
         token ? 
            <>
            <div className=" relative dropdown dropdown-end z-[1000]">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src={`${decoded.avatar}`} alt="😭" />
                  </div>
                  </div>
                  <ul tabIndex={0} className=" relative border-t border-gray-400 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#2222226e] text-white font-extrabold rounded-box w-52">
                  <li>
                     <a className="justify-between">
                        Profile
                        <span className="uppercase"> 
                           { 
                              decoded.role.admin == true ? <span className=" badge border-none bg-orange-600 text-white " > Admin </span> :
                              decoded.role.modrator == true ? <span className=" badge border-none bg-purple-500 text-white ">Modrator</span> :
                              decoded.role.helper == true ? <span className=" badge border-none bg-blue-500 text-white ">Helper</span> :
                              decoded.role.vip == true ? <span className=" badge border-none bg-green-600 text-white " >VIP</span> :
                              decoded.role.demo == true ? <span className=" badge border-none bg-yellow-400 text-black ">Demo</span> : <span>Member</span> 
                           } </span>
                     </a>
                  </li>

                  <li onClick={handleLogout}><a>Logout</a></li>
                  </ul>
              </div>
            
            </>
          : 
            <>

                  <div className="space-x-4 hidden md:block ">
                     <button className="btn bg-[#333] text-white border-none hover:bg-white hover:text-black" onClick={ () => { setSigninIsOpen(!SigninisOpen); setRejIsOpen(false);} } >{t("Login")}</button>
                     <button className="btn bg-orange-500 text-white border-none hover:bg-white hover:text-black" onClick={() => {setRejIsOpen(!RejisOpen); setSigninIsOpen(false);}}>
                        {t('GetStarted')}
                     </button>
                  </div>

            </>
         
      }
      


            {/* Register Card */}
            <div  id="RejCard" className={`fixed hidden md:block w-[60%] p-5  rounded-xl bg-[#000000b2]  transform ${RejisOpen ? 'translate-y-0 mt-[30%]' : '-translate-y-full'} transition-transform duration-300 ease-in-out z-10  `}>
                        
                        {/* Close Button */}
                        <img src="/assets/icons/cross.png" alt="close_tab" width={50} className=" relative float-right duration-150 mt-[-10px] mr-[-10px] cursor-pointer hover:rotate-[10deg] " onClick={() => setRejIsOpen(!RejisOpen)} />
                        {/* LOGOS TAB */}
                           <div className=" w-full block m-auto text-center">
                              <img src="/assets/logos/ba_logo.png" alt="BURGERANIME_LOGO" draggable={false} className="m-auto" />
                              <img src="/assets/logos/register_logo.png" alt="BURGERANIME_LOGO" width={200} draggable={false} className="m-auto" />
                           </div>

                           <div>
                              <form className="space-y-1" onSubmit={handleRegister}>
                                       <label className="input input-bordered border-black  flex items-center gap-2 bg-black text-white font-extrabold w-96 m-auto">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                          <input type="text" className="grow placeholder:text-white" required placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                                       </label>
                                       <label className="input input-bordered border-black  flex items-center gap-2 bg-black text-white font-extrabold w-96 m-auto">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                          <input type="text" className="grow placeholder:text-white" required placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}  />
                                       </label>
                                       
                                       <label className="input input-bordered border-black  flex items-center gap-2 bg-black text-white font-extrabold w-96 m-auto">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                          <input type="password" className="grow placeholder:text-white" required placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                       </label>
                                 
                                   <div className="mt-3 text-center">
                                    <button className="btn block w-96 m-auto  bg-orange-500 text-white border-none hover:bg-white hover:text-black">Sign Up</button>
                                    <p className="text-white font-mono text-sm mt-2 xl:mt-3">Are you already registered? <span className="font-bold text-white cursor-pointer duration-100 hover:text-orange-200" onClick={() => {
                                        setSigninIsOpen(!SigninisOpen)
                                        setRejIsOpen(!RejisOpen)
                                        
                                    }}>Sign in</span></p>
                                   </div>
                              </form>
                           </div>

                          

            </div>


         {/* SignIn Card */}



         <div  id="RejCard" className={`fixed hidden md:block w-[60%] p-5 rounded-xl bg-[#000000b2]  transform ${SigninisOpen ? 'translate-y-0 mt-[30%]' : '-translate-y-full'} transition-transform duration-300 ease-in-out z-10  `}>
                        
                        {/* Close Button */}
                        <img src="/assets/icons/cross.png" alt="close_tab" width={50} className=" relative float-right duration-150 mt-[-10px] mr-[-10px] cursor-pointer hover:rotate-[10deg] " onClick={() => setSigninIsOpen(!SigninisOpen)} />
                        {/* LOGOS TAB */}
                           <div className=" w-full block m-auto text-center">
                              <img src="/assets/logos/ba_logo.png" alt="BURGERANIME_LOGO" draggable={false} className="m-auto" />
                              <img src="/assets/logos/welcome_logo.png" alt="BURGERANIME_LOGO" width={200} draggable={false} className="m-auto" />
                           </div>

                           <div>
                              <form className="space-y-1" onSubmit={handleSignIn}>
                                       
                                       <label className="input input-bordered border-black  flex items-center gap-2 bg-black text-white font-extrabold w-96 m-auto">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                          <input type="text" className="grow placeholder:text-white" required placeholder="Email" onChange={(e) => { setSignInEmail(e.target.value) }} />
                                       </label>
                                       
                                       <label className="input input-bordered border-black  flex items-center gap-2 bg-black text-white font-extrabold w-96 m-auto">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                          <input type="password" className="grow placeholder:text-white" required placeholder="Password" onChange={(e) => { setSignInPassword(e.target.value) }} />
                                       </label>
                                 
                                   <div className="mt-3 text-center">
                                    <button className="btn block w-96 m-auto  bg-orange-500 text-white border-none hover:bg-white hover:text-black">Sign In</button>
                                    <p className="text-white font-mono text-sm mt-3 xl:mt-3">Don't have an account? <span className="font-bold text-white cursor-pointer duration-100 hover:text-orange-200" onClick={() => {
                                       setRejIsOpen(!RejisOpen)
                                       setSigninIsOpen(!setSigninIsOpen)
                                    }} >Sign Up</span></p>
                                   </div>
                              </form>
                           </div>

                          

            </div>
    
    </>
  )
}
