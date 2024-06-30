import Loading from "@/components/Loading/Loading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SpeedoMeter from "@/components/SpeedoMeter/SpeedoMeter";






const Task2 = () => {

    const [loading, setLoading] = useState(false);




    return (
        <>

            {loading ?
                <Loading />
                :
                <div className="flex flex-col gap-7 lg:max-w-[70vw] justify-center" >
                    <h1 className="text-2xl font-bold text-center mb-5 text-primary">Message</h1>

                    <div className="flex-col md:flex-row justify-center">
                        <div className="flex justify-center items-center w-full">
                            <SpeedoMeter />
                        </div>

                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum
                        </p>

                    </div>

                    <Link to={'/home'} className="flex items-center justify-center">
                        <Button className="w-[50vw] lg:w-[30vw] mt-8">
                            Go Back
                        </Button>
                    </Link>
                </div>
            }

        </>

    )
}
export default Task2