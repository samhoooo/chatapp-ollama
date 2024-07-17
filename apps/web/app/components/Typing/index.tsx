import { Grid, Avatar } from "../../utils/mui";
import "./Typing.module.css";

type Props = {
  avatar: string;
};

const Typing = (props: Props) => {
  const { avatar } = props;

  return (
    <Grid container spacing={0} justifyContent={"flex-start"}>
      <Grid item xs={1}>
        <Avatar src={avatar} />
      </Grid>
      <div className="typing">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div>
    </Grid>
  );
};

export default Typing;
