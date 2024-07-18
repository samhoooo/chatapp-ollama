import { createContext, useMemo, useState, useCallback } from "react";
import { AI_INITIAL_MESSAGE } from "../constant";

type ChatContextValues = {
  messages: {
    from: string;
    text: string;
  }[];
  // eslint-disable-next-line no-unused-vars
  setMessage: (message: string) => void;
};

export const ChatContext = createContext<ChatContextValues | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ChatContextProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<ChatContextValues["messages"]>([
    {
      from: "ai",
      text: AI_INITIAL_MESSAGE,
    },
  ]);

  const setMessage = useCallback((message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: "user", text: message },
    ]);
  }, []);

  const value: ChatContextValues = useMemo(
    () => ({
      messages,
      setMessage,
    }),
    [messages, setMessage]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
