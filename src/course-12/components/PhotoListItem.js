import { useRemovePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";

function PhotoListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo)
  };
  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer">
      <img
        className="w-full h-full object-cover object-center"
        alt={photo.id}
        src={photo.url}
      ></img>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotoListItem;
