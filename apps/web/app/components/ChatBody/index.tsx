"use client";

import { ChatContextProvider } from "../../context/chat";

type Props = {
  children: React.ReactNode;
};

const ChatBody = ({ children }: Props) => {
  return <ChatContextProvider>{children}</ChatContextProvider>;
};

export default ChatBody;
