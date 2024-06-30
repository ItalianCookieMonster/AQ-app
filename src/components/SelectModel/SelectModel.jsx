import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SelectModel = () => {
    const [model, setModel] = useState("llama");

    console.log(model)

    return (
        <DropdownMenu className="absolute top-1right-1">
            <DropdownMenuTrigger>
                <span className="mx-3">Select Model:</span>
                <Button variant="outline">{model}
                <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setModel("llama")}>
                    lLama
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setModel("mistral")}>
                    mistral
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
export default SelectModel