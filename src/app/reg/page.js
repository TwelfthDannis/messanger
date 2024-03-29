"use client"
import "@/app/style/sign.css"
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";


export default function Page() {

    const [showPassword, setShowPassword] = useState({
        password: false,
        repeatPassword: false
    })

    const ButtonEye = ({field}) => {
        const handleShowPassword = (field) => {
            setShowPassword((prev) => ({
                ...prev,
                [field]: !prev[field]
            }))
        }
        return (
            <button className="absolute h-full top-0 p-2 right-0" onClick={() => handleShowPassword(field)}>
                {!showPassword[field] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                         className="w-6 h-6 text-gray-300  bg-transparent">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                         className="w-6 h-6 text-gray-300">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
                    </svg>
                )}
            </button>
        );
    };


    const router=useRouter();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const data={
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value
        }
        try {
            const res=await axios.post("/api/auth/reg", data, {
                headers: {
                    "content-type": "application/json"
                }
            })
            if(res.status===200){
                router.push("/log")
            }
        }catch (error){
            console.log(error)
        }
    }


    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <a href="/public"><h1 className="font-bold text-4xl text-center p-4 text-gray-300 w-60">ty~Chat</h1>
            </a>
            <div className="mb-5">
                <label htmlFor="email" className="LabelInput">Email</label>
                <input type="text" id="email"
                       name="email"
                       className="InputSign"
                       placeholder="Email address"
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="LabelInput">Username</label>
                <input type="text" id="username"
                       name="username"
                       className="InputSign"
                       placeholder="Nickname"
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="LabelInput">Password</label>
                <div className="relative">
                    <input type={showPassword.password ? "text" : "password"} id="password"
                           name="password"
                           autoComplete="new Password"
                           className="InputPassword"
                           placeholder="Password"
                           required/>
                    <ButtonEye field={"password"}/>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="repeat-password" className="LabelInput">Repeat password</label>
                <div className="relative">
                    <input type={showPassword.repeatPassword ? "text" : "password"} id="repeat-password"
                           name="repeatPassword"
                           autoComplete="off"
                           className="InputPassword"
                           placeholder="Retry password"
                           required/>
                    <ButtonEye field={"repeatPassword"}/>
                </div>
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value=""
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                           required/>
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-300">I agree with the <a
                    href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and
                    conditions</a></label>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <button type="submit"
                        className="GeneralAuthLink btnSubmitSign">
                    Register now
                </button>
                <a className="GeneralAuthLink LinkAuth" href="/log">Sign in</a>
            </div>
        </form>
    )
}