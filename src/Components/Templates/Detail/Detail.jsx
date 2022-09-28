import React from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";

Detail.propTypes = {};

function Detail(props) {
  const { id } = useParams();
  const { Data } = props;
  const idPost = Number.parseInt(id);

  console.log(Data);
  console.log(id);

  const selectedPost = Data.find((item) => item.id === idPost);
  console.log(selectedPost);

  return (
    <div className="Detail-container">
      {selectedPost && (
        <div className="Detail-post">
          <div className="Detail-left">
            <img
              className="image-post"
              src="https://www.w3schools.com/w3css/img_lights.jpg"
              alt=""
            />
          </div>
          <div className="Detail-right">
            <h1 className="title-post">{selectedPost.title}</h1>
            <p className="content-post">{selectedPost.body}</p>
          </div>
        </div>
      )}
      {!selectedPost && <p>Không có dữ liệu</p>}
    </div>
  );
}

export default Detail;
