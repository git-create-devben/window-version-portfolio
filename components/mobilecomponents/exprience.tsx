import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";
import { AlertTitle, AlertDescription, Alert } from "../ui/alert";
export default function Experience() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <Alert className="mt-2 rounded-none bg-gray-400" variant="default">
        <IconHeart className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription className="text-sm text-black space-x-2">
          You can view more on my{" "}
          <a
            href="../../devben.pdf"
            download
            className="text-blue-900 underline mr-2"
          >
            Resume
          </a>

          and 

          <Link
            href="https://www.linkedin.com/in/benlad/"
            className="text-blue-900 underline"
          >
            LinkedIn
          </Link>
        </AlertDescription>
      </Alert>
      <div className="p-4">
        <h1 className="text-2xl text-gray-300 underline-offset-4">
          <Link href="https://arravo.co"  className=" border-b-green-400 border-b-[1px]">Arravo</Link>
        </h1>
        <p className="text-gray-400">Front-end Developer</p>
        <span className="text-gray-500">Logos, Nigeria</span>
        <ul className="mt-2 flex list-disc flex-col text-gray-100">
          <li>Developing new user-facing features</li>
          <li>Determining the structure and design of web pages</li>
          <li>Building reusable code</li>
          <li>Optimizing page loading times</li>
          <li>
            Using markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintaining and improving websites</li>
          <li>Assessing UX and UI designs for technical feasibility</li>
          <li>
            Collaborating with product team members to implement new feature
            developments
          </li>
        </ul>
      </div>
      <div className="p-8">
        <h1 className="text-2xl capitalize text-gray-300 underline-offset-4">         
          <Link href="https://www.healthgotechnologies.com/" className=" border-b-green-400 border-b-[1px]"> HealthGo ICT Firm</Link>
        </h1>
        <p className="text-gray-400">Front-end Engineer</p>
        <span className="text-gray-500">Lagos, Nigeria</span>
        <ul className="mt-2 flex list-disc flex-col text-gray-100">
          <li>
            Supporting the entire application lifecycle (concept, design, test,
            release, and support)
          </li>
          <li>
            Writing clean code to create fully functional web applications
          </li>
          <li>Gathering specific requirements and suggesting solutions</li>
          <li>Troubleshooting and debugging to optimize performance</li>
          <li>
            Using markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintaining and improving websites</li>
          <li>Assessing UX and UI designs for technical feasibility</li>
          <li>
            Collaborating with product team members to implement new feature
            developments
          </li>
        </ul>
      </div>
    </main>
  );
}
