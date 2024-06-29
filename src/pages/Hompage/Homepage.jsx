import CustomQuestion from "@/components/CustomQuestion/CustomQuestion"
import Questions from "@/components/Questions/Questions"

const Homepage = () => {
    return (
        <>
            <h3 className="text-lg font-bold mb-5">Ask to AQ to do one of these tasks...</h3>
            <Questions />

            <CustomQuestion title="Or type here for more informations." />
        </>
    )
}
export default Homepage