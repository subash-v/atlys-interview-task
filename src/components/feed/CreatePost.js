import React, { useState } from "react";

export default function CreatePost() {
  const [message, setMessage] = useState("");
  return (
    <div className="p-5 w-full border-[#35373B] border bg-[#35373B] border-radius rounded-xl">
      <div className="text-[#C5C7CA] text-xl font-medium mb-2">Create post</div>
      <div className="bg-[#000000] p-2 rounded flex items-center justify-start gap-4">
        <div className=" w-12 h-12 rounded-full bg-[#343738] flex justify-center items-center">
          💬
        </div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" bg-[#000] focus:outline-none w-full"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex justify-end mt-4">
      <button className="px-10 py-3 font-medium text-sm bg-[#4A96FF] text-white">Post</button>
      </div>
    </div>
  );
}
