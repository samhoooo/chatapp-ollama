"use client";

import { Fab, TextField } from "../../utils/mui";
import SendIcon from "@mui/icons-material/Send";

import styles from "./ChatFooter.module.css";
import { useChat } from "../../hooks";
import { useCallback, useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChat();

  const onSubmitHandler = useCallback(() => {
    sendMessage(message);
    setMessage("");
  }, [sendMessage, message]);

  return (
    <div className={styles.footer}>
      <div className={styles.messageInput}>
        <TextField
          id="outlined-basic-email"
          label="Message"
          fullWidth
          multiline
          variant="outlined"
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={styles.sendButton}>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={onSubmitHandler}
        >
          <SendIcon />
        </Fab>
      </div>
    </div>
  );
};

export default ChatFooter;
