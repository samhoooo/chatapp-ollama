import { Avatar } from "../../utils/mui";
import "./Typing.module.css";

type Props = {
  avatar: string;
};

const Typing = (props: Props) => {
  const { avatar } = props;

  return (
    <div>
      <div>
        <Avatar src={avatar} />
      </div>
      <div className="typing">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div>
    </div>
  );
};

export default Typing;
