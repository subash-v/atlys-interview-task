import React from "react";
import profile from "../../images/photo.jpeg";
export default function PostCard({icon}) {
  return (
    <div className="p-5 w-full border-[#35373B] border bg-[#35373B] border-radius rounded-xl mt-3">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-2 items-center justify-start">
          <img
            className="w-10 h-10 rounded-full"
            src={profile}
            alt="Rounded avatar"
          ></img>
          <div>
            <div className="text-[#C5C7CA] text-base">Theresa Webb</div>
            <div className="text-sm text-[#7F8084]">5mins ago</div>
          </div>
        </div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 focus:ring-4 focus:outline-none "
          type="button"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#C5C7CA"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
      </div>
      {/* <div className="text-[#C5C7CA] text-xl font-medium mb-2">Create post</div> */}
      <div className="bg-[#000000] p-2 rounded-lg flex items-center justify-start gap-4">
        <div className=" w-12 h-12 rounded-full bg-[#343738] flex justify-center items-center">
          {icon}
        </div>
        <div className=" text-base text-[#7F8084] w-[calc(100%-48px)] leading-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
      </div>
      <div className="flex justify-start mt-4 gap-2 items-center">
        <svg
          class="w-4 h-4 text-[#7F8084]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
        </svg>

        <div className="text-xs text-[#7F8084] font-medium">24 comments</div>
      </div>
    </div>
  );
}
