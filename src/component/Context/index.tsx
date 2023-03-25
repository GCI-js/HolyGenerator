import { useEffect, useState } from "react";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

interface Props extends Properties {
  context: string;
}

const fontFamilies = [
  "Noto Serif KR",
  "Noto Sans KR",
  "Gothic A1",
  "Gaegu",
  "Single Day",
];
const fontSizes = ["16px", "24px", "32px"];
const fontColors = [
  { color: "white", strokeColor: "black" },
  { color: "black", strokeColor: "white" },
];

export default function Context(properties: Props) {
  const id = [`_${idiotproof.trace(Context)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const context = properties.context;
  const [fontFamilyPos, setFontFamilyPos] = useState(0);
  const [fontSizePos, setFontSizePos] = useState(0);
  const [fontColorPos, setFontColorPos] = useState(0);
  const [contextStyle, setContextStyle] = useState<any>();
  const [contextBackStyle, setContextBackStyle] = useState<any>();
  const changeFontFamily = () => {
    let pos = fontFamilyPos + 1;
    if (pos == 5) pos = 0;
    setFontFamilyPos(pos);
    let tmpContextStyle = {
      ...contextStyle,
      fontFamily: fontFamilies[pos],
    };
    let tmpContextBackStyle = {
      ...contextBackStyle,
      fontFamily: fontFamilies[pos],
    };
    setContextStyle(tmpContextStyle);
    setContextBackStyle(tmpContextBackStyle);
  };
  const changeFontSize = () => {
    let pos = fontSizePos + 1;
    if (pos == 3) pos = 0;
    setFontSizePos(pos);
    let tmpContextStyle = {
      ...contextStyle,
      fontSize: fontSizes[pos],
    };
    let tmpContextBackStyle = {
      ...contextBackStyle,
      fontSize: fontSizes[pos],
    };
    setContextStyle(tmpContextStyle);
    setContextBackStyle(tmpContextBackStyle);
  };
  const changeFontColor = () => {
    let pos = 1 - fontColorPos;
    setFontColorPos(pos);
    let tmpContextStyle = {
      ...contextStyle,
      color: fontColors[pos].color,
    };
    let tmpContextBackStyle = {
      ...contextBackStyle,
      color: fontColors[pos].color,
      WebkitTextStroke: `1px ${fontColors[pos].strokeColor}`,
    };
    setContextStyle(tmpContextStyle);
    setContextBackStyle(tmpContextBackStyle);
  };
  useEffect(() => {
    setContextStyle({
      fontFamily: fontFamilies[fontFamilyPos],
      fontSize: fontSizes[fontSizePos],
      color: fontColors[fontColorPos].color,
    });
    setContextBackStyle({
      fontFamily: fontFamilies[fontFamilyPos],
      fontSize: fontSizes[fontSizePos],
      color: fontColors[fontColorPos].color,
      WebkitTextStroke: `1px ${fontColors[fontColorPos].strokeColor}`,
    });
  }, []);
  return (
    <div id={id} className={cl}>
      <div className="contextBack" style={contextBackStyle}>
        {context}
      </div>
      <div
        className="context"
        style={contextStyle}
        onClick={() => changeFontColor()}
      >
        {context}
      </div>
    </div>
  );
}
