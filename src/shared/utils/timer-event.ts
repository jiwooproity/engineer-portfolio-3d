const timerEvents = (event: () => void, second: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(event()), second * 1000));
};

export default timerEvents;
