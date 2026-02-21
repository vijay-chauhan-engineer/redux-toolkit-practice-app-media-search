import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCollection(item.id));
  };

  return (
    <div className="w-full relative h-72 sm:h-80 bg-white rounded-xl overflow-hidden shadow-md">
      <a target="_blank" rel="noreferrer" href={item.url} className="h-full block">
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

      <div className="absolute bottom-0 w-full px-3 sm:px-4 py-3 flex justify-between items-center text-white bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-sm sm:text-base font-semibold capitalize truncate max-w-[65%]">
          {item.title}
        </h2>

        <button
          onClick={handleRemove}
          className="bg-red-600 active:scale-95 text-white rounded px-3 py-1 text-xs sm:text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;