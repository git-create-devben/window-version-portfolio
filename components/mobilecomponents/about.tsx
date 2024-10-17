import { Tooltip } from "@mantine/core";
import {
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandFirebase,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandVscode,
  IconBrandGit,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandChrome,
} from "@tabler/icons-react";
import Contact from "../contatct";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <main className="space-y-4 p-4">
      <div>
        <h1 className="text-center text-3xl font-extrabold text-gray-500">
          About me(DevBen)
        </h1>
        <article className="text-gray-200 mt-4">
          Hi ✌️, I&apos;m Benjamin popularly Know as devben am a frontend
          developer passionate about shaping the future of the web, one pixel at
          a time With 3+ years of experience under my belt, I hail from Nigeria.
          While coding is my bread and butter, I also find joy in cooking up
          delicious meals and honing my skills on the football field or table
          tennis court. Music is my constant companion as I work on crafting
          seamless digital experiences. While I&apos;m more of an introvert, I
          do have one friend which is YOU.
        </article>
      </div>
      <div className="mt-5">
        <h1 className="text-center text-3xl font-extrabold text-gray-500">
          My stacks are:
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl text-gray-500">Lang:</h2>
            <ul className="flex flex-wrap gap-2 text-gray-100">
              <li>
                <Tooltip label="CSS3">
                  <IconBrandCss3 stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="HTML5">
                  <IconBrandHtml5 stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="JavaScript">
                  <IconBrandJavascript stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="TypeScript">
                  <IconBrandTypescript stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="ReactJS">
                  <IconBrandReact stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="NextJS">
                  <IconBrandNextjs stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="TailwindCSS">
                  <IconBrandTailwind stroke={2} className="text-white" />
                </Tooltip>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <h2 className="text-2xl text-gray-500">Tools:</h2>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Tooltip label="Git">
                  <IconBrandGit stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="Github">
                  <IconBrandGithub stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="VSCODE">
                  <IconBrandVscode stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="StackOverflow">
                  <IconBrandStackoverflow stroke={2} className="text-white" />
                </Tooltip>
              </li>
              <li>
                <Tooltip label="Chrome">
                  <IconBrandChrome stroke={2} className="text-white" />
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
        <Contact />
        <div className="mt-6">
        <Link href="https://www.buymeacoffee.com/benlad636v" className="mt-6"> <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" width="100"  alt="benlad636v"/></Link>

        </div>

      </div>
    </main>
  );
}
