'use client'
import { AuthContext } from "@/AuthProvider/AuthContext";
import  { useContext } from "react";


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="mt-28 mb-5">
          <div className="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
            <div className="md:col-span-1 h-48 shadow-xl ">
              <div className="flex w-full h-full relative">
                <img src={user?.photoURL} className="w-44 h-44 m-auto" alt="" />
              </div>
            </div>
            <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 p-3">
              <div className="flex ">
                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                  Name:
                </span>
                <input
                  className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                  value={user?.displayName}
                  
                />
              </div>
              <div className="flex ">
                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                  Email:
                </span>
                <input
                  className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                  value={user?.email}
                  
                />
              </div>
              <div className="flex ">
                <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                  Role:
                </span>
                <input
                  className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                  value="User"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
