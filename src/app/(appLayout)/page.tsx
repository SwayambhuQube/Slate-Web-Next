import { EmptyPage } from "@/components/common/emptyPage/EmptyPage";
import React from "react";

interface Props {
  // Define the props for your component here
}

const MyComponent: React.FC<Props> = (props) => {
  // Implement your component logic here
  return <EmptyPage heading={"adminAppHeading"} message={"noRolesHeading"} />;
};

export default MyComponent;
