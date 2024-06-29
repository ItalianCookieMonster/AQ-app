import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button"

const CustomQuestion = () => {
    return (
        <div className="border border-solid p-3 rounded-[20px] mt-8 w-full flex flex-col items-center justify-center gap-5">
            <p className="text-lg font-bold">Or type here for more informations.</p>
            <Textarea className="w-[80%]" placeholder="Type your question here..."/>
            <Button className="block w-[80%]">Send message</Button>
        </div>
    )
}
export default CustomQuestion