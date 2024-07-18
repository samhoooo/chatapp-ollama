import ChatMessage from "../ChatMessage";

import styles from "./Conversation.module.css";

const Conversation = () => {
  return (
    <div className={styles.conversation}>
      <div>
        <ChatMessage
          avatar={"robot.png"}
          side={"ai"}
          message={{ id: "1", text: "Hello! How can I help you?" }}
          key={"1"}
        />
        <ChatMessage
          side={"human"}
          message={{ id: "1", text: "Hello! How can I help you?" }}
          key={"1"}
        />
      </div>
    </div>
  );
};

export default Conversation;
