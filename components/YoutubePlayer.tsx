import React, { useRef } from "react";
import YouTube from "react-youtube";
import { RxCrossCircled } from "react-icons/rx";
type props = {
  videoId: string;
  className?: string;
  setplayVideo?: (value: boolean) => void;
};
const YoutubePlayer: React.FC<props> = (props) => {
  const playerRef = useRef<any>(null);
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handelclick = (): void => {
    playerRef.current.pauseVideo();
    props.setplayVideo && props.setplayVideo(false);
  };
  return (
    <div>
      <span
        className={`float-right p-4 text-3xl text-white cursor-pointer ${
          props.setplayVideo ? "block" : "hidden"
        }`}
        onClick={handelclick}
      >
        <RxCrossCircled />
      </span>
      <YouTube
        videoId={props.videoId}
        opts={opts}
        className={props.className}
        onReady={(event) => {
          playerRef.current = event.target;
        }}
      />
    </div>
  );
};

export default YoutubePlayer;
