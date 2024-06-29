import CustomQuestion from "@/components/CustomQuestion/CustomQuestion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Task3 = () => {
    return (
        <div className="w-[80vw]">
            <CustomQuestion title="What are you doing right now?" />





            <Link to={'/home'}>
                <Button className="w-[50vw] mt-8">
                    Go Back
                </Button>
            </Link>
        </div>



    )
}
export default Task3