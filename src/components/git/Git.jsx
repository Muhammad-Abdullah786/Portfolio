import React, { useEffect, useState } from "react";

function Git() {
  const [data, setData] = useState([]);
  // calling api

  useEffect(() => {
    fetch("https://api.github.com/users/Muhammad-Abdullah786")
      .then((response) => response.json()) // convertin response into json object
      .then((data) => {
        // console.log("this is data : ", data);
        setData(data);
      });
  }, []);
  return (
    <div className=" text-white text-5xl bg-slate-600 p-4 text-center">
      {" "}
      this is my github my folowing are : {data.followers}
      <img
        className="flex justify-center align-middle flex-grow"
        src={data.avatar_url}
        alt="git pic"
        width={200}
      />
    </div>
  );
}

export default Git;
