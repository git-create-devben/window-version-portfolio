"use client";
import { TextInput, Textarea } from "@mantine/core";
import { Button } from "./ui/button";
import { sendEmail } from "../app/sendEmail";
import { toast } from "react-hot-toast";
export default function Contact() {
  const ClientAction = async (formData: FormData) => {
    const result = await sendEmail(formData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Thank You I have receive your message");
    }
  };

  return (
    <>
      <form
        action={ClientAction}
        className="mt-6 flex flex-col gap-2 text-gray-300"
      >
        <h1 className="text-center text-2xl text-gray-400">Contact me </h1>
        <TextInput
          withAsterisk
          label="Email"
          name="senderEmail"
          placeholder="your@email.com"
          type="email"
        />

        <Textarea
          label="Message"
          placeholder="Input your message here"
          className=""
          name="message"
        />
        <Button
          type="submit"
          className="bg-gray-300 text-black hover:bg-gray-400"
        >
          Send Message
        </Button>
      </form>
    </>
  );
}
