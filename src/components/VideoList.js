import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    return (
      <div className="ui relaxed divided list">
        {videos.map(video => (
          <VideoItem
            video={video}
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
          ></VideoItem>
        ))}
      </div>
    );
  }
}

export default VideoList;
