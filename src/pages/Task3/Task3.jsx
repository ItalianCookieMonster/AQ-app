import { useState, useEffect } from "react";
import CustomQuestion from "@/components/CustomQuestion/CustomQuestion";

import { useQuery } from "@tanstack/react-query";
import { getAirQualityInfo } from "../../api/getAirQualityInfo";
import { enhanceAirOutput } from "../../utils/tansformOutput";

import { Link } from "react-router-dom";
import TypingEffect from "@/components/TypingText/TypingText";
import Loading from "@/components/Loading/Loading";

import { MoveLeft } from "lucide-react";

const Task3 = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [userCity, setUserCity] = useState("");
    const [output, setOutput] = useState("");
    const [whatIsUserDoingAtTheMoment, setWhatIsUserDoingAtTheMoment] =
        useState("");
    const [areaID, setAreaID] = useState(undefined);

    // Load user data from local storage
    useEffect(() => {
        const currentUserData = localStorage.getItem("user-data");
        const currentUserCity = localStorage.getItem("user-city");
        setUserData(currentUserData ? JSON.parse(currentUserData) : {});
        setUserCity(currentUserCity ? currentUserCity : {});
    }, []);

    // Fetch air quality info
    const { data: airQualityInfoData } = useQuery({
        queryKey: [
            "airQualityInfo",
            userData,
            userCity,
            whatIsUserDoingAtTheMoment,
        ],
        queryFn: async () => {
            if (userData && whatIsUserDoingAtTheMoment) {
                const result = await getAirQualityInfo({
                    city: userCity,
                    userParams: userData,
                    question: "whatToDoRn",
                    whatIsUserDoingAtTheMoment,
                });
                return result;
            }
        },
        enabled: !!userData && !!userCity && !!whatIsUserDoingAtTheMoment,
        retry: 2,
    });

    // Handle air quality info data
    useEffect(() => {
        if (airQualityInfoData && airQualityInfoData.questionOutput) {
            const { output, areaID } = airQualityInfoData.questionOutput;

            const enhancedOutput = enhanceAirOutput(output);

            setOutput(enhancedOutput);
            setAreaID(areaID);

            setLoading(false);
        }
    }, [airQualityInfoData]);

    const handleSubmitQuestion = (question) => {
        setWhatIsUserDoingAtTheMoment(question);
    };

    return (
        <div className="w-[80vw] flex flex-col items-center">
            {!whatIsUserDoingAtTheMoment && (

                <CustomQuestion
                    handleSubmitQuestion={handleSubmitQuestion}
                />

            )}

            <div className="min-h-[300px]">
                {!whatIsUserDoingAtTheMoment ? (
                    <></>
                ) : loading ? (
                    <Loading />
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold text-center mb-5 text-primary">
                            Message
                        </h1>
                        <div className="flex flex-col md:flex-row gap-3 items-center lg:max-w-[70vw]">
                            {areaID}
                            <img
                                src="/images/ok_run.png"
                                alt="image of a guy running"
                                className="max-h-[300px] md:h-[500px]"
                            />
                            <TypingEffect textFromOutput={output} />
                        </div>

                        <Link
                            to={"/home"}
                            className=" border border-solid border-transparent justify-self-end hover:text-primary hover:border-primary rounded-[50%] p-4"
                        >
                            <MoveLeft />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Task3;
