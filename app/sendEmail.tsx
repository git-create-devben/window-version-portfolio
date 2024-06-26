"use server";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/components/contact-form-email";
import { validateString } from "@/lib/utils";
import { notifications } from "@mantine/notifications";
import { useToast } from "@/components/ui/use-toast"

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender Email",
      // console.log('error sender Email'),
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "benlad636@gmail.com",
      subject: "Message from contact from",
      reply_to: senderEmail as any,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return {
      success: "Message sent successfully! Thanks",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: "Failed to send email. Please try again later.",
    };
  }
};



