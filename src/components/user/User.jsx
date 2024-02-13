import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div>
      <h1 className=" bg-slate-700 text-white p-4 text-center">
        User : {userid}
      </h1>
    </div>
  );
}

export default User;
