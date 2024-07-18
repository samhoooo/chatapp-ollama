import { Avatar } from "../../utils/mui";
import styles from "./ChatMessage.module.css";

type Props = {
  side?: "ai" | "human";
  avatar?: string;
  message: { id: string; text: string };
};

const ChatMessage = (props: Props) => {
  const { side = "ai", avatar, message } = props;
  return (
    <div
      className={side === "ai" ? styles.aiChatMessage : styles.humanChatMessage}
    >
      {avatar && side === "ai" && <Avatar src={avatar} />}
      <div className={styles.messageText} key={message.id}>
        <div>{message.text}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
