import { MouseEvent, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";

type AudioHooksTypes = (
  select: string
) => [
  RefObject<HTMLAudioElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
  boolean,
  string,
  string,
  (e: MouseEvent) => void,
  () => void,
  (e: MouseEvent) => void,
  () => void,
  () => void,
  () => void
];

const useAudio: AudioHooksTypes = (select: string) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const mouseDownRef = useRef(false);
  const mouseMoveRef = useRef(true);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const [current, setCurrent] = useState("00:00");

  const memoCurrent = useMemo(() => current, [current]);

  const calculateTime = ({ time = 0 }: { time: number | undefined }) => {
    const minute = String(Math.floor(time / 60)).padStart(2, "0");
    const second = String(Math.floor(time % 60)).padStart(2, "0");
    return `${minute}:${second}`;
  };

  const updateProgress = useCallback((currentTime: number, duration: number) => {
    const nowProgress = `${(currentTime / duration) * 100}%`;
    progressRef.current?.style.setProperty("width", nowProgress);
    const current = calculateTime({ time: currentTime });
    setCurrent(current);
  }, []);

  const timeUpdate = useCallback(() => {
    if (mouseDownRef.current && mouseMoveRef.current) return;
    const { currentTime, duration } = audioRef.current as HTMLAudioElement;
    updateProgress(currentTime, duration);
  }, [updateProgress]);

  const timeMoved = ({ type, nativeEvent }: MouseEvent) => {
    if (progressBarRef.current && audioRef.current?.duration) {
      const width = progressBarRef.current.clientWidth;
      const ratio = nativeEvent.offsetX / width;

      if (type === "mouseup") {
        audioRef.current.currentTime = ratio * audioRef.current?.duration;
      }

      updateProgress(ratio * audioRef.current?.duration, audioRef.current.duration);
    }
  };

  const mouseDown = () => {
    mouseDownRef.current = true;
    mouseMoveRef.current = true;
  };

  const mouseUp = (e: MouseEvent) => {
    mouseDownRef.current = false;
    mouseMoveRef.current = false;
    timeMoved(e);
  };

  const mouseLeave = () => {
    if (mouseDownRef.current) {
      mouseDownRef.current = false;
    }

    mouseMoveRef.current = false;
  };

  const progressMove = (e: MouseEvent) => {
    if (mouseDownRef.current && mouseMoveRef.current) {
      timeMoved(e);
    }
  };

  const onToggle = () => {
    if (select === "") return;
    const current = audioRef.current as HTMLAudioElement;
    current[playing ? "pause" : "play"]();
    setPlaying((play) => !play);
  };

  const onPlay = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const onPause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const onReset = useCallback(() => {
    onPlay();
    timeUpdate();
  }, [timeUpdate]);

  const onLoadAudio = useCallback(() => {
    const { duration } = audioRef.current as HTMLAudioElement;
    const time = calculateTime({ time: duration });
    setDuration(time);
    onReset();
  }, [onReset]);

  useEffect(() => {
    const { current } = audioRef;

    if (current) {
      current.addEventListener("timeupdate", timeUpdate);
      current.addEventListener("pause", onPause);
    }

    return () => {
      current?.removeEventListener("timeupdate", timeUpdate);
      current?.removeEventListener("pause", onPause);
    };
  }, [timeUpdate]);

  useEffect(() => {
    const { current } = audioRef;

    if (current) {
      current.addEventListener("loadeddata", onLoadAudio);
    }

    return () => {
      current?.removeEventListener("loadeddata", onLoadAudio);
    };
  }, [select, onLoadAudio]);

  return [
    audioRef,
    progressBarRef,
    progressRef,
    playing,
    memoCurrent,
    duration,
    progressMove,
    mouseDown,
    mouseUp,
    mouseLeave,
    onToggle,
    onPlay,
  ];
};

export default useAudio;
