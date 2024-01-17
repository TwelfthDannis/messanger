"use client"
import "@/app/style/sign.css"
import {useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleData = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signIn('credentials', data)
    }


    return (
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <a href="/public"><h1 className="font-bold text-4xl text-center my-4 text-gray-300 w-60">ty~Chat</h1></a>
            <div className="mb-5">
                <label htmlFor="email" className="LabelInput">Email</label>
                <input type="email" id="email"
                       name="email"
                       className="InputSign"
                       placeholder="Messanger@gmail.com"
                       onChange={handleData}
                       required/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="LabelInput">Password</label>
                <input type="password" id="password"
                       name="password"
                       autoComplete="password"
                       className="InputSign"
                       onChange={handleData}
                       required/>
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value=""
                           autoComplete="off"
                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50"/>
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
            </div>
            <button type="submit"
                    className="btnSubmitSign">
                Sign in
            </button>
        </form>
    )
}