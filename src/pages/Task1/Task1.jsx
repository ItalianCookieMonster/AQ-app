import Loading from "@/components/Loading/Loading";
import { useState } from "react";

const Task1 = () => {
    const [loading, setLoading] = useState(true);
    return (
        loading ? 
        <Loading />
        :
        <div>
            Task1
        </div>
    )
}
export default Task1