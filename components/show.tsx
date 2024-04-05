// "use client";
import { SiWindows11 } from "react-icons/si";
import { IconBriefcase, IconHeart, IconId } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, RemoveScroll, Drawer, Alert } from "@mantine/core";
import Chat from "./chat";
import Image from "next/image";
import copilot from "@/public/copilot.svg";
import Project from "./mobilecomponents/project";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import Github from "@/lotties/Github.json";
import Experience from "./mobilecomponents/exprience";
import { CountDown } from "./countdown";
import { AlertTitle, AlertDescription } from "./ui/alert";
import About from "./mobilecomponents/about";
export const Show = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-1">
      <div className="absolute m-auto w-[100%] rounded-lg bg-black">
        <Drawer
          opened={opened}
          onClose={close}
          title="Projects"
          className=""
          position="bottom"
          styles={{
            content: {
              position: "absolute",
              display: "block",
              margin: "auto",
              width: "50%",
              height: "40rem",
              maxWidth: "600px",
              left: "40rem",
              bottom: 60,
              borderRadius: "10px",
              background: "#000",
            },
          }}
        >
          {/* <Chat/> */}
          <Project />
        </Drawer>
      </div>
      <a href="https://www.buymeacoffee.com/benlad636v"> <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" width="100" alt="benlad636v" /></a>
      <div className="flex flex-1 items-center justify-center">
        <Button onClick={open} variant="transparent">
          <SiWindows11 size={30} className="cursor-pointer text-[#1c99ec]" />
        </Button>
        <Experiences />
        <AboutMe />
      </div>

      <Copilot />
    </div>
  );
};

export const Copilot = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      {/* <div className="absolute m-auto w-[100%] rounded-lg bg-black"> */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Portfolio chatbot"
        className="p-0"
        position="right"
        styles={{
          content: {
            // borderRadius: "10px",
            background: "#111",
          },
        }}
      >
        <Chat />
        {/* <Project /> */}
      </Drawer>
      {/* </div> */}
      <Button onClick={open} variant="transparent" className="flex-2 flex">
        <Image src={copilot} alt="copilot_icon" />
      </Button>
    </>
  );
};

export const Experiences = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      {/* <div className="absolute m-auto w-[100%] rounded-lg bg-black"> */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Experience"
        className="p-0"
        position="top"
        styles={{
          content: {
            position: "absolute",
            display: "block",
            margin: "auto",
            width: "50%",
            height: "40rem",
            maxWidth: "600px",
            left: "40rem",
            bottom: 60,
            borderRadius: "10px",
            background: "#000",
            // padding: '20px',
          },
        }}
      >
  
        <Experience />
      </Drawer>
      {/* </div> */}
      <Button onClick={open} variant="transparent" className="flex-2 flex">
        <IconBriefcase stroke={2} size={38} className="cursor-pointer  " />
      </Button>
    </>
  );
};

export const AboutMe = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="AboutMe (devben)"
        className="p-0"
        position="right"
        styles={{
          content: {
            // borderRadius: "10px",
            background: "#111",
          },
        }}
      >
        {/* <Project /> */}
        <About />
      </Drawer>
      {/* </div> */}
      <Button onClick={open} variant="transparent" className="flex-2 flex">
        <IconId stroke={2} size={38} className="cursor-pointer  " />
      </Button>
    </>
  );
};
