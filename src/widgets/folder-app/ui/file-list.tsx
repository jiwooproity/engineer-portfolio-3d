const FILE_LIST = [
  { name: "BraveGirls Fansite", img: "../images/files/bg.ico", link: "https://www.bglovely.com" },
  { name: "SkinClouds", img: "../images/files/skinclouds.png", link: "http://www.skinclouds.net" },
];

const FileList = () => {
  const linkToWebSite = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="file-list-wrapper">
      {FILE_LIST.map(({ name, img, link }) => (
        <div className="file-list-item" onClick={() => linkToWebSite(link)}>
          <img src={img} title={name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default FileList;
