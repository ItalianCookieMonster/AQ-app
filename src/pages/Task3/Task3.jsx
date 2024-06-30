import CustomQuestion from "@/components/CustomQuestion/CustomQuestion"
import { Link } from "react-router-dom"
import TypingEffect from "@/components/TypingText/TypingText"
import { MoveLeft } from "lucide-react"

const Task3 = () => {
    return (
        <div className="w-[80vw] flex flex-col items-center gap-5 text-center">
            <h2 className="w-full text-lg font-medium lg:w-[60vw] max-w-[800px]">{`Hey! Just checking in to see what’s happening on your end. Your current activities could give us great clues on how to boost your air quality. Mind sharing what you're doingy`}</h2>
            <div className="min-h-[200px] flex justify-center p-5">
                <TypingEffect />

            </div>
            <CustomQuestion />

            <Link to={'/home'} className=" border border-solid border-transparent justify-self-end hover:text-primary hover:border-primary rounded-[50%] p-4">
                <MoveLeft />
            </Link>
        </div>



    )
}
export default Task3