import React from "react";
import YouTube from "react-youtube";

interface YoutubeVideoProps {
  videoId: string;
  height?: string | number;
  width?: string | number;
  autoplay?: 0 | 1;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId, height = "100%", width = "100%", autoplay = 1 }) => {
  const _onReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };

  const opts = {
    height,
    width,
    playerVars: {
      autoplay,
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} className={"w-full h-full"} />
    </div>
  );
};

export default YoutubeVideo;