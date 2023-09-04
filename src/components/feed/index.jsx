import React from "react";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

export default function feed() {
  return (
    <section className="bg-[#000] flex justify-center  text-white h-[100vh] overflow-auto py-20 px-[30%]">
      <div className="w-full h-full">
        <div className="text-[#C5C7CA] text-3xl font-medium mb-5">
          Hello Jane{" "}
        </div>
        <div className=" text-sm text-[#7F8084] max-w-lg mb-10">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>
        <CreatePost />
        {["😞","🤗","👋"]?.map((val) => (
          <PostCard icon={val}/>
        ))}
      </div>
    </section>
  );
}
