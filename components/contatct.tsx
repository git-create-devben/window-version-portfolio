"use client";
import { TextInput, Textarea } from "@mantine/core";
import { Button } from "./ui/button";
import { sendEmail } from "../app/sendEmail";
import { toast } from "react-hot-toast";
import { useState } from "react";
export default function Contact() {
    const [isloading, setLoading] = useState(false)
    const ClientAction = async (formData: FormData) => {
      setLoading(true);
      const result = await sendEmail(formData);
  
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Thank you, we have received your message");
      }
      setLoading(false);
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
      disabled={isloading}
    >
      {isloading ? "Submitting..." : "Submit"}
    </Button>
      </form>
    </>
  );
  }