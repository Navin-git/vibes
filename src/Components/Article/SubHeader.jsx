import React from "react";
const SubHeader = ({ body, tagList }) => {
  return (
    <div className="w-11/12 sm:w-10/12 p-4 mx-auto border-b border-gray-300">
      <p className="my-4 font-medium text-gray-600">{body}</p>
      <div className="flex gap-2 justify-start">
        {Array.isArray(tagList) &&
          tagList.map((tag, index) => {
            return (
              <div key={index}>
                <p className="text-sm text-gray-400 border rounded-full px-2">
                  {tag}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SubHeader;
