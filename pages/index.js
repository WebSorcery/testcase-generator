import React from "react"
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ErrorIcon from "@mui/icons-material/Error";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";

import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import LogRocket from "logrocket";
import { v4 as uuidv4 } from "uuid";

const inter = Inter({ subsets: ["latin"] });

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    new Sentry.Feedback({
      // Additional SDK configuration goes in here
      colorScheme: "light",
     }),
     new BrowserTracing(),
     new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  beforeSend: (event) => {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
});

LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET);
// import { useMediaQuery } from '@mui/material'
LogRocket.identify(uuidv4());

const links = [
  {
    href: "/generator/integerGenerator",
    title: "Integer",
    description: "Generate random integers",
    iconType: CheckCircleIcon,
    iconColor: "green",
  },
  {
    href: "/generator/stringGenerator",
    title: "String",
    description: "Generate random string of characters",
    iconType: CheckCircleIcon,
    iconColor: "green",
  },
  {
    href: "/generator/arrayGenerator",
    title: "Array",
    description: "Generate random array of integer & float values",
    iconType: CheckCircleIcon,
    iconColor: "green",
  },
  {
    href: "/generator/binaryTreeGenerator",
    title: "Binary Tree",
    description: "Generate random binary tree of integer values",
    iconType: ErrorIcon,
    iconColor: "red",
  },
  {
    href: "/generator/linkedListGenerator",
    title: "Linked List",
    description: "Generate random linked list of integer values",
    iconType: HourglassTopOutlinedIcon,
    iconColor: "green",
  },
  {
    href: "/generator/graphGenerator",
    title: "Graph",
    description: "Generate random graph of integer/char values",
    iconType: CheckCircleIcon,
    iconColor: "green",
  },
  {
    href: "/generator/matrixGenerator",
    title: "Matrix",
    description: "Generate random Matrix of integer/char values",
    iconType: HourglassEmptyIcon,
    iconColor: "blue",
  },
  {
    href: "/generator/palindromeGenerator",
    title: "Palindrome",
    description: "Generate random Palindrome of integer/char values",
    iconType: CheckCircleIcon,
    iconColor: "green",
  },
];

function renderLink(link) {
  return (
    <Link href={link.href} className={styles.card} rel="noopener noreferrer" key={link.href}>
      <h2 className={inter.className}>
        {link.title}{" "}
        {React.createElement(link.iconType, { style: { color: link.iconColor } })}
      </h2>
      <p className={inter.className}>{link.description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Test Cases</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <div>
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="https://github.com/ank1traj/testcase-generator"
              rel="noopener noreferrer"
            >
              <code className={styles.code}>Contribute &hearts;</code>
            </Link>
          </div>
        </nav>
        <div className={styles.description}>
          <p>An Open Source Comprehensive Test Case Generator</p>
          <div className={styles.author}>
            <a
              href="https://www.linkedin.com/in/ank1traj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Ankit Raj
            </a>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>
        <div className={styles.grid}>
          {links.map(renderLink)}
        </div>
        <div className={styles.iconInfo}>
          <ul className={styles.horizontalIconList}>
            <li>
              <CheckCircleIcon style={{ color: "green" }} />
              <span className={styles.iconLabel}>Completed</span>
            </li>
            <li>
              <ErrorIcon style={{ color: "red" }} />
              <span className={styles.iconLabel}>Not Started yet</span>
            </li>
            <li>
              <HourglassTopOutlinedIcon style={{ color: "green" }} />
              <span className={styles.iconLabel}>In Progress</span>
            </li>
            <li>
              <HourglassEmptyIcon style={{ color: "blue" }} />
              <span className={styles.iconLabel}>Next</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
