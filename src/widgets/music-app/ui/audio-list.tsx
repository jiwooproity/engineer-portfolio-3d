import { AudioListIF } from "../lib/use-loader";

interface AudioListPropsIF {
  select: string;
  data: AudioListIF[];
  onSelect: (title: string) => void;
}

const AudioList = ({ select, data, onSelect }: AudioListPropsIF) => {
  return (
    <div className="music-list-wrapper">
      <div className="music-list">
        {data.map((audio) => (
          <div
            key={audio.title}
            className={`music-item ${select === audio.title ? "selected" : ""}`}
            onClick={() => onSelect(audio.title)}
          >
            <img className="music-cover" src={audio.cover} />
            <div className="music-info">
              <h2 className="music-title">{audio.title}</h2>
              <span className="music-artist">Suno</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioList;
