import { EmptyPage } from "@/components/common/emptyPage/EmptyPage";
import { Message } from "@/constants/emptyPage/messagetypes";
import React from "react";

const MyComponent = ({
  searchParams,
}: {
  searchParams: Record<Message, Message>;
}) => {
  const key = Object.keys(searchParams)[0] as Message;
  const message = searchParams[key];
  return <EmptyPage heading={key} message={message} />;
};

export default MyComponent;
