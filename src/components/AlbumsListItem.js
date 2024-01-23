import ExpandablePanel from "./ExpandablePanel";

const AlbumsListItem = ({ album }) => {
  const header = <div>{album.title}</div>;
  return (
    <ExpandablePanel key={album.id} header={header}>
      list of photos here
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
