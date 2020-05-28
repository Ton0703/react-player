import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from "react-player";
import Svg from "./svg/svg";
import ButonSvg from "./svg/buttonSvg";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 810px)",
  });
  const notify = () => toast.info("正在建立链接, 请稍后! !");
  const [url, set] = useState("");
  const [video, setVideo] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (url.trim().length !== 0) {
      setVideo(url);
      setVisible(true);
      notify()
    } else {
      set("");
    }
  };
  const handleEnterClick = (e) => {
    if (e.charCode === 13) {
      handleClick()
    } else {
      return;
    }
  };
  return (
    <div className="App">
      <ToastContainer 
          position="bottom-right"
          autoClose={3000}
      />
      <Header set={set} setVisible={setVisible} />
      {isTabletOrMobileDevice ? (
        <div>暂时只支持电脑浏览器</div>
      ) : (
        <>
          {visible ? (
            <ReactPlayer
              url={video}
              controls
              width="60%"
              height="60%"
              playing
            />
          ) : (
            <Svg height="60%" />
          )}
          <div className="urlInput">
            <input
              className="input"
              type="text"
              value={url}
              placeholder="请输入youtube视频链接。(也支持twitch,facebook等其他网站)"
              onChange={(e) => set(e.target.value)}
              onKeyPress={handleEnterClick}
            />
            <button className="button" onClick={handleClick}>
              <ButonSvg />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
