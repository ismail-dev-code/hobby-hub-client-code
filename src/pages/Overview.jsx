import React, { useContext, useEffect, useState } from "react";
import { FaUsers, FaLayerGroup, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [totalGroups, setTotalGroups] = useState(0);
  const [myGroups, setMyGroups] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let myGroupsFetched = false;
    let totalGroupsFetched = false;
    // Total groups (public)
    fetch("https://hobby-hub-server-pied.vercel.app/all-group")
      .then((res) => res.json())
      .then((data) => {
        setTotalGroups(data.length);
        totalGroupsFetched = true;
        if (myGroupsFetched) setLoading(false);
      });

    if (user?.email && user?.accessToken) {
      fetch(`https://hobby-hub-server-pied.vercel.app/my-groups?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMyGroups(data);
          myGroupsFetched = true;
          if (totalGroupsFetched) setLoading(false);
        })
        .catch((err) => {
          console.error("MyGroupCount Error", err);
          myGroupsFetched = true;
          if (totalGroupsFetched) setLoading(false);
        });
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Dashboard Overview
      </h1>

      {/* User Info */}
      <div className="bg-base-200 p-4 rounded-xl mb-8 flex items-center gap-4">
        <div className="avatar">
          {user?.photoURL ? (
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          ) : (
            <FaUserCircle className="text-5xl text-gray-500" />
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            {user?.displayName || "User"}
          </h2>
          <p className="text-gray-600 text-[10px] md:text-xs">{user?.email}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse h-28 rounded-xl shadow-md"
              ></div>
            ))}
          </>
        ) : (
          <>
            <div className="bg-primary text-white p-6 rounded-xl shadow-md flex items-center gap-4">
              <FaLayerGroup className="text-4xl" />
              <div>
                <p className="text-sm">Total Groups</p>
                <h3 className="text-2xl font-bold">{totalGroups}</h3>
              </div>
            </div>

            <div className="bg-secondary text-white p-6 rounded-xl shadow-md flex items-center gap-4">
              <FaLayerGroup className="text-4xl" />
              <div>
                <p className="text-sm">My Groups</p>
                <h3 className="text-2xl font-bold">{myGroups?.length}</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Overview;
