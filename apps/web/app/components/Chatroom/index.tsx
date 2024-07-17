import { Card, CardContent } from "../../utils/mui";
import ChatHeader from "../ChatHeader";
import ChatFooter from "../ChatFooter";
import Conversation from "../Conversation";

import styles from "./Chatroom.module.css";

const Chatroom = () => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.chatCardContent}>
        <ChatHeader
          avatar={{
            alt: "User Avatar",
            src: "user.png",
          }}
          title="SamLLM"
        />
        <Conversation />
        <ChatFooter />
      </CardContent>
    </Card>
  );
};

export default Chatroom;
