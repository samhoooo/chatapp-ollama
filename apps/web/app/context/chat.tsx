import { createContext, useMemo, useState, useCallback } from "react";
import { AI_INITIAL_MESSAGE } from "../constant";

export enum Role {
  USER = "user",
  AI = "ai",
}

type ChatContextValues = {
  messages: {
    from: string;
    text: string;
  }[];
  setMessage: (message: string, role?: Role) => void;
  streamMessage: (chunk: string) => void;
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

  const setMessage = useCallback((message: string, role = Role.USER) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: role, text: message },
    ]);
  }, []);

  const streamMessage = (chunk: string) => {
    setMessages((prev) => {
      const messages = [...prev];
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage || lastMessage.from === Role.USER)
        return [...messages, { from: Role.AI, text: chunk }];

      lastMessage.text += chunk;
      messages.pop();
      return [...messages, lastMessage];
    });
  };

  const value: ChatContextValues = useMemo(
    () => ({
      messages,
      setMessage,
      streamMessage,
    }),
    [messages, setMessage, streamMessage]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
