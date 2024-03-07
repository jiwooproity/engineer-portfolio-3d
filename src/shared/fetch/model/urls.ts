const MODEL_URLS = {
  DOWNLOAD: (uid: string) => {
    return `/v3/models/${uid}/download`;
  },
};

export default MODEL_URLS;
