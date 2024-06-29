
import ReactSpeedometer from "react-d3-speedometer"



const SpeedoMeter = () => {
    return (

        <ReactSpeedometer
            maxValue={500}
            value={473}
            needleColor="steelblue"
            startColor="green"
            segments={10}
            endColor="red"
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
        />


    )
}
export default SpeedoMeter