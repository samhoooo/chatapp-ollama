"use client";

import ChatMessage from "../ChatMessage";
import ChatLoading from "../ChatLoading";
import { useChat } from "../../hooks";

import styles from "./Conversation.module.css";

const Conversation = () => {
  const { messages, isLoading } = useChat();

  return (
    <div className={styles.conversation} role="table">
      <div role="rowgroup">
        {messages.map((message) => {
          if (message.from === "user") {
            return <ChatMessage side={"user"} message={message.text} />;
          }
          return (
            <ChatMessage
              side={"ai"}
              avatar={"ollama.png"}
              message={message.text}
            />
          );
        })}
        {isLoading && <ChatLoading avatar={"ollama.png"} />}
      </div>
    </div>
  );
};

export default Conversation;
