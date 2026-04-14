import React, { createContext, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";

export const CallContext = createContext();
const CallingContext = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [videoCall, setVideoCall] = useState([]);
  const [tab, setTab] = useState("all");

  const callHandler = (user) => {
    console.log(user);

     toast.success(`📞 Call to ${user.name}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Zoom,
    });
    setCall([...call, user]);
  };

  const textHandler = (user) => {
    console.log(user);
   
    toast.success(`💬 Text to ${user.name}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Zoom,
    });
    setText([...text, user]);
  };

  const videoHandler = (user) => {
    console.log(user);

    toast.success(`▶️ Video Call to ${user.name}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Zoom,
    });
    setVideoCall([...videoCall, user]);
  };

    const timeline = [
    ...call.map((item) => ({ ...item, type: "call" })),
    ...text.map((item) => ({ ...item, type: "text" })),
    ...videoCall.map((item) => ({ ...item, type: "video" })),
  ];

  const data = {
    call,
    text,
    videoCall,
    setCall,
    setText,
    setVideoCall,
    callHandler,
    textHandler,
    videoHandler,
    tab,
    setTab,timeline
  };

  return <CallContext value={data}>{children}</CallContext>;
};

export default CallingContext;
