import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAirQualityInfo } from "../../api/getAirQualityInfo";
import { enhanceAirOutput } from "../../utils/tansformOutput";
import Loading from "@/components/Loading/Loading";

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
  }, [airQualityInfoData]);

  return loading ? <Loading /> : <div>{output + " " + isGood}</div>;
};
export default Task1;
