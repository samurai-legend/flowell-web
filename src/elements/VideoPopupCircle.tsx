import CircleMask from "./CircleMask";

const VideoPopupCircle: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  return (
    <div className="relative z-0">
      <CircleMask
        imageUrl="/assets/video-banner.png"
        alt="video-banner"
        rings={2}
      />
    </div>
  );
};

export default VideoPopupCircle;
