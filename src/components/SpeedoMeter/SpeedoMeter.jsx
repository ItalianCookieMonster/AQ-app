
import ReactSpeedometer from "react-d3-speedometer"

function getSpeedometerValue(category) {
    let speedometerValue;
    let speedometerText;

    switch (category) {
        case 'Good':
            speedometerValue = 50;
            speedometerText = 'Good'
            break;
        case 'Moderate':
            speedometerValue = 100;
            speedometerText = 'Moderate'
            break;
        case 'Unhealthy for Sensitive Groups':
            speedometerValue = 200;
            speedometerText = 'Unhealthy for Sensitive Groups'
            break;
        case 'Unhealthy':
            speedometerValue = 300;
            speedometerText = 'Unhealthy'

            break;
        case 'Very Unhealthy':
            speedometerValue = 400;
            speedometerText = 'Very Unhealthy';
            break;
        case 'Hazardous':
            speedometerValue = 500;
            speedometerText = 'Hazard';
            break;
        default:
            speedometerValue = 0;
            speedometerText = 'No data'
            break;
    }

    return { speedometerValue, speedometerText };
}




const SpeedoMeter = () => {

    let { speedometerValue, speedometerText } = getSpeedometerValue("Good");
    return (

        <ReactSpeedometer
            maxValue={500}
            value={speedometerValue}
            needleHeightRatio={0.7}
            needleColor="steelblue"
            startColor="green"
            segments={10}
            endColor="red"
            currentValueText={speedometerText}
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
        />


    )
}
export default SpeedoMeter