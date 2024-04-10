import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "../../course-5/Button";
import { useAddAlbumMutation } from "../store/apis/albumsApi";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = ()=>{
    addAlbum(user)
  }
  // isFetching == true when everytime making request, 
  // isLoading == true when first time making request
  let content;
  if (isFetching) {
    content = <Skeleton times={2} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
     return <AlbumListItem key={album.id} album={album}/>
    });
  }
  return (
    <div>
      <div>{user.name}'s Album</div>
      <Button className="mb-2" secondary onClick={handleAddAlbum} loading={results.isLoading}>+ Add album</Button>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
