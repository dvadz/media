import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

const AlbumsListItem = ({ album }) => {
  const header = (
    <div>
      <Button>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      list of photos here
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
