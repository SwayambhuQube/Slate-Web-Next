import { compact } from "lodash";
import { SCOPES, SCOPE_ACTIONS } from "../constants";
import { SCOPES_TYPES, SCOPE_ACTIONS_TYPES } from "@/constants/scopes";

/**
 * Checks if the user has authorization for a specific scope and scope action.
 *
 * @param user - The user object containing the user's scopes.
 * @param scope - The scope to check authorization for.
 * @param scopeAction - The scope action to check authorization for.
 * @returns A boolean indicating whether the user has authorization for the given scope and scope action.
 */
const checkScopeAuth = (
  user: any,
  scope?: SCOPES_TYPES | undefined,
  scopeAction?: SCOPE_ACTIONS_TYPES
): boolean => {
  // Invalid case if no user or scope passed.
  // Likely a bug, return unauthorised just to be safe and not show/allow something the user might not have access to.
  if (!user || !user.scopes || !scope) {
    return false;
  }

  // Skip scope check if it is an internal or UI only item. For instance, it can be used for the Logout NavMenu Item.
  // NOTE: Should use only if there's literally no other scope used.
  const skipScopeCheck = scope === SCOPES.__SELF__;
  if (skipScopeCheck) {
    return true;
  }

  // Check if it is a valid scope, and if user has access to both READ and the given scope
  const scopeActions = compact([SCOPE_ACTIONS.READ, scopeAction]);
  return scopeActions.every(
    (action) => user.scopes[scope] && user.scopes[scope].includes(action)
  );
};

export default checkScopeAuth;
