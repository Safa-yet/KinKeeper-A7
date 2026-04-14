import React, { useContext } from "react";
import { CallContext } from "../../Context Data/CallingContext";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const HistoryCard = ({ item }) => {
  const { tab, setTab } = useContext(CallContext);
  return (
    <ul className="list bg-base-100 rounded-box shadow-md ">
      <li className="list-row">
        <div>
          <img src={item.type === "call"? callImg: item.type === "text" ? textImg : videoImg
            }
          />
        </div>
        <div>
          <div>{item.type === "call"? "Call": item.type === "text"? "Text": "Video Call"}
            <b> with {item.name}</b>
          </div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {new Date().toLocaleDateString()}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HistoryCard;
