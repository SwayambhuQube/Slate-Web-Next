"use client";

import { CUSTOMER_SEGMENT } from "@/constants";
import { SCOPES_TYPES, SCOPE_ACTIONS_TYPES } from "@/constants/scopes";
import { useSlateSelector } from "@/store/hooks";
import checkScopeAuth from "@/utils/checkScopeAuth";
import { EmptyPage } from "../common/emptyPage/EmptyPage";

export default function ProtectedRoute({
  children,
  scope,
  scopeAction,
}: //   adminComponent,
//   userComponent,
{
  children: React.ReactNode;
  scope?: SCOPES_TYPES;
  scopeAction?: SCOPE_ACTIONS_TYPES;
  //   adminComponent?: React.ReactNode;
  //   userComponent?: React.ReactNode;
}) {
  const user = useSlateSelector((state) => state.user.value);
  //   let adminOrUserComponent;
  const isSlateAdminCompanyUser =
    user?.company?.customerSegment.code === CUSTOMER_SEGMENT.SLATE_ADMIN;
  // Check if the user has access to the route based on the scope and scope action
  // NOTE: Default scopeAction is READ in the check util, so can treat scopeAction as optional prop if only need to check READ
  const isAllowedRoute = checkScopeAuth(user, scope, scopeAction);
  if (isAllowedRoute) {
    // To Switch between Separate Admin & User components
    // if (adminComponent && userComponent) {
    //   adminOrUserComponent = isSlateAdminCompanyUser
    //     ? adminComponent
    //     : userComponent;
    // }

    //   // Check if current route has params. Can be undefined since params could be marked as optional.
    //   const hasParams = compact(values(params)).length > 0;

    // Check if we need to do further checking based on if the current route has param based checks,
    // and there are non empty param values in the current route
    // This is done to support partial scope checking for a page.
    // For instance, a user can have READ access to a scope, but not WRITE.
    // So we can allow access to the user if it is /route but not when it is /route/:actionParam

    return <>{children}</>;
  } else {
    return (
      <EmptyPage heading="notAllowedHeading" message="notAllowedMessage" />
    );
  }
}
