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
    const [whatIsUserDoingAtTheMoment, setWhatIsUserDoingAtTheMoment] = useState("");
    const [urlImage, setUrlImage] = useState("/images/default.png")  // Default image

    useEffect(() => {
        const currentUserData = localStorage.getItem("user-data");
        const currentUserCity = localStorage.getItem("user-city");
        setUserData(currentUserData ? JSON.parse(currentUserData) : {});
        setUserCity(currentUserCity ? currentUserCity : "default");
    }, []);

    const { data: airQualityInfoData } = useQuery({
        queryKey: ["airQualityInfo", userData, userCity, whatIsUserDoingAtTheMoment],
        queryFn: async () => {
            if (userData && whatIsUserDoingAtTheMoment) {
                return await getAirQualityInfo({
                    city: userCity,
                    userParams: userData,
                    question: "whatToDoRn",
                    whatIsUserDoingAtTheMoment,
                });
            }
        },
        enabled: !!userData && !!userCity && !!whatIsUserDoingAtTheMoment,
        retry: 2,
    });

    useEffect(() => {
        if (airQualityInfoData && airQualityInfoData.questionOutput) {
            const { output, areaID } = airQualityInfoData.questionOutput;
            const enhancedOutput = enhanceAirOutput(output);
            setOutput(enhancedOutput);
            setLoading(false);


            switch (areaID) {
                case "Transportation":
                    setUrlImage("/images/transport.png");
                    break;
                case "Energy Conservation":
                    setUrlImage("/images/energy-conservation.png");
                    break;
                case "Household Practices":
                    setUrlImage("/images/household.png");
                    break;
                case "Gardening and Green Spaces":
                    setUrlImage("/images/gardening-green.png");
                    break;
                case "Community and Advocacy":
                    setUrlImage("/images/community-advocacy.png");
                    break;
                case "Other":
                    setUrlImage("/images/transport.png");
                    break;
                default:
                    setUrlImage("/images/transport.png");  
            }
        }
    }, [airQualityInfoData]);

    const handleSubmitQuestion = (question) => {
        setWhatIsUserDoingAtTheMoment(question);
    };

    return (
        <div className="w-[80vw] flex flex-col items-center">
            {!whatIsUserDoingAtTheMoment ? (
                <CustomQuestion handleSubmitQuestion={handleSubmitQuestion} />
            ) : (
                <div className="min-h-[300px]">
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold text-center mb-5 text-primary">
                                Message
                            </h1>
                            <div className="flex flex-col md:flex-row gap-3 items-center lg:max-w-[70vw]">
                                <img
                                    src={urlImage}
                                    alt="Relevant topic image"
                                    className="max-h-[300px] md:h-[500px]"
                                />
                                <TypingEffect textFromOutput={output} />
                            </div>
                            <Link
                                to={"/home"}
                                className="border border-solid border-transparent justify-self-end hover:text-primary hover:border-primary rounded-[50%] p-4 mt-5"
                            >
                                <MoveLeft />
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Task3;
