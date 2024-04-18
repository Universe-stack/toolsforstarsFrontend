import React from "react";
import YouTube from "react-youtube";


interface YoutubeVideoProps {
  videoId: any; // Add props for videoId
  height?: any; // Optional height prop
  width?: any; // Optional width prop
  autoplay?: any; // Optional autoplay prop
}

export default class YoutubeVideo extends React.Component<YoutubeVideoProps> {
  private _onReady(event: any) {
    event.target.pauseVideo();
  }

  render() {
    const { videoId, height = "600", width = "900", autoplay = 1 } = this.props;

    const opts = {
      height,
      width,
      playerVars: {
        autoplay,
      },
    };

    return (
      <div>
        <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}
