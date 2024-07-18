"use client";

import ChatMessage from "../ChatMessage";
import { useChat } from "../../hooks";

import styles from "./Conversation.module.css";

const Conversation = () => {
  const { messages } = useChat();

  return (
    <div className={styles.conversation}>
      <div>
        {messages.map((message) => {
          if (message.from === "user") {
            return <ChatMessage side={"user"} message={message.text} />;
          }
          return (
            <ChatMessage
              side={"ai"}
              avatar={"robot.png"}
              message={message.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Conversation;
