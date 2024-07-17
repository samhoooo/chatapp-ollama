import { Grid, Typography, Avatar } from "../../utils/mui";
import "./ChatMessage.module.css";

type Props = {
  side?: "left" | "right";
  avatar: string;
  message: { id: string; text: string };
};

const ChatMessage = (props: Props) => {
  const { side = "left", avatar, message } = props;
  return (
    <Grid
      container
      spacing={0}
      justifyContent={side === "right" ? "flex-end" : "flex-start"}
    >
      {side === "left" && (
        <Grid item xs={1}>
          <Avatar src={avatar} />
        </Grid>
      )}
      <div key={message.id} className={`${side}Row chat`}>
        <Typography>{message.text}</Typography>
      </div>
      {side === "right" && (
        <Grid item xs={2}>
          <Avatar src={""} />
        </Grid>
      )}
    </Grid>
  );
};

export default ChatMessage;
