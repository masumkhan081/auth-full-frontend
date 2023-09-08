import { Link, Outlet } from "react-router-dom"

export default function Layout() {

  return (
    <div className='font-averia bg-slate-300'>
      <p className='text-lg text-center py-10 bg-teal-700 text-slate-300'>lets pretend i am nav</p>
      <Link to="/app">app</Link>
      <Outlet />
    </div>
  )
}

