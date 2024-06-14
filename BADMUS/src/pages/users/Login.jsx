import React from "react";
import OnboardingLayout from "../../layout/OnboardingLayout";
import rider from "../../assets/rider.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("email is required"),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <OnboardingLayout imageUrl={rider}>
      <div className="p-5 lg:p-10">
        <div>Welcome user</div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-2 flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input {...register("email")}  />
              <p>{errors.email?.message}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input {...register("password")} />
              <p>{errors.password?.message}</p>
            </div>
            

            <button type="submit" className="p-1 px-6 bg-blue-600 rounded-lg">Submit</button >
          </form>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Login;
