import idiotproof from "../../service/idiotproof";
import tapestry from "../../service/tapestry";
import hanger from "../../service/hanger";

import styles from "./index.module.scss";
import text_img from "./text_img.svg";
import font_img from "./font_img.svg";
import background_img from "./background_img.svg";
import sticker_img from "./sticker_img.svg";
import info_img from "./info.svg";
import share_img from "./share.svg";
interface Props extends Properties {
  randomText: Function;
}
export default function TemporalBoard(properties: Props) {
  const id = [`_${idiotproof.trace(TemporalBoard)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");

  return (
    <div id={id} className={cl}>
      <div className="ButtomContainer">
        <div className="ButtonContainer">
          <div className="BottomStruct">
            <div className="ButtonText">문구</div>
            <div className="TextButton" onClick={() => properties.randomText()}>
              <img src={text_img} className="ButtonImg" />
            </div>
          </div>
          <div className="BottomStruct">
            <div className="ButtonText">폰트</div>
            <div className="FontButton">
              <img src={font_img} className="ButtonImg" />
            </div>
          </div>
          <div className="BottomStruct">
            <div className="ButtonText">배경</div>
            <div className="BackgroundButton" onClick={() => tapestry.choose()}>
              <img src={background_img} className="ButtonImg" />
            </div>
          </div>
        </div>
        <div></div>
        <div className="FooterContainer" onClick={() => hanger.create("")}>
          <img src={info_img} className="ButtonImg" />
          <div className="ButtonText">신앙의 한줄</div>
          <img src={share_img} className="ButtonImg" />
        </div>
      </div>
    </div>
  );
}
