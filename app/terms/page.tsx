import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions",
  },
};

export default function TermsPage() {
  return (
    <LegalPage>
      <h1 className="text-4xl font-bold tracking-tighter">
        Terms &amp; Conditions
      </h1>
      <p className="text-muted-foreground">Last updated: November 12, 2026</p>
      <p>
        These Terms &amp; Conditions apply to the Paul Borgen SMS program
        operated by Paul Borgen.
      </p>
      <h2 className="text-2xl font-bold tracking-tight pt-4">SMS Terms</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Program description:</strong> The Paul Borgen SMS program
          sends one daily text with recommended articles, videos, and podcasts
          on AI technologies, plus occasional job-search updates, to the
          program owner&apos;s own mobile number.
        </li>
        <li>
          <strong>Message frequency:</strong> About 1 message per day;
          frequency may vary.
        </li>
        <li>
          <strong>Costs:</strong> Message and data rates may apply.
        </li>
        <li>
          <strong>Opt out:</strong> Reply STOP at any time to stop receiving
          messages. You will receive one confirmation message and no further
          messages.
        </li>
        <li>
          <strong>Help:</strong> Reply HELP for help, or email
          pborgennc@gmail.com.
        </li>
        <li>
          <strong>Carriers:</strong> Carriers are not liable for delayed or
          undelivered messages.
        </li>
        <li>
          <strong>Privacy:</strong> See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-primary underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight pt-4">Contact</h2>
      <p>Paul Borgen, Wethersfield, CT. Email: pborgennc@gmail.com</p>
    </LegalPage>
  );
}
