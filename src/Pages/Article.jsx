import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import Header from "../Components/Article/Header";
import SubHeader from "../Components/Article/SubHeader";
import CommentList from "../Components/Article/CommentList";

const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const { slug } = useParams();

  const data = useSelector((store) => store.reducer);

  useEffect(() => {
    setArticleData(() => {
      return data.articles.filter((item) => {
        return slug === item.slug;
      });
    });
    // eslint-disable-next-line
  }, [slug]);

  const { title, body, updatedAt, author, comments, tagList } =
    articleData.length > 0 && articleData[0];
  const date = moment(updatedAt).format("ddd MMM DD YYYY");

  return (
    <section className="pt-12">
      <Header date={date} author={author} title={title} />
      <SubHeader body={body} tagList={tagList} />
      <br />
      <br />
      <CommentList comments={comments} />
    </section>
  );
};

export default Article;
