import {
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandFirebase,
  IconBrandReact,
  IconBrandJavascript
} from "@tabler/icons-react";
import Link from "next/link";
import { Tooltip } from "@mantine/core";
import { Player } from "@lottiefiles/react-lottie-player";
import Github from "@/lotties/Github.json";

function Project() {
  return (
    <div className="space-y-6 p-6 bg-[#000]">
             <span className="flex items-center gap-1 text-[#ccc]">
            <Player
              autoplay
              loop
              src={Github}
              style={{ height: "30px", width: "60px" }}
            ></Player>
            <Link
              href="https://github.com/git-create-devben"
              className="hover:underline"
            >
              View More on Github
            </Link>
          </span>
      {Projects.map((item, index) => (
        <div key={`content-${index}`} className="flex gap-4 ">
         
          <div className="flex h-24 w-44 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
          {item.image}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-white">
              <Link href={item.link}>{item.title}</Link>
            </h1>
            {item.description}
            {item.language}
          </div>
        </div>
      ))}

    </div>
  );
}

const Projects = [
  {
    title: "CareMore",
    link: "https://loca-fawn.vercel.app/chat",
    image: (
      <div className="flex h-24 w-44 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
        C
      </div>
    ),
    description: (
      <p className="text-xs text-slate-300 ">
       CareMore is a modern skin care website 
       </p>
    ),
    language: (
      <div className="flex gap-2">
      <Tooltip label="TypeScript">
         <IconBrandJavascript stroke={2} className="text-white" />
       </Tooltip>
       <Tooltip label="TypeScript">
          <IconBrandTypescript stroke={2} className="text-white" />
        </Tooltip>
       <Tooltip label="NextJs">
         <IconBrandNextjs stroke={2} className="text-white" />
       </Tooltip>
       <Tooltip label="TailwindCss">
         <IconBrandTailwind stroke={2} className="text-white" />
       </Tooltip>
       <IconBrandFirebase stroke={2} className="text-white" />
     </div>
    ),
  },
  {
    title: "Loca",
    link: "https://loca-fawn.vercel.app/chat",
    image: (
      <div className="flex h-24 w-44 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
        L
      </div>
    ),
    description: (
      <p className="text-xs text-slate-300 ">
       Loca is a localized AI service finder
       </p>
    ),
    language: (
      <div className="flex gap-2">
      <Tooltip label="TypeScript">
         <IconBrandJavascript stroke={2} className="text-white" />
       </Tooltip>
       <Tooltip label="TypeScript">
          <IconBrandTypescript stroke={2} className="text-white" />
        </Tooltip>
       <Tooltip label="NextJs">
         <IconBrandNextjs stroke={2} className="text-white" />
       </Tooltip>
       <Tooltip label="TailwindCss">
         <IconBrandTailwind stroke={2} className="text-white" />
       </Tooltip>
       <IconBrandFirebase stroke={2} className="text-white" />
     </div>
    ),
  },
  {
    title: "AceBot",
    link: "https://github.com/git-create-devben/acebot",
    image: (
      <div className="flex h-24 w-44 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
        A
      </div>
    ),
    description: (
      <p className="text-xs text-slate-300 ">
       Acebot is a telegram bot that welcome new users
       </p>
    ),
    language: (
      <div className="flex gap-2">
        <Tooltip label="TypeScript">
          <IconBrandJavascript stroke={2} className="text-white" />
        </Tooltip>   
      </div>
    ),
  },
  {
    title: "DevIdeal",
    link: "https://devideal.vercel.app/",
    image: (
      <div className="flex h-24 w-44 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
        D
      </div>
    ),
    description: (
      <p className="text-xs text-slate-300 ">
        DevIdeal is a collection of resources that makes learning more easier
      </p>
    ),
    language: (
      <div className="flex gap-2">
       <Tooltip label="TypeScript">
          <IconBrandJavascript stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="NextJs">
          <IconBrandNextjs stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="TailwindCss">
          <IconBrandTailwind stroke={2} className="text-white" />
        </Tooltip>
        <IconBrandFirebase stroke={2} className="text-white" />
      </div>
    ),
  },
  {
    title: "Wallpy",
    link: "https://wallp.vercel.app/",
    image: (
      <div className="flex h-24 w-56 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
        W
      </div>
    ),
    description: (
      <p className="text-xs text-slate-300 ">
        Wallpy is a developers portfolio collection 
      </p>
    ),
    language: (
      <div className="flex gap-2">
        <Tooltip label="TypeScript">
          <IconBrandTypescript stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="NextJs">
          <IconBrandNextjs stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="TailwindCss">
          <IconBrandTailwind stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="FireBase">
          <IconBrandFirebase stroke={2} className="text-white" />
        </Tooltip>
      </div>
    ),
  },
  {
    title: "Photographer website",
    link: "https://christina-eta.vercel.app/",
    image: (
      <div className="flex h-24 w-44 items-center justify-center rounded-sm bg-slate-400 text-center text-3xl font-extrabold">
        PW
      </div>
    ),
    description: (
      <p className="text-xs text-slate-300 ">
        This is a highly modern photographer website showcasing their works etc
       </p>
    ),
    language: (
      <div className="flex gap-2">
        <Tooltip label="TypeScript">
          <IconBrandJavascript stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="NextJs">
          <IconBrandReact stroke={2} className="text-white" />
        </Tooltip>
        <Tooltip label="TailwindCss">
          <IconBrandTailwind stroke={2} className="text-white" />
        </Tooltip>
       
      </div>
    ),
  },
]

export default Project;