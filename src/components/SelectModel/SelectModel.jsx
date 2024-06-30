import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SelectModel = () => {
  const [currentModel, setCurrentModel] = useState("llama");
  const handleSetModel = (model) => {
    setCurrentModel(model);
    // save model to local storage
    localStorage.setItem("model", model);
  };

  return (
    <DropdownMenu className="absolute top-1right-1">
      <DropdownMenuTrigger>
        <span className="mx-3">Select Model Provider:</span>
        <Button variant="outline">
          {currentModel}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleSetModel("llama")}>
          llama
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSetModel("mistral")}>
          mistral
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default SelectModel;
