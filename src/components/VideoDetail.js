import React from "react";

const VideoDetail = ({ video }) => {
  if (!!video) {
    const videoId = video.id.videoId;
    return (
      <React.Fragment>
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${videoId}`} />
        </div>
        <div className="ui segment">
          <h3 className="ui header">{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h3>loading...</h3>
    </React.Fragment>
  );
};

export default VideoDetail;
