import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCollection(item.id));
  };

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a target="_blank" rel="noreferrer" href={item.url} className="h-full">
        {item.type === "photo" && (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        )}

        {item.type === "video" && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            src={item.src}
          />
        )}

        {item.type === "gif" && (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        )}
      </a>

      <div className="flex justify-between items-center w-full px-4 py-5 absolute bottom-0 text-white">
        <h2 className="text-xl font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>

        <button
          onClick={handleRemove}
          className="bg-red-600 active:scale-95 text-white rounded px-3 py-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
