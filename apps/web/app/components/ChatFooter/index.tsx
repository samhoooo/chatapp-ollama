"use client";

import { Grid, Fab, TextField } from "../../utils/mui";
import SendIcon from "@mui/icons-material/Send";

const ChatFooter = () => {
  return (
    <Grid container className="message-box">
      <Grid item xs={11}>
        <TextField
          id="outlined-basic-email"
          label="Message"
          fullWidth
          multiline
          rows={2}
        />
      </Grid>
      <Grid item xs={1} direction="row" alignItems="center" justify="flex-end">
        <Fab color="primary" aria-label="add" size="small">
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default ChatFooter;
