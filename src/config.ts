let CORE_BASE_URL = "";
let MOVIEBUFF_BASE_URL = "";
let ROLES_SCOPES_BASE_URL = "";
let SENTRY_DSN = "";
let GA_TRACKING_ID = "";
let QUBE_WIRE_CINEMAS_BASE_URL = "";
let QUBE_WIRE_APP_URL = "";
let QA_CLIENT_ID = "";
let QA_BASE_URL = "";
let QA_PRODUCT_ID = "";
let QA_REDIRECT_URL = "";
let MOVIEBUFF_WEBSITE_URL = "";
let MOCK_SERVER_URL = "";

const setCommonStagingConfig = () => {
  MOVIEBUFF_BASE_URL = "https://api.moviebuff.com/api/v3";
  ROLES_SCOPES_BASE_URL =
    "https://slate-staging-scopes.s3.ap-south-1.amazonaws.com/";
  SENTRY_DSN = "https://9823fb46189742639b60cb8ec6d0c23e@sentry.io/1265933";
  QUBE_WIRE_CINEMAS_BASE_URL = "https://cinemas.jupiter.staging.qubewire.com/";
  QUBE_WIRE_APP_URL = "https://qubewire.com/";
  QA_CLIENT_ID = "7079f5e5754c4471aa01b09e81675335";
  QA_BASE_URL = "https://account.staging.qube.in/";
  QA_PRODUCT_ID = "e742fd40-86c4-4d65-9b62-9db7f75e365f";
  GA_TRACKING_ID = "UA-128062245-2";
  MOVIEBUFF_WEBSITE_URL = "https://testbuff.herokuapp.com/";
  MOCK_SERVER_URL = "https://slate-mock-server.herokuapp.com/api/v1";
};

const env =
  process.env.NEXT_PUBLIC_REACT_APP_ENV || process.env.STORYBOOK_REACT_APP_ENV;

switch (env) {
  case "local":
    setCommonStagingConfig();
    CORE_BASE_URL = "https://api.staging.qubeslate.com/v1/";
    MOCK_SERVER_URL = "http://localhost:4000/api/v1";
    break;
  case "staging":
    setCommonStagingConfig();
    CORE_BASE_URL = "https://api.staging.qubeslate.com/v1/";
    break;
  case "automation":
    setCommonStagingConfig();
    CORE_BASE_URL = "https://api.auto.qubeslate.com/v1/";
    break;
  case "production":
    CORE_BASE_URL = "https://api.qubeslate.com/v1/";
    MOVIEBUFF_BASE_URL = "https://apps.moviebuff.com/api/v2/";
    ROLES_SCOPES_BASE_URL = "https://slate-scopes.s3.ap-south-1.amazonaws.com/";
    SENTRY_DSN = "https://ea24a36df1254446b6f8f11728efaf5d@sentry.io/1259318";
    QUBE_WIRE_CINEMAS_BASE_URL = "https://cinemas.qubewire.com/";
    QUBE_WIRE_APP_URL = "https://qubewire.com/";
    MOVIEBUFF_WEBSITE_URL = "https://www.moviebuff.com";
    break;
  default:
    throw new Error("No value set for NEXT_PUBLIC_REACT_APP_ENV");
}

export {
  CORE_BASE_URL,
  MOVIEBUFF_BASE_URL,
  ROLES_SCOPES_BASE_URL,
  SENTRY_DSN,
  QUBE_WIRE_CINEMAS_BASE_URL,
  QUBE_WIRE_APP_URL,
  QA_CLIENT_ID,
  QA_BASE_URL,
  QA_PRODUCT_ID,
  QA_REDIRECT_URL,
  GA_TRACKING_ID,
  MOVIEBUFF_WEBSITE_URL,
  MOCK_SERVER_URL,
};
