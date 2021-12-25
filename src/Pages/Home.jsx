import React from "react";
import Header from "../Components/Home/Header";
import Feed from "../Components/Home/Feed";

const Home = () => {
  return (
    <div className="pt-12">
      <main>
        <section>
          <Header />
        </section>

        <div className="w-11/12 md:w-10/12 mx-auto sm:flex gap-6">
          <Feed />
          <div className="w-full sm:w-4/12 mt-6">
            <div className="h-10 flex items-center bg-gray-100 pl-4 text-xs font-medium">
              Popular Tags
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
