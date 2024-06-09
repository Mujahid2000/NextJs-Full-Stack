'use client'
import { Toaster, toast } from "sonner";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/AuthProvider/AuthContext";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const { createUser, googleLogin, user, handleUpdateProfile, setLoading } = useContext(AuthContext)
  const router = useRouter();

  const handleGoogleLogin =async () => {
    try {
    const result =  await googleLogin()
        console.log(result.user);
        const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
         };
        const res = await axios.post("https://project-orpin-iota.vercel.app/user", userInfo)
            router.push('/')
    } catch (error) {
      console.error(error);
      toast.error('Google login failed');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const PhotoURL = form.get("photoUrl");
    console.log({ name, email, password, PhotoURL });

    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name, PhotoURL).then(() => {
          const userInfo = {
            name: name,
            email: email,
            password: password,
            Photourl: PhotoURL,
          };
          axios
            .post("https://project-orpin-iota.vercel.app/user", userInfo)
            .then((res) => {
              if (res.data.insertedId) {
                toast.success("User has been created");
                setLoading(false);
              }
               router.push('/')
            });
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email has already used");
        }
      });
  };

   useEffect(() => {
     if (user) {
       router.push('/')
     }
   },[router, user]);


  return (
    <div className="flex  max-h-screen h-fit flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto mt-12 sm:w-full sm:max-w-sm">
        <Image
          width={70}
          height={80}
          className="mx-auto"
          src="https://i.ibb.co/9Wmvqhy/logo-home.png"
          alt="Your Company"
        />
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-500 p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSignUp} className="space-y-5" method="POST">
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Picture URL
              </label>
            </div>
            <div className="mt-1">
              <input
                id="photoUrl"
                name="photoUrl"
                type="text"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-pink-600 hover:text-pink-500"
            >
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center">
            <hr className="flex-grow border-t border-black" />
            <div className="mx-4">Or continue with</div>
            <hr className="flex-grow border-t border-black" />
          </div>
        </form>
        <div className="flex items-center justify-center gap-4 mt- ">
          <button
            onClick={handleGoogleLogin}
            className="px-6 w-full justify-center items-center py-2 border flex gap-2 shadow-lg border-slate-200  rounded-lg text-black dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500  dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <Image
              className="w-5 h-5"
              width={25}
              height={25}
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className="text-black text-base">Google</span>
          </button>

          <button className="px-6 w-full py-2 justify-center items-center border flex gap-2 shadow-lg border-slate-200  rounded-lg text-black dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500  dark:hover:text-slate-300 hover:shadow transition duration-150">
            <Image
              className="w-8 rounded-md h-5"
              width={25}
              height={25}
              src="https://i.ibb.co/ZfbcWtn/facebook.png"
              loading="lazy"
              alt="google logo"
            />
            <span className="text-black text-base">Facebook</span>
          </button>
        </div>

        <div className="flex justify-between items-center mt-10">
          <p className=" text-center text-sm text-gray-500">Not a member?</p>
          <Link href={"/signIn"} className="text-sm text-gray-500 underline">
            <p>SignIn</p>
          </Link>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            success: "text-green-400",
          },
        }}
      />
    </div>
  );
};

export default SignUp;
