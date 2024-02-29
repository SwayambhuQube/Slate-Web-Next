import { type } from "os";

export const MessageType = {
  "": "",
  adminAppHeading: "Admin App",
  adminAppMessage: "You need to login to the user web app!",
  userAppHeading: "User App",
  userAppMessage: "You need to login to the admin web app!",
  waitingApprovalHeading: "Waiting Approval",
  waitingApprovalMessage:
    "Your company is awaiting approval from a Qube Slate Admin",
  notAllowedHeading: "Not Allowed",
  notAllowedMessage: "You shall not pass!",
  unauthorizedHeading: "Uh oh!",
  unauthorizedMessage: "You should not have been here!",
  notFoundHeading: "Uh oh!",
  notFoundMessage: "This page does not exist",
  noRolesHeading: "Uh oh!",
  noRolesMessage:
    "Your roles are removed from this company. Please contact your company admin for more info",
  unexpectedError:
    "There seems to be an unexpected error. Please reload the page, or report feedback if this keeps happening",
  campaignNotEditableHeading: "Campaign Not Editable",
  campaignNotEditableMessage: "This campaign cannot be edited anymore",
  targetGroupNotEditableHeading: "Target Group Not Editable",
  targetGroupNotEditableMessage: "This target group cannot be edited anymore",
  mediaNotEditableHeading: "Media Not Editable",
  mediaNotEditableMessage: "This media cannot be edited anymore",
  noSettingsFound: "No Settings Found",
} as const;
export type Message = keyof typeof MessageType;
