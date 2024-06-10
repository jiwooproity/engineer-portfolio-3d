import { useEffect, useState } from "react";

const FILE_LIST = [
  {
    name: "BG Fansite",
    title: "BraveGirls Fansite",
    img: "../images/files/bg.ico",
    link: "https://www.bglovely.com",
  },
  {
    name: "SkinClouds",
    title: "Mincraft Skin Cloud",
    img: "../images/files/skinclouds.png",
    link: "http://www.skinclouds.net",
  },
];

const FileList = () => {
  const [select, setSelect] = useState("");

  const linkToWebSite = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.click();
  };

  const clickHover = (name: string) => {
    setSelect(name);
  };

  const initHover = () => {
    setSelect("");
  };

  useEffect(() => {
    const container = document.querySelector(".file-list-wrapper") as HTMLDivElement;

    container?.addEventListener("click", initHover);
    return () => {
      container?.removeEventListener("click", initHover);
    };
  }, []);

  return (
    <div className="file-list-wrapper">
      {FILE_LIST.map(({ name, title, img, link }) => (
        <div
          className="file-list-item"
          onClick={() => clickHover(name)}
          onDoubleClick={() => linkToWebSite(link)}
        >
          <img className={name === select ? "active" : ""} src={img} title={title} />
          <span className={name === select ? "active" : ""}>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default FileList;
