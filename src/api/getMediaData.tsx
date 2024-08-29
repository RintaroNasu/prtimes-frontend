import { MediaRequest, MediaResponseArray } from "@/types/media";

export const getMediaData = async (post: MediaRequest) => {
  const res = await fetch("http://localhost:80/api/createMediaList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ post }),
  });

  const data = await res.json();
  return data;
};
