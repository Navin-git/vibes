import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const CommentList = ({ comments }) => {
  return (
    <div className="w-10/12 sm:w-7/12 mx-auto">
      <p className="text-gray-700">
        <span className="text-green-500">
          <Link to={"/signin"}>Sing in</Link>
        </span>{" "}
        or{" "}
        <span className="text-green-500">
          <Link to={"/register"}>Sing up </Link>
        </span>
        to add comment on this article
      </p>
      <br />
      {Array.isArray(comments) &&
        comments.map((item, index) => {
          const { body, author, updatedAt } = item;
          const date = moment(updatedAt).format("ddd MMM DD YYYY");

          return (
            <div key={index} className="border rounded mb-4 border-gray-200">
              <div className="py-4 text-gray-700 px-4">{body}</div>
              <div className="bg-gray-200 py-2 px-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {author.image ? (
                      <img
                        src={author && author.image}
                        alt="author"
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <div className="h-6 w-6 rounded-full flex justify-center items-center text-white bg-gray-300">
                        <svg
                          className="w-4 h-4"
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

                    <div className="flex gap-1">
                      <div className="text-sm font-medium text-green-500 ">
                        {author && author.username}
                      </div>
                      <div className="text-xs self-center text-gray-400">
                        {date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default CommentList;
