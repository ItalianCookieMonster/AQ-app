import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"



const Welcome = () => {
    return (
        <div className="text-center w-full flex flex-col gap-7">
            <h1 className="font-bold text-2xl ">Welcome to AQ</h1>
            <p className="font-semibold">First we need to ask you some questions</p>
            <Link to={'/form'}> <Button>{`Let's go!`}</Button> </Link>


        </div>
    )
}
export default Welcome