import { ArrowRight, Lock, LucideKanban, Mail } from "lucide-react";

const LoginForm = () => {
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
          <h2 className="text-xl font-extrabold text-white">SignIn</h2>
          <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer transition-colors">
            Need an Account?
          </button>
        </div>

        {/* form */}
        <form className="spave-y-4 opacity:1">
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
              <input
                type="text"
                className="w-full bg-[#0f172a] border border-slate-850 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all"
                placeholder="name@workflow.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
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
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between pt-1 my-4">
            <label
              htmlFor=""
              className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer"
            >
              <input
                type="checkbox"
                name=""
                id=""
                className="rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-0 focus:ring-offset-0"
              />
              <span>Remember Me</span>
            </label>
          </div>

          {/* Signin Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2">
            Sign In <ArrowRight size={14} />
          </button>
        </form>

        {/* Guest Login */}
        <div className="relative my-6 text-center">
          <hr className="border-slate-800" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e293b] px-3 text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
            Or Choose
          </span>
        </div>
        <button className="w-full bg-slate-800 hover:bg-slate-750 text-slate-200 py-2.5 px-4 rounded-xl text-xs font-bold transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50">
          Explore As Guest
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
