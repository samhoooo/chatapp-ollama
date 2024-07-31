/* eslint-disable no-unused-vars */
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
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const ChatContext = createContext<ChatContextValues | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ChatContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
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
      const messages = JSON.parse(JSON.stringify(prev));
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage || lastMessage.from === Role.USER)
        return [...prev, { from: Role.AI, text: chunk }];

      lastMessage.text += chunk;
      return [...messages.slice(0, -1), lastMessage];
    });
  };

  const value: ChatContextValues = useMemo(
    () => ({
      messages,
      setMessage,
      streamMessage,
      isLoading,
      setIsLoading,
    }),
    [messages, setMessage, streamMessage, isLoading, setIsLoading]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
