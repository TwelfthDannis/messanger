import "../sign.css"

export default function Page(){
    return (
        <div className="container m-auto h-full flex justify-center items-center">
            <form className="max-w-sm mx-auto">
                <a href="/public"><h1 className="font-bold text-4xl text-center my-4 text-gray-300 w-60">ty~Chat</h1></a>
                <div className="mb-5">
                    <label htmlFor="email" className="LabelInput">Email</label>
                    <input type="email" id="email"
                           className="InputSign"
                           placeholder="Messanger@gmail.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="LabelInput">Username</label>
                    <input type="text" id="username"
                           className="InputSign"
                           required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="LabelInput">Password</label>
                    <input type="password" id="password"
                           className="InputSign"
                           required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="LabelInput">Repeat password</label>
                    <input type="password" id="repeat-password"
                           className="InputSign"
                           required/>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value=""
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                               required/>
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                <button type="submit"
                        className="btnSubmitSign">
                    Sign up
                </button>
            </form>
        </div>
    )
}