import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import { Outlet } from "react-router-dom"


const Layout2 = () => {
    return (
        <>
            <NavBar />
            <main className="w-[90vw] min-h-[80vh] flex flex-col justify-between items-center my-8">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default Layout2