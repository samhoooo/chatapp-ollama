import { useContext } from "react";
import { ChatContext, Role } from "../context/chat";

type apiResponse = {
  status: string;
  message: string;
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatContextProvider");
  }

  const { messages, setMessage } = context;

  const sendMessage = async (message: string) => {
    setMessage(message, Role.USER);
    // send message to the server
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data: apiResponse = await response.json();
    if (data.status === "success") {
      setMessage(data.message, Role.AI);
    }
  };

  return { messages, sendMessage };
};
