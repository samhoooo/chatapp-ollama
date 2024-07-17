import { Container, Avatar, Grid } from "../../utils/mui";

type Props = {
  avatar: {
    alt: string;
    src: string;
  };
  title: string;
};

const ChatHeader = ({ avatar, title }: Props) => {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Avatar alt={avatar.alt} src={avatar.src} />
        </Grid>
        <Grid item xs={10}>
          <b>{title}</b>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatHeader;
