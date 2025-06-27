import { useLoaderData } from "react-router";
import GroupCard from "../components/allGroup/GroupCard";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useState, useMemo, useEffect } from "react";

const AllGroups = () => {
  const groupData = useLoaderData();
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState("all");

 
  const categoryOptions = useMemo(() => {
    const categories = groupData.map((g) => g.category);
    return ["all", ...new Set(categories)];
  }, [groupData]);

  // Filtered and sorted data
  const filteredGroups = useMemo(() => {
    let filtered = groupData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((g) => g.category === selectedCategory);
    }

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [groupData, sortOrder, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>All Group | HobbyHub</title>
      </Helmet>
      <div className="md:px-16 px-8">
        <h1 className="text-center text-3xl mt-10 font-bold">All Groups</h1>
        <div className="flex-1 h-px w-1/8 mx-auto bg-gray-300 animate-ping"></div>
        <div className="text-center max-w-screen-sm mx-auto px-5 font-light text-gray-500 dark:text-gray-400">
          <p>
            Discover a wide range of hobbies — from art and travel to tech and
            wellness. Find your passion and connect with like-minded enthusiasts.
          </p>
        </div>

        {/* Sorting & Filtering Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-10">
          {/* Filter by Category */}
          <div>
            <label className="mr-2 font-medium">Filter by Category:</label>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered select-sm"
              value={selectedCategory}
            >
              {categoryOptions.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort by Date */}
          <div>
            <label className="mr-2 font-medium">Sort by Date:</label>
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered select-sm"
              value={sortOrder}
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Group Cards */}
        <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-4 gap-4 my-8">
          <Fade delay={50} duration={1000} triggerOnce fraction={0.5}>
            {filteredGroups.length ? (
              filteredGroups.map((group) => (
                <GroupCard key={group._id} group={group} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No groups found for selected filter.
              </p>
            )}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default AllGroups;
