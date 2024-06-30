import ReactSpeedometer from "react-d3-speedometer";
import { useState, useEffect } from "react";

function getSpeedometerValue(category) {
  console.log("!!!!!!! ~ getSpeedometerValue ~ category:", category);
  let speedometerValue;
  let speedometerText;

  switch (category) {
    case "Good":
      speedometerValue = 50;
      speedometerText = "Good";
      break;
    case "Moderate":
      speedometerValue = 100;
      speedometerText = "Moderate";
      break;
    case "Unhealthy for Sensitive Groups":
      speedometerValue = 200;
      speedometerText = "Unhealthy for Sensitive Groups";
      break;
    case "Unhealthy":
      speedometerValue = 300;
      speedometerText = "Unhealthy";

      break;
    case "Very Unhealthy":
      speedometerValue = 400;
      speedometerText = "Very Unhealthy";
      break;
    case "Hazardous":
      speedometerValue = 500;
      speedometerText = "Hazard";
      break;
    default:
      speedometerValue = 0;
      speedometerText = "No data";
      break;
  }

  return { speedometerValue, speedometerText };
}

// eslint-disable-next-line react/prop-types
const SpeedoMeter = ({ currentAirStatus }) => {
  const [currentSpeedometerValue, setCurrentSpeedometerValue] = useState(50);
  const [currentSpeedometerText, setCurrentSpeedometerText] = useState("Good");

  useEffect(() => {
    if (currentAirStatus) {
      const { speedometerValue, speedometerText } =
        getSpeedometerValue(currentAirStatus);

      if (speedometerValue) {
        setCurrentSpeedometerValue(speedometerValue);
      }
      if (speedometerText) {
        setCurrentSpeedometerText(speedometerText);
      }
    }
  }, [currentAirStatus]);

  return (
    <ReactSpeedometer
      maxValue={500}
      value={currentSpeedometerValue}
      needleHeightRatio={0.7}
      needleColor="steelblue"
      startColor="green"
      segments={10}
      endColor="red"
      currentValueText={currentSpeedometerText}
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      className="mx-auto"
      width={300}
      height={300}
      maxSegmentLabels={0}
    />
  );
};
export default SpeedoMeter;
