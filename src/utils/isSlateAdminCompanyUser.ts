import { CUSTOMER_SEGMENT } from "../constants";

const isSlateAdminCompanyUser = (user: any) => {
  if (!user) return false;
  return user.company?.customerSegment.code === CUSTOMER_SEGMENT.SLATE_ADMIN;
};

export default isSlateAdminCompanyUser;
