const PhotosListItem = ({ photo }) => {
  return (
    <div className="m-2">
      <img src={photo.url} alt="random pix" />
    </div>
  );
};

export default PhotosListItem;
