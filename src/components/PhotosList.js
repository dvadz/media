import { useFetchPhotosQuery } from "../store";
import PhotoListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);

  let content;
  if (isFetching) {
    content = "Fetching";
  } else if (error) {
    content = "ERROR";
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return <div>{content}</div>;
};

export default PhotosList;
