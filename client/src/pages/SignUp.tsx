import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../utils/validation";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";

type FormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await signup(data);
      alert("Signup successful! Please sign in.");
      navigate("/signin");
    } catch (error: any) {
      alert(error.message || "Signup failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...register("email")} placeholder="Email" className="input" />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input {...register("name")} placeholder="Name" className="input" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <input {...register("password")} type="password" placeholder="Password" className="input" />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}
