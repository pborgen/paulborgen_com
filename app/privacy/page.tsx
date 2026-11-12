import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage>
      <h1 className="text-4xl font-bold tracking-tighter">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: November 12, 2026</p>
      <p>
        This Privacy Policy describes how Paul Borgen (&quot;we&quot;,
        &quot;us&quot;) collects and uses information in connection with the
        Paul Borgen SMS program, which sends personal daily learning reminders
        and job-search updates by text message.
      </p>
      <h2 className="text-2xl font-bold tracking-tight pt-4">
        Information we collect
      </h2>
      <p>
        We collect only the mobile phone number you provide when you opt in to
        receive text messages, and records of the messages sent to that number.
      </p>
      <h2 className="text-2xl font-bold tracking-tight pt-4">
        How we use information
      </h2>
      <p>
        Your phone number is used solely to send the text messages you opted in
        to receive and to honor opt-out and help requests. Message delivery is
        handled by our SMS provider, Twilio, only for the purpose of delivering
        these messages.
      </p>
      <h2 className="text-2xl font-bold tracking-tight pt-4">SMS data</h2>
      <p>
        We do not sell or share your SMS opt-in data or personal information
        with third parties for marketing purposes.
      </p>
      <h2 className="text-2xl font-bold tracking-tight pt-4">Opting out</h2>
      <p>
        You can stop messages at any time by replying STOP. Reply HELP for
        help.
      </p>
      <h2 className="text-2xl font-bold tracking-tight pt-4">Contact</h2>
      <p>Paul Borgen, Wethersfield, CT. Email: pborgennc@gmail.com</p>
    </LegalPage>
  );
}
