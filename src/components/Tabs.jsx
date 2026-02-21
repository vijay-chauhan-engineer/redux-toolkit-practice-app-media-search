import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const disPatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex flex-wrap gap-4 px-4 sm:px-6 md:px-10 py-6">
      {tabs.map((elem, idx) => (
        <button
          className={`${
            activeTab === elem ? "bg-blue-700" : "bg-gray-500"
          } transition cursor-pointer active:scale-95 px-4 py-2 text-sm sm:text-base rounded uppercase`}
          key={idx}
          onClick={() => disPatch(setActiveTabs(elem))}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;