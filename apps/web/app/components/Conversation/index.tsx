import ChatMessage from "../ChatMessage";

const Conversation = () => {
  return (
    <div className="chats">
      <div>
        <ChatMessage
          avatar={"robot.png"}
          side={"left"}
          message={{ id: "1", text: "Hello! How can I help you?" }}
          key={"1"}
        />
      </div>
    </div>
  );
};

export default Conversation;
