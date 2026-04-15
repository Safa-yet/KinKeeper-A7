import React, { useContext, useState } from "react";
import { CallContext } from "../../Context Data/CallingContext";
import HistoryCard from "../../Components/Shared Ui/HistoryCard";
import EmptyImg from "../../assets/empty message.gif";

const Timeline = () => {
  const {
    call,
    text,
    videoCall,
    tab,
    setTab,
    timeline,
  } = useContext(CallContext);

  // const [timeLine ,setTimeLine] = useState([]);

  //   const timeline = [...call, ...text, ...videoCall];

  const filteredData =
    tab === "all" || tab === ""
      ? timeline
      : timeline.filter((item) => item.type === tab);
  console.log("Timeline", timeline);

  console.log("call", call);
  console.log("text", text);
  console.log("Video", videoCall);

  console.log("tabb name", tab);
  return (
    <div className="container-main mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      <select
        defaultValue="Filter Timeline"
        className="select"
        onChange={(e) => setTab(e.target.value)}
      >
        <option value="all">All History</option>
        <option value="call">Call History</option>
        <option value="text">Text History</option>
        <option value="video">Video Call History</option>
      </select>

      {filteredData.length === 0 ? (
        <>
          <div className=" flex flex-col items-center justify-center gap-3 my-4 ">
            <img src={EmptyImg} alt="" className="rounded-2xl" />
            <h1 className="lg:text-2xl text-text-sec">No Activity Yet</h1>
          </div>
        </>
      ) : (
        <div className="space-y-3 my-6">
          {filteredData.map((item) => (
            <HistoryCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* 
      {tab == "call" && (
        <>
          <div className="space-y-3">
            {call.map((item) => (
              <HistoryCard key={item.id} item={item}></HistoryCard>
            ))}
          </div>
        </>
      )}
      {tab == "text" && (
        <>
          <div className="space-y-3">
            {call.map((item) => (
              <HistoryCard key={item.id} item={item}></HistoryCard>
            ))}
          </div>
        </>
      )}
      {tab == "video" && (
        <>
          <div className="space-y-3">
            {call.map((item) => (
              <HistoryCard key={item.id} item={item}></HistoryCard>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
};

export default Timeline;
