const envs = {
  dev: {
    API: {
      endpoint:
        "https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/dev",
    },
  },
  prod: {
    API: {
      endpoint:
        "https://opjzr88ro7.execute-api.ca-central-1.amazonaws.com/prod",
    },
  },
};


const config = {
  ...envs[process.env.REACT_APP_STAGE],
};

export default config;
