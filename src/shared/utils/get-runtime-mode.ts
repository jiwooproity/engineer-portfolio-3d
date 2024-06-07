type RuntimeModeReturnType = (dev: string, prod: string) => string;

/**
 *
 * @param dev data to use in development runtime
 * @param prod data to use in production runtime
 * @returns
 */
const getRuntimeMode: RuntimeModeReturnType = (dev, prod) => {
  const isDev = import.meta.env.MODE === "development";
  const data = isDev ? dev : prod;
  return data;
};

export default getRuntimeMode;
