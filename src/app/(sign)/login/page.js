import "../sign.css"
export default function Page(){
    return(
        <div className="container m-auto h-full flex justify-center items-center">
            <form className="max-w-lg mx-auto">
                <a href="/public"><h1 className="font-bold text-4xl text-center my-4 text-gray-300 w-60">ty~Chat</h1></a>
                <div className="mb-5">
                    <label htmlFor="email" className="LabelInput">Email</label>
                    <input type="email" id="email"
                           className="InputSign"
                           placeholder="Messanger@gmail.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="LabelInput">Password</label>
                    <input type="password" id="password"
                           className="InputSign"
                           required/>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value=""
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                               required/>
                    </div>
                    <label htmlFor="Remeber" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
                </div>
                <button type="submit"
                        className="btnSubmitSign">
                    Sign in
                </button>
            </form>
        </div>
    )
}