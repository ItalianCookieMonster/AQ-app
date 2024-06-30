import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAirQualityInfo } from "../../api/getAirQualityInfo";
import { enhanceAirOutput } from "../../utils/tansformOutput";
import Loading from "@/components/Loading/Loading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Task1 = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [output, setOutput] = useState("");
    const [isGood, setIsGood] = useState(undefined);

    useEffect(() => {
        const currentUserData = localStorage.getItem("user-data");
        setUserData(currentUserData ? JSON.parse(currentUserData) : {});
    }, []);

    const {
        data: airQualityInfoData,
        // error: airQualityInfoError,
        // isFetching: isFetchingairQualityInfo,
        // refetch: refetchairQualityInfo,
    } = useQuery({
        queryKey: ["airQualityInfo", userData],
        queryFn: async () => {
            if (userData) {
                // const { city } = userData;

                const result = await getAirQualityInfo({
                    city: "Barcelona", // TODO: pending get city!!!!!
                    userParams: userData,
                    question: "goForARun",
                });
                return result;
            }
        },
        enabled: !!userData,
        retry: 2,
    });

    useEffect(() => {
        if (airQualityInfoData && airQualityInfoData.questionOutput) {
            const { output, isGood } = airQualityInfoData.questionOutput;

            const enhancedOutput = enhanceAirOutput(output);

            setOutput(enhancedOutput);
            setIsGood(isGood);

            setLoading(false);
        }
    }, [
    airQualityInfoData]);

    return loading ? (
        <Loading />
    ) : (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center mb-5 text-primary">
                Message
            </h1>
            <div className="flex flex-col md:flex-row gap-3 items-center lg:max-w-[70vw]">
                <img
                    src="/images/ok_run.png"
                    alt="image of a guy running"
                    className="max-h-[300px] md:h-[500px]"
                />
                <p className="text-center">{output}</p>
            </div>
            {isGood ? (
                <p className="text-center text-green-500">Good</p>
            ) : (
                <p className="text-center text-red-500">Bad</p>
            )}

            <Link to={"/home"}>
                <Button className="w-[50vw] mt-8">Go Back</Button>
            </Link>
        </div>
    );
};
export default Task1;
