import React from "react";
const Header = ({ title, author, date }) => {
  return (
    <div className="h-44  bg-gray-800 flex items-center text-white ">
      <div className="w-11/12 sm:w-10/12 self-center m-auto">
        <div className="text-4xl font-extrabold my-4">{title}</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {author && author.image ? (
              <img
                src={author && author.image}
                alt="author"
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="h-8 w-8 rounded-full flex justify-center items-center text-white bg-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="white"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
            <div>
              <div className="text-sm font-medium text-white">
                {author && author.username}
              </div>
              <div className="text-xs text-gray-400">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
