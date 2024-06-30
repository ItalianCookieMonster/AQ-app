/* eslint-disable react/prop-types */
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import SelectModel from "../SelectModel/SelectModel";

const CustomQuestion = ({ handleSubmitQuestion }) => {
    const [question, setQuestion] = useState("");

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitQuestion(question);

    };
    return (
        <div className="p-3 rounded-[20px] mt-8 w-full flex flex-col items-center justify-center gap-5">
            <h2 className="w-full text-lg font-medium lg:w-[60vw] max-w-[800px]">{`Hey! Just checking in to see what’s happening on your end. Your current activities could give us great clues on how to boost your air quality. Mind sharing what you're doingy`}</h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-5">
                <Textarea
                    className="w-full md:w-[80%]"
                    placeholder="Type your question here..."
                    value={question}
                    onChange={handleQuestionChange}
                    onKeyDown={handleKeyDown} />
                <Button type="submit" className="block w-[80%]">Send message</Button>
            </form>


            <SelectModel />
        </div>
    )
}

export default CustomQuestion
