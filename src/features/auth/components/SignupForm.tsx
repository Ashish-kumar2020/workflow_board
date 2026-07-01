import { ArrowRight, Lock, LucideKanban, Mail, User } from "lucide-react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useState } from "react";
import type { UserDataSignUp } from "../types/auth.types";

const SignupForm = () => {
  const [userData, setUserData] = useState<UserDataSignUp>({
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const onSubmitUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="w-full max-w-md z-10 flex flex-col items-center text-foreground">
      {/* App Icons */}

      <div className="flex items-center gap-3 mb-8 opacity: 1; transform: none;">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
          <LucideKanban />
        </div>
        <div>
          <span className="text-xl font-black tracking-tight text-white uppercase block leading-none">
            Workflow
          </span>
          <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase block mt-1">
            Workspace Suit
          </span>
        </div>
      </div>

      <div className="w-full bg-formBg/90 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold text-white">
            Create An Account
          </h2>
          <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer transition-colors">
            Already Have an Account?
          </button>
        </div>

        {/* form */}
        <form className="spave-y-4 opacity:1" onSubmit={onSubmitUserData}>
          {/* Full Name */}
          <div className="space-y-1.5 mb-5">
            <div className="space-y-4 text-[10px] uppercase text-labelColor tracking-wider my-2">
              <label htmlFor="Full Name">Full Name</label>
            </div>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <Input
                type="text"
                className="w-full bg-[#0f172a] border border-slate-850 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                placeholder="John Doe"
                value={userData.userName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserData((prev) => ({
                    ...prev,
                    userName: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5 mb-5">
            <div className="space-y-4 text-[10px] uppercase text-labelColor tracking-wider my-2">
              <label htmlFor="Email Address">Email Address</label>
            </div>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <Input
                type="text"
                className="w-full bg-[#0f172a] border border-slate-850 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                placeholder="name@workflow.com"
                value={userData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData(prev => ({
                  ...prev , email: e.target.value
                }))}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5 mb-5">
            <div className="space-y-4 text-[10px] uppercase text-labelColor tracking-wider my-2">
              <label htmlFor="Password">Password</label>
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="password"
                className="w-full bg-[#0f172a] border border-slate-850 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                placeholder="***************"
                value={userData.password}
                onChange={(e) => setUserData(prev => ({
                  ...prev,password: e.target.value
                }))}
              />
            </div>
          </div>

          {/* Confirm Password */}

          <div className="space-y-1.5 mb-4">
            <div className="space-y-4 text-[10px] uppercase text-labelColor tracking-wider my-2">
              <label htmlFor="Confirm Password">Confirm Password</label>
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="password"
                className="w-full bg-[#0f172a] border border-slate-850 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                placeholder="***************"
                value={userData.confirmPassword}
                onChange={(e) => setUserData(prev => ({
                  ...prev,confirmPassword: e.target.value
                }))}
              />
            </div>
          </div>

          {/* Signin Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2">
            Sign Up <ArrowRight size={14} />
          </button>
        </form>

        {/* Guest Login */}
        <div className="relative my-6 text-center">
          <hr className="border-slate-800" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e293b] px-3 text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
            Or Choose
          </span>
        </div>

        <Button className="w-full">Explore As Guest</Button>
      </div>
    </div>
  );
};

export default SignupForm;
