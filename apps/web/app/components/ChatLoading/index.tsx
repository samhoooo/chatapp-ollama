import React from "react";
import { Avatar, LinearProgress } from "../../utils/mui";
import styles from "./ChatLoading.module.css";

type Props = {
  avatar?: string;
};

const ChatLoading = (props: Props) => {
  const { avatar } = props;
  return (
    <div className={styles.chatLoading} role="row">
      {avatar && <Avatar src={avatar} />}
      <div className={styles.loadingBody}>
        <LinearProgress />
      </div>
    </div>
  );
};

export default ChatLoading;
