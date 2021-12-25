import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

const Feed = () => {
  const data = useSelector((store) => store.reducer);
  return (
    <>
      <section className="mt-8 w-full">
        <div className="w-full flex ">
          <div className="text-green-500 w-32 leading-7 text-center border-b-2 border-green-500">
            Global Feed
          </div>
          <div className="w-full border-b-2 border-gray-200"></div>
        </div>

        {data.articles.map((item, index) => {
          const {
            slug,
            title,
            description,
            updatedAt,
            author,
            favoritesCount,
            tagList,
          } = item;
          const date = moment(updatedAt).format("ddd MMM DD YYYY");
          return (
            <div key={index} className="py-5 border-b ">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {author.image ? (
                    <img
                      src={author.image}
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
                    <div className="text-sm font-medium text-green-500">
                      {author && author.username}
                    </div>
                    <div className="text-xs text-gray-400">{date}</div>
                  </div>
                </div>
                <div className="text-green-500 text-sm border flex items-center gap-1 border-green-500 rounded p-1">
                  <svg
                    className="w-4 h-4"
                    fill="#22c55e"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>{favoritesCount}</span>
                </div>
              </div>
              <Link to={`/article/${slug}`}>
                <h2 className="text-xl hover:text-green-500 transition duration-300 font-bold text-gray-800 mt-2">
                  {title}
                </h2>
                <p className="text-gray-400">{description}</p>
                <p className="text-gray-400 text-sm mt-4">Read more...</p>

                <div className="flex gap-2 justify-end overflow-auto">
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
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Feed;
