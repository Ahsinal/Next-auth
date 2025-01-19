import { Bell, Search } from "lucide-react";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  min-h-screen">
      <div className=" w-2/12 p-4 shadow-lg min-h-screen">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?ga=GA1.1.316118504.1736671671&semt=ais_hybrid"
          alt="logo"
          width={100}
          height={100}
          className="object-cover "
        />
        <ul className="">
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className="w-10/12 flex flex-col gap-y-8 bg-red-50 px-8 py-4">
        <div className=" flex items-center justify-between ">
          <h1 className="text-3xl text-blue-800 font-bold">Dashboard</h1>
          <div className="bg-white flex items-center rounded-full py-2 px-4 gap-x-8">
            <div className="flex items-center gap-1 bg-gray-100 w-48 p-2 rounded-full ">
              <Search />
              <p className="text-sm">Search</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Bell />
              <img
                src=""
                alt="profile-picture"
                className="object-cover w-10 h-10 overflow-hidden rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md min-h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
