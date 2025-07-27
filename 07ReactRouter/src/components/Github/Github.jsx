import React, { useEffect, useState } from "react";

function Github() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/AuthRan")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="text-3xl bg-gray-50 flex justify-center">
        Github Followers : {data.followers}
      </div>
      <div className="bg-gray-100 flex mb-2">
        <div className="pl-2 ">
          <img className="w-80 h-80 rounded-full border border-gray-300 shadow-md object-cover hover:scale-105 transition duration-300" src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
        <div className="pl-2">
          <p>Name : {data.name}</p>
          <p>Username : {data.login}</p>
        </div>
      </div>
    </>
  );
}

export default Github;
