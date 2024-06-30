import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";



const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();

        console.log('Logged out and local storage cleared');
        navigate('/');
    };

    return (
        <Button size='icon' className='flex justify-center items-center relative' variant='outline' onClick={handleLogout}>
            <span className="sr-only">Logout</span>
            <LogOut className="h-[1.2rem] w-[1.2rem]" />
        </Button>
    )
}
export default Logout