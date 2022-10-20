import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function Users({userId}) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/users`)
      .then((resp) => resp.json())
      .then((user) => setUserData(user));
  }, []);

  // const userCards = userData.map((user) => {
  //     return <UserCard key={user.id} user={user} />
  // })

  return (
    <section>
      {userData.map((user) => (
        <UserCard key={user.id} userId={userId} user={user} />
      ))}
    </section>
  );
}

export default Users;


