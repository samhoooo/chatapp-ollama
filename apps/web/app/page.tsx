import Chatroom from "./components/Chatroom";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.chatroom}>
      <Chatroom />
    </div>
  );
}
