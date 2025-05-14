// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ZodSchema, z } from "zod";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// type AuthFormProps<T extends ZodSchema> = {
//   schema: T;
//   type: "signup" | "signin";
//   endpoint: string;
// };

// export default function AuthForm<T extends z.ZodTypeAny>({ schema, type, endpoint }: AuthFormProps<T>) {
//   const { register, handleSubmit, formState: { errors } } = useForm<z.infer<T>>({
//     resolver: zodResolver(schema),
//   });

//   const navigate = useNavigate();
//   const { setAuthenticated } = useAuth();

//   const onSubmit = async (data: z.infer<T>) => {
//     const res = await fetch(endpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (res.ok) {
//       if (type === "signin") {
//         setAuthenticated(true);
//         navigate("/app");
//       } else {
//         navigate("/signin");
//       }
//     } else {
//       alert("Request failed. Check your credentials or inputs.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
//       <input {...register("email" as Path<z.infer<T>>)} placeholder="Email" className="input" />
//       <p className="text-red-500 text-sm">{errors.email?.message}</p>

//       {type === "signup" && (
//         <>
//           <input {...register("name" as Path<z.infer<T>>)} placeholder="Name" className="input" />
//           <p className="text-red-500 text-sm">{errors.name?.message}</p>
//         </>
//       )}

//       <input {...register("password" as Path<z.infer<T>>)} type="password" placeholder="Password" className="input" />
//       <p className="text-red-500 text-sm">{errors.password?.message}</p>

//       <button className="btn">{type === "signup" ? "Sign Up" : "Sign In"}</button>
//     </form>
//   );
// }
