import { useEffect, useState } from "react";
import idiotproof from "../../service/idiotproof";
import styles from "./index.module.scss";

interface Props extends Properties {
  script: string;
}

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

export default function Scripture(properties: Props) {
  const id = [`_${idiotproof.trace(Scripture)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  const script = properties.script;
  const [fontFamilyPos, setFontFamilyPos] = useState(0);
  const [fontColorPos, setFontColorPos] = useState(0);
  const [scriptStyle, setScriptStyle] = useState<any>();
  const [scriptBackStyle, setScriptBackStyle] = useState<any>();
  const changeFontFamily = () => {
    let pos = fontFamilyPos + 1;
    if (pos == 5) pos = 0;
    setFontFamilyPos(pos);
    let tmpScriptStyle = {
      ...scriptStyle,
      fontFamily: fontFamilies[pos],
    };
    let tmpScriptBackStyle = {
      ...scriptBackStyle,
      fontFamily: fontFamilies[pos],
    };
    setScriptStyle(tmpScriptStyle);
    setScriptBackStyle(tmpScriptBackStyle);
  };
  const changeFontColor = () => {
    let pos = 1 - fontColorPos;
    setFontColorPos(pos);
    let tmpScriptStyle = {
      ...scriptStyle,
      color: fontColors[pos].color,
    };
    let tmpScriptBackStyle = {
      ...scriptBackStyle,
      color: fontColors[pos].color,
      WebkitTextStroke: `1px ${fontColors[pos].strokeColor}`,
    };
    setScriptStyle(tmpScriptStyle);
    setScriptBackStyle(tmpScriptBackStyle);
  };
  useEffect(() => {
    setScriptStyle({
      fontFamily: fontFamilies[fontFamilyPos],
      color: fontColors[fontColorPos].color,
    });
    setScriptBackStyle({
      fontFamily: fontFamilies[fontFamilyPos],
      color: fontColors[fontColorPos].color,
      WebkitTextStroke: `1px ${fontColors[fontColorPos].strokeColor}`,
    });
  }, []);
  return (
    <div id={id} className={cl}>
      <div className="scriptBack" style={scriptBackStyle}>
        {script}
      </div>
      <div
        className="script"
        style={scriptStyle}
        onClick={() => changeFontColor()}
      >
        {script}
      </div>
    </div>
  );
}
