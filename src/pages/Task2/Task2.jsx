import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAirQualityInfo } from "../../api/getAirQualityInfo";
import { enhanceAirOutput } from "../../utils/tansformOutput";
import Loading from "@/components/Loading/Loading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SpeedoMeter from "@/components/SpeedoMeter/SpeedoMeter";

const Task2 = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [userCity, setUserCity] = useState("");

  const [output, setOutput] = useState("");
  const [currentAirStatus, setCurrentAirStatus] = useState(undefined);

  useEffect(() => {
    const currentUserData = localStorage.getItem("user-data");
    const currentUserCity = localStorage.getItem("user-city");
    setUserData(currentUserData ? JSON.parse(currentUserData) : {});
    setUserCity(currentUserCity ? currentUserCity : {});
  }, []);

  const {
    data: airQualityInfoData,
    // error: airQualityInfoError,
    // isFetching: isFetchingairQualityInfo,
    // refetch: refetchairQualityInfo,
  } = useQuery({
    queryKey: ["airQualityInfo", userData, userCity],
    queryFn: async () => {
      if (userData) {
        // const { city } = userData;

        const result = await getAirQualityInfo({
          city: userCity,
          userParams: userData,
          question: "currentAirSituation",
        });
        return result;
      }
    },
    enabled: !!userData && !!userCity,
    retry: 2,
  });

  useEffect(() => {
    if (airQualityInfoData && airQualityInfoData.questionOutput) {
      const { currentAirSituation, currentAirStatus } =
        airQualityInfoData.questionOutput;

      const enhancedOutput = enhanceAirOutput(currentAirSituation);

      setOutput(enhancedOutput);
      setCurrentAirStatus(currentAirStatus);

      setLoading(false);
    }
  }, [airQualityInfoData]);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-7 lg:max-w-[70vw] justify-center">
      <h1 className="text-2xl font-bold text-center mb-5 text-primary">
        Message
      </h1>

      <div className="flex-col md:flex-row justify-center">
        <div className="flex justify-center items-center w-full">
          <SpeedoMeter currentAirStatus={currentAirStatus} />
        </div>

        <p className="text-center">{output}</p>
      </div>

      <Link to={"/home"} className="flex items-center justify-center">
        <Button className="w-[50vw] lg:w-[30vw] mt-8">Go Back</Button>
      </Link>
    </div>
  );
};
export default Task2;
