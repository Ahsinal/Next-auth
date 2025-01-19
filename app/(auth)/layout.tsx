import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   <>
    <div className="bg-red-500 py-4">
      <nav>This is auth navbar</nav>
    </div>
    {children}
   </>
  );
};

export default AuthLayout;
