// Logo Imports
import SlateUserLogo from "./logos/qs-logo.svg";
import SlateUserLogoSmall from "./logos/qs-logo-small.svg";
import SlateAdminLogo from "./logos/qs-admin-logo.svg";
import SlateAdminLogoSmall from "./logos/qs-admin-logo-small.svg";
import MoviebuffLogo from "./logos/moviebuff_tm.png";
import Helplogo from "./help.svg";
import QubeLogoSmall from "./logos/qube.svg";

// Placeholders
import EmptyState from "./placeholders/empty-state-illustration.svg";
import LoginBanner from "./placeholders/login-banner.svg";

const isAdminApp = process.env.NEXT_PUBLIC_REACT_APP_IS_ADMIN_APP;

const SlateLogo = isAdminApp ? SlateAdminLogo : SlateUserLogo;
const SlateLogoSmall = isAdminApp ? SlateAdminLogoSmall : SlateUserLogoSmall;
const Help = Helplogo;
export {
  SlateLogo,
  SlateLogoSmall,
  MoviebuffLogo,
  EmptyState,
  LoginBanner,
  Help,
  QubeLogoSmall,
};
