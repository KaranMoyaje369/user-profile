import React, { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">User Profiles</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserProfile key={user.id} users={user} setUsers={setUsers} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
