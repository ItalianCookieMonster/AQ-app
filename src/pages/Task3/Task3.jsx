import CustomQuestion from "@/components/CustomQuestion/CustomQuestion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import TypingEffect from "@/components/TypingText/TypingText"

const Task3 = () => {
    return (
        <div className="w-[80vw] flex flex-col items-center">
            <CustomQuestion title="What are you doing right now?" />

            <div className="min-h-[300px]">
                    <TypingEffect/>

            </div>



            <Link to={'/home'} className="justify-self-end">
                <Button className="w-[50vw] mt-8">
                    Go Back
                </Button>
            </Link>
        </div>



    )
}
export default Task3