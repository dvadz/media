import { useFetchPhotosQuery } from "../store";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);

  let content;
  if (isFetching) {
    content = "Fetching";
  } else if (error) {
    content = "ERROR";
  } else {
    content = data.map((photo) => {
      return <div> {photo.url}</div>;
    });
  }

  return <div>{content}</div>;
};

export default PhotosList;
