const PhotosListItem = ({ photo }) => {
  return (
    <div>
      <img src={photo.url} />
    </div>
  );
};

export default PhotosListItem;
