export const detectVideoPlatform = (url: string) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return "youtube";
  } else if (url.includes("vimeo.com")) {
    return "vimeo";
  } else {
    return "unknown";
  }
};

export const extratYTvideoId = (url: string) => {
  var match = url.match(
    /(?:\?v=|\/embed\/|\/\d+\/|\/vi\/|\/v\/|https:\/\/www\.youtube\.com\/watch\?v=|https:\/\/youtu\.be\/|https:\/\/www\.youtube\.com\/embed\/|https:\/\/www\.youtube\.com\/v\/)([^#\&\?]{11})/
  );
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
};
