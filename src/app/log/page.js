"use client"
import "@/app/style/sign.css"
import {useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: e.target.email.value,
                password: e.target.password.value
            }
            const res = await signIn('credentials', {...data,redirect:false})
            if (res.status===200){
                router.push("/chat")
            }
        }catch (err) {
            console.error(err)
        }

    }

const ButtonEye = () => {
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <button className="absolute h-full top-0 p-2 right-0 overflow-hidden" onClick={handleShowPassword}>
            {!showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                     className="w-6 h-6 text-gray-300  bg-transparent">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
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

return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <a href="/public">
            <h1 className="font-bold text-4xl text-center p-4 text-gray-300 w-60">ty~Chat</h1>
        </a>
        <div className="mb-5">
            <label htmlFor="email" className="LabelInput">Email</label>
            <input type="text" id="email"
                   name="email"
                   className="InputSign"
                   placeholder="Email address"
            />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="LabelInput">Password</label>
            <div className="relative">
                <input type={showPassword ? "text" : "password"} id="password"
                       name="password"
                       autoComplete="password"
                       className="InputPassword"
                       placeholder="Password"
                />
                <ButtonEye/>
            </div>
        </div>
        <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value=""
                       autoComplete="off"
                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50"/>
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <button type="submit"
                    className="GeneralAuthLink btnSubmitSign">
                Log in
            </button>
            <a className="GeneralAuthLink LinkAuth" href="/reg">Sign up</a>
        </div>
    </form>
)
}