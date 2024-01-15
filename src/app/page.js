export default function Page(){

    return(
        <div className="container m-auto h-dvh flex justify-center items-center font-bold text-sm text-white uppercase">
            <a href="/log" className="p-2.5 hover:underline w-20 text-center whitespace-nowrap">
                Login
            </a>
            <span className="pointer-events-none">|</span>
            <a href="/reg" className="p-2.5 hover:underline w-20 text-center whitespace-nowrap">
                Sign up
            </a>
        </div>
    )
}