/* eslint-disable react/prop-types */
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

const CustomQuestion = ({ title, handleSubmitQuestion }) => {
  const [question, setQuestion] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitQuestion(question);
  };
  return (
    <div className="p-3 rounded-[20px] mt-8 w-full flex flex-col items-center justify-center gap-5">
      <p className="text-lg font-bold">{title}</p>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-center gap-5"
      >
        <Textarea
          className="w-full md:w-[80%]"
          placeholder="Type your question here..."
          value={question}
          onChange={handleQuestionChange}
        />
        <Button type="submit" className="block w-[80%]">
          Send message
        </Button>
      </form>
    </div>
  );
};
export default CustomQuestion;
