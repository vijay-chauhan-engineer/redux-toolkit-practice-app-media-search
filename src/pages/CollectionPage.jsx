import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-3xl font-medium">
            Your Collection
          </h2>
          <button
            onClick={clearAll}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-6 py-2 text-base sm:text-lg font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-xl text-gray-300 font-medium">
          Collection is Empty
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((item, idx) => (
          <CollectionCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;