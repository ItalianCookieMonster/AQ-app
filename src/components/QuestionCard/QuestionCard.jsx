/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardFooter,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Flower, Footprints, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
    return (
        <Link to={`/auth/${question.link}`}>
        <Card className="max-w-[300px] flex flex-col lg:h-full">
            <CardHeader className="m-3 flex-row items-center gap-2">
                {
                    question.type === "activity" ?
                        <Footprints className="m-1" />
                        : question.type === "airCondition" ?
                            <Wind />
                            :
                            <Flower />
                }
                <CardTitle>
                    Task {question.id}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg mx-3">{question.question}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button className="w-full">Ask to AQ</Button>
            </CardFooter>
        </Card>
        </Link>
    );
};

export default QuestionCard;
