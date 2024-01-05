import "./globals.css"

export default function Home() {
  return (
      <main>
          <div className="container m-auto h-full flex justify-center items-center font-bold text-sm text-white uppercase">
              <a href="/login" className="p-2.5 hover:underline w-20 text-center whitespace-nowrap">
                  Login
              </a>
              <span className="pointer-events-none">|</span>
              <a href="/register" className="p-2.5 hover:underline w-20 text-center whitespace-nowrap">
                  Sign up
              </a>
          </div>
          <div className="bg-circle-1"/>
        <div className="bg-circle-2"/>
      </main>
  )
}
