import { useContext } from "react";
import { ChatContext } from "../context/chat";

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatContextProvider");
  }

  const { messages, setMessage } = context;

  const sendMessage = async (message: string) => {
    // TODO: send message to the server
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    console.log({ response });
    setMessage(message);
  };

  return { messages, sendMessage };
};
