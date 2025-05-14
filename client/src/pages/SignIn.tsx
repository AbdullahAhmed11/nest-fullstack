import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../utils/validation";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../services/authService";

type FormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();

  const onSubmit = async (data: FormData) => {
    try {
      await login(data);
      setAuthenticated(true);
      navigate("/app");
    } catch (error: any) {
      alert(error.message || "Invalid credentials");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...register("email")} placeholder="Email" className="input" />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input {...register("password")} type="password" placeholder="Password" className="input" />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <button className="btn">Sign In</button>
      </form>
    </div>
  );
}
