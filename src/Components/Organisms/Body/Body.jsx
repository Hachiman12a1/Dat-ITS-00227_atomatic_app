import React, {
  useMemo, useState
} from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import "./Body.scss";

Body.propTypes = {};

const Loading = () => (
  <div className="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

function Body(props) {
  const { Data } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debounce = useDebounce(handleInputChange, 3000);

  const posts = useMemo(() => {
    if (!searchTerm) return Data;

    return Data.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [Data, searchTerm]);


  return (
    <div className="Post-container">
      <h1 className="Post-header">Posts</h1>
      <input type="text" onChange={debounce} />
      <i className="Post-search fa-solid fa-magnifying-glass"></i>
      <ul className="paragraphList">
        {posts.map((item) => {
          return (
            <LazyLoad
              className="lazyLoad"
              key={item.id}
              placeholder={<Loading />}
              height={500}
              offset={[-100, 500]}
            >
              <li className="paragraphItem">
                <img
                  className="paragraphItem-image"
                  src="https://www.w3schools.com/w3css/img_lights.jpg"
                  alt=""
                />
                <p>{item.title}</p>
                <button className="btnDetail">
                  <Link className="btnLink" to={`/detail/${item.id}`}>
                    Detail
                  </Link>
                </button>
              </li>
            </LazyLoad>
          );
        })}
      </ul>
    </div>
  );
}

export default Body;
