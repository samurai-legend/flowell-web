"use client";


import YTPlayer from "youtube-player";
import { useEffect, useRef, useState } from "react";
import { detectVideoPlatform, extratYTvideoId } from "@app/utils/VideoUtils";

const HoverVideoBox: React.FC<{ url: string; quote: string; name: string }> = ({
  url,
  name,
  quote,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [platform, setPlatform] = useState<
    "youtube" | "vimeo" | "unknown" | null
  >(null);

  useEffect(() => {
    setPlatform(detectVideoPlatform(url));
  }, [url]);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="hoverbox-video--wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      //   onTouchStart={handleMouseEnter}
      //   onTouchEnd={handleMouseLeave}
    >
      <div className="hoverbox-video--container">
        {platform === "youtube" && (
          <YouTubePlayer url={url} isPlaying={isPlaying} />
        )}

        {platform === "vimeo" && (
          <VimeoPlayer url={url} isPlaying={isPlaying} />
        )}
      </div>
      <div className="hoverbox-video--content">
        <span className="hoverbox--quote">{`"${quote}"`}</span>
        <div className="center-layout row">
          <span className="dash"></span>
          <span className="hoverbox--name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default HoverVideoBox;

// TODO: Add vimeo support
const VimeoPlayer: React.FC<{ url: string; isPlaying: boolean }> = ({
  url,
  isPlaying,
}) => {
  return <div className="hover-video--video"></div>;
};

const YouTubePlayer: React.FC<{ url: string; isPlaying: boolean }> = ({
  url,
  isPlaying,
}) => {
  const playerRef = useRef<any>(null);
  const [playerInstance, setPlayerInstance] = useState<any>(null);
  useEffect(() => {
    if (playerRef.current) {
      const player = YTPlayer(playerRef.current, {
        playerVars: {
          controls: 0,
          autoplay: 1,
        },
        height: "100%",
        width: "100%",
      });

      const videoId = extratYTvideoId(url);
      if (videoId) {
        player.loadVideoById(videoId).then(() => {
          setPlayerInstance(player);
        });
      }

      return () => {
        player.destroy();
      };
    }
  }, [url]);

  useEffect(() => {
    if (playerInstance) {
      if (isPlaying) {
        playerInstance.playVideo();
      } else {
        playerInstance.pauseVideo();
      }
    }
  }, [isPlaying, playerInstance]);

  return <div className="hoverbox-video--video" ref={playerRef} />;
};
