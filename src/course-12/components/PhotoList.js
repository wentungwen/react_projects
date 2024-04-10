import PhotoListItem from "./PhotoListItem";
import {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "../store";
import Button from "../../course-5/Button";
import Skeleton from "../components/Skeleton";

function PhotoList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();
  const handlePhotoClick = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} />;
  } else if (error) {
    content = <div>Error fetching photos</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <h3>{album.title}</h3>
      <Button secondary loading={addPhotoResults.isLoading} onClick={handlePhotoClick}>
        Add Photo
      </Button>
      <div className="grid grid-cols-4 gap-2 m-1">{content}</div>
    </div>
  );
}

export default PhotoList;
