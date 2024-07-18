import ChatHeader from "../ChatHeader";
import ChatFooter from "../ChatFooter";
import Conversation from "../Conversation";
import ChatBody from "../ChatBody";

import styles from "./Chatroom.module.css";

const Chatroom = () => {
  return (
    <div className={styles.chatroom}>
      <ChatHeader
        avatar={{
          alt: "User Avatar",
          src: "user.png",
        }}
        title="SamLLM"
      />
      <ChatBody>
        <Conversation />
        <ChatFooter />
      </ChatBody>
    </div>
  );
};

export default Chatroom;
