import { useContext } from "react";
import { ChatContext } from "../context/chat";

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatContextProvider");
  }

  const { messages, setMessage } = context;

  const sendMessage = (message: string) => {
    // TODO: send message to the server
    setMessage(message);
  };

  return { messages, sendMessage };
};
