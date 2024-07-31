import Markdown from "react-markdown";
import { Avatar } from "../../utils/mui";
import styles from "./ChatMessage.module.css";

type Props = {
  side?: "ai" | "user";
  avatar?: string;
  message: string;
};

const ChatMessage = (props: Props) => {
  const { side = "ai", avatar, message } = props;
  return (
    <div
      className={side === "ai" ? styles.aiChatMessage : styles.humanChatMessage}
      role="row"
    >
      {avatar && <Avatar src={avatar} />}
      <div className={styles.messageText}>
        <Markdown>{message}</Markdown>
      </div>
    </div>
  );
};

export default ChatMessage;
