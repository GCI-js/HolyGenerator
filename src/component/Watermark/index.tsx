import { useEffect, useState } from "react";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

const fontFamilies = [
  "Noto Serif KR",
  "Noto Sans KR",
  "Gothic A1",
  "Gaegu",
  "Single Day",
];
const fontColors = [
  { color: "white", strokeColor: "black" },
  { color: "black", strokeColor: "white" },
];

export default function Watermark(properties: Properties) {
  const id = [`_${idiotproof.trace(Watermark)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const [fontFamilyPos, setFontFamilyPos] = useState(0);
  const [fontColorPos, setFontColorPos] = useState(0);
  const [wmkStyle, setWmkStyle] = useState<any>();
  const [wmkBackStyle, setWmkBackStyle] = useState<any>();
  const changeFontFamily = () => {
    let pos = fontFamilyPos + 1;
    if (pos == 5) pos = 0;
    setFontFamilyPos(pos);
    let tmpWmkStyle = {
      ...wmkStyle,
      fontFamily: fontFamilies[pos],
    };
    let tmpWmkBackStyle = {
      ...wmkBackStyle,
      fontFamily: fontFamilies[pos],
    };
    setWmkStyle(tmpWmkStyle);
    setWmkBackStyle(tmpWmkBackStyle);
  };
  const changeFontColor = () => {
    let pos = 1 - fontColorPos;
    setFontColorPos(pos);
    let tmpWmkStyle = {
      ...wmkStyle,
      color: fontColors[pos].color,
    };
    let tmpWmkBackStyle = {
      ...wmkBackStyle,
      color: fontColors[pos].color,
      WebkitTextStroke: `1px ${fontColors[pos].strokeColor}`,
    };
    setWmkStyle(tmpWmkStyle);
    setWmkBackStyle(tmpWmkBackStyle);
  };
  useEffect(() => {
    setWmkStyle({
      fontFamily: fontFamilies[fontFamilyPos],
      color: fontColors[fontColorPos].color,
    });
    setWmkBackStyle({
      fontFamily: fontFamilies[fontFamilyPos],
      color: fontColors[fontColorPos].color,
      WebkitTextStroke: `1px ${fontColors[fontColorPos].strokeColor}`,
    });
  }, []);
  return (
    <div id={id} className={cl}>
      <div className="wmkBack" style={wmkBackStyle}>
        신앙의한줄
      </div>
      <div className="wmk" style={wmkStyle} onClick={() => changeFontColor()}>
        신앙의한줄
      </div>
    </div>
  );
}
