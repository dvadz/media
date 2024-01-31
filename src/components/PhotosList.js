import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotoListItem from "./PhotosListItem";
import Button from "./Button";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

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

  return (
    <div>
      <div className="m-2">
        <Button loading={result.isLoading} onClick={handleAddPhoto}>
          Add Photo
        </Button>
      </div>
      <div className="flex flex-wrap">{content}</div>
    </div>
  );
};

export default PhotosList;
