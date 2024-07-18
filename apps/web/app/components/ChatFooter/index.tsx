"use client";

import { Fab, TextField } from "../../utils/mui";
import SendIcon from "@mui/icons-material/Send";

import styles from "./ChatFooter.module.css";

const ChatFooter = () => {
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
        />
      </div>

      <div className={styles.sendButton}>
        <Fab color="primary" aria-label="add" size="small">
          <SendIcon />
        </Fab>
      </div>
    </div>
  );
};

export default ChatFooter;
