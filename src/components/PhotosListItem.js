import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative cursor-pointer m-2">
      <img src={photo.url} className="h-20 w-20" alt="random pix" />
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80"> */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80">
        <GoTrash
          className="text-5xl text-red-800"
          onClick={handleRemovePhoto}
        />
      </div>
    </div>
  );
};

export default PhotosListItem;
