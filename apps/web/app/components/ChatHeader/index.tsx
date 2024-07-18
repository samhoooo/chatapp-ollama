import { Avatar } from "../../utils/mui";

import styles from "./ChatHeader.module.css";

type Props = {
  avatar: {
    alt: string;
    src: string;
  };
  title: string;
};

const ChatHeader = ({ avatar, title }: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <Avatar alt={avatar.alt} src={avatar.src} />
      </div>
      <div className={styles.title}>
        <b>{title}</b>
      </div>
    </div>
  );
};

export default ChatHeader;
