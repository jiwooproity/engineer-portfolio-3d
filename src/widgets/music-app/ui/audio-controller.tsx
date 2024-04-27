import useAudio from "../lib/use-audio";

const AudioController = ({ select }: { select: string }) => {
  const [
    audioRef,
    progressBarRef,
    progressRef,
    playing,
    current,
    duration,
    progressMove,
    mouseDown,
    mouseUp,
    mouseLeave,
    onToggle,
  ] = useAudio(select);

  return (
    <div className="music-controller">
      <div className="music-control-box">
        <img src={`/svgs/${playing ? "pause" : "play"}.svg`} onClick={onToggle} />
      </div>
      <div className="music-timeline">
        <div className="music-time">{current}</div>
        <div
          ref={progressBarRef}
          className="music-progress-bar"
          onMouseMove={progressMove}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          onMouseLeave={mouseLeave}
        >
          <div ref={progressRef} className="music-active-progress" />
        </div>
        <div className="music-time">{duration}</div>
      </div>
      <audio ref={audioRef} id="audio" src={`https://api.jiwoo.so/audio?filename=${select}`} />
    </div>
  );
};

export default AudioController;
