import React, { useState, useEffect } from "react";
import "./style.css";

function UserInfo({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
  }, []);
  
  if (data) {
    return <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img src={data.avatar_url} alt={data.login} width="128" />
    </div>;
  }

  return <div>No user available.</div>;
}

export default UserInfo