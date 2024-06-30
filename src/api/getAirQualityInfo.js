export const getAirQualityInfo = async ({
  city,
  userParams,
  question,
  whatIsUserDoingAtTheMoment,
}) => {
  // get saved model from local storage
  const model = localStorage.getItem("model");

  // use fetch to call api endpoint
  try {
    const response = await fetch(
      `http://localhost:4083/get-air-recommendations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city,
          question,
          userParams,
          whatIsUserDoingAtTheMoment,
          model: model || "llama",
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
