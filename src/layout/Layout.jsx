import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <main className="w-[100vw] h-[100vh] flex justify-center items-center">
            <Outlet />
        </main>

    )
}
export default Layout