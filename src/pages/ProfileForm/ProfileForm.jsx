import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


function ProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); 

    const onSubmit = (data) => {
        console.log(data);

        navigate("/auth/home");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
            <div className="form-item">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>

            <div className="form-item">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
                <input
                    type="number"
                    id="age"
                    {...register("age", { required: "Age is required", min: 18 })}
                    placeholder="Enter your age"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.age && <span className="text-red-500 text-xs">{errors.age.message}</span>}
            </div>

            <div className="form-item">
                <label className="block text-sm font-medium text-gray-700">Fitness Level:</label>
                <div className="mt-1 space-y-2">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            {...register("fitnessLevel", { required: true })}
                            value="couch-potato"
                            className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Couch Potato (I'm a pro at Netflix marathons!)</span>
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            {...register("fitnessLevel", { required: true })}
                            value="occasional-mover"
                            className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Occasional Mover (I take the stairs sometimes!)</span>
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            {...register("fitnessLevel", { required: true })}
                            value="gym-rat"
                            className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Gym Rat (I lift... my coffee mug every morning!)</span>
                    </label>
                </div>
                {errors.fitnessLevel && <span className="text-red-500 text-xs">Please select your fitness level</span>}
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default ProfileForm;
