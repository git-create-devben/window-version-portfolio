import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { IconHeart } from "@tabler/icons-react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useChat } from "ai/react";
import { CountDown } from "./countdown";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Bot from "@/lotties/robot.json";
function Chat() {
  // const icon = <IconHeart />;

  // const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex w-full flex-col gap-6">
      <Alert className="rounded-none">
        <IconHeart className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription className="text-xs">
          You can now use the AI, but still can&apos;t access question base on
          my data but this show my ability to use AI in a website. Countdown to
          be able to ask questions base  on my data will be live in <CountDown />
        </AlertDescription>
      </Alert>
      <Card
        // shadow="sm"
        padding=""
        // radius="md"
        // withBorder
        className="w-full "
      >
        <div className=" bg-[#111] text-gray-300 ">
          {messages.map((m) => (
            <div key={m.id} className="flex gap-1 space-y-8 gap-y-10">
              {m.role === "user" ? (
                <span className='flex gap-2 space-x-2'>
                  👤:
                </span>
              ) : (
                <p className="flex gap-2">
                  <Player
                    autoplay
                    loop
                    src={Bot}
                    style={{ height: "30px", width: "30px", color: "" }}
                  />
                </p>
              )}
              {m.content}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="mb-2- fixed bottom-0 w-96">
            <input
              className="relative w-full rounded-sm border-[1px] border-gray-300 bg-[#111] p-2 text-gray-300 shadow-xl"
              value={input}
              placeholder="Ask me anything....."
              onChange={handleInputChange}
            />

            <button type="submit" className="absolute -ml-12 mt-2 text-white">
              Send
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export const AI = () => {
  return (
    <Player
      autoplay
      loop
      src={Bot}
      style={{ height: "30px", width: "30px", color: "white" }}
    ></Player>
  );
};

export default Chat;
