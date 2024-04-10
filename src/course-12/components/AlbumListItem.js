import ExpandablePanel from "./ExpandablePanel";
import Button from "../../course-5/Button";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumsMutation } from "../store";
import PhotoList from "./PhotoList";

function AlbumListItem({ album }) {
  const [removeAlbums, results] = useRemoveAlbumsMutation();
  const handleRemoveAlbum = () => {
    removeAlbums(album);
  };
  const header = (
    <div className="flex items-center">
      <Button loading={results.isLoading} secondary className="m-3" onClick={handleRemoveAlbum}>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumListItem;
