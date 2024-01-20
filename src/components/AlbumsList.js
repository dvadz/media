import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={3} className="h-5" />;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          list of photos here
        </ExpandablePanel>
      );
    });
    return (
      <div>
        <div>
          <div>Albums by {user.name}</div>
          <Button onClick={handleAddAlbum}>Add Album</Button>
        </div>
        <div>{content}</div>
      </div>
    );
  }
};

export default AlbumsList;
