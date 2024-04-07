// import Image from "next/image";
import { Avatar, Text, ButtonGroup } from "@mantine/core";
import { Button } from "@/components/ui/button";
import devbenpics from "@/public/devben.png";

import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Instagram from "@/lotties/instagram.json";
import Github from "@/lotties/Github.json";
import Bot from "@/lotties/robot.json";
import Resume from "@/lotties/resume.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Project from "./project";
import { Modal, RemoveScroll, Drawer, Alert } from "@mantine/core";
import { TracingBeam } from "../ui/tracing-beam";
import { useDisclosure } from "@mantine/hooks";
import Experience from "./exprience";
import About from "./about";
import Chat from "@/components/chat";

export default function MobileHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <main className="flex h-screen w-full flex-col gap-2 bg-black  pt-10">
      {/* Header section */}
      <section className="flex flex-col gap-4 px-4">
        <div className="flex justify-between">
          <h1 className="flex flex-col text-2xl font-semibold text-white">
            Devben <span className="text-sm font-light">devben.tech</span>
          </h1>
          <Image
            src={devbenpics}
            alt="devben profile pics"
            className="w-16 rounded-full"
          />
        </div>
        <Text c="white">
          Front-end developer 💡 building the future of the web 🌐, one pixel at
          a time
        </Text>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-[#ccc]">
            <Link href="https://www.instagram.com/devben.tech/">
              <IconBrandInstagram stroke={2} />
            </Link>
          </span>
          <Link  href="https://github.com/git-create-devben">
            {/* <IconBrandInstagram stroke={2} /> */}
            <Player
              // autoplay
              // loop
              src={Github}
              style={{ height: "30px", width: "60px" }}
            ></Player>
            {/* <Player
              autoplay
              loop
              src={Instagram}
              style={{ height: "30px", width: "60px" }}
            ></Player> */}
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <Button className="border-[1px] border-[#ccc]  bg-transparent ">
            <a
              href="../../devben.pdf"
              className="flex items-center justify-between"
              download
            >
              <Player
                // autoplay
                // loop
                src={Resume}
                style={{ height: "30px", width: "30px" }}
              ></Player>
              Resume
            </a>
          </Button>
          <Button
            onClick={open}
            className="border-[1px] border-[#ccc]  bg-transparent hover:bg-white hover:text-black"
          >
            <Player
              autoplay
              loop
              src={Bot}
              style={{ height: "30px", width: "30px", color: "white" }}
            ></Player>
            Ask me something
          </Button>
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
        </div>
      </section>

      <section className="h-screen bg-black">
        <Tabs defaultValue="Project" className="">
          <TabsList className=" mt-4 flex items-center justify-between bg-transparent">
            <TabsTrigger value="Project">Project</TabsTrigger>
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <hr className="-mt-1" />
          <TracingBeam className="px-6">
            <TabsContent value="Project">
              <Project />
            </TabsContent>
            <TabsContent value="Experience">
              <Experience />
            </TabsContent>
            <TabsContent value="about">
              <About />
            </TabsContent>
          </TracingBeam>
        </Tabs>
      </section>
    </main>
  );
}
