import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1
        className="text-3xl 
      text-center font-semibold
      my-7"
      >
        SignUp
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          value="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          value="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          value="password"
        />
        <button
          className="bg-slate-800
         text-slate-100 
         p-3 rounded-lg uppercase
         hover:opacity-95 
         disabled:opacity-80"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-800">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignOut;
