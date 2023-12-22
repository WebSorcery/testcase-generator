import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import image from "./test.png";
const inter = Inter({ subsets: ["latin"] });

const Center = () => {
  return (
    <div className={inter.className}>
      <div className={styles.testca}>
        <div className={styles.data}>

            <div className={styles.details1}>

          <p>An Open Source Comprehensive Test Case Generator</p>
            </div>

            <div className={styles.author}>
            <a
              href="https://www.linkedin.com/in/ank1traj/"
              target="_blank"
              rel="noopener noreferrer">
              By Ankit Raj
            </a>

          </div>
        </div>

        <div className={styles.imag}>
          <div class="relative rounded-lg bg-slate-900 p-2  ">
            <div class="relative flex text-center">
              <div class="flex pl-3.5 pt-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
                >
                  <circle r="12" cy="12" cx="12"></circle>
                </svg>
              </div>
              <span class="absolute inset-x-0 top-2 text text-slate-500">
                
              </span>
            </div>
            <div class="mt-5 space-y-1.5 px-5 pb-10">
              <p class="mt-4 font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Card</span>
                <span class="text-slate-500">&gt;</span>
              </p>
              <p class="ml-3 font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Text</span>
                <span class="text-slate-500">&gt;</span>
                <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span class="relative text-blue-400">
                    Testcase case generator
                  </span>
                </span>
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Text</span>
                <span class="text-slate-500">&gt;</span>
              </p>
              <p class="ml-3 font-mono text font-normal leading-4 tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Event</span>
                <span class="text-slate-500">&gt;</span>
                <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span class="relative text-blue-400">Codepeak'23</span>
                </span>
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Event</span>
                <span class="text-slate-500">&gt;</span>
              </p>
              <p class="ml-3 font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Flex</span>
                <span class="ml-2 text-violet-400">
                  className<span class="text-slate-500">=</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">Owner</span>
                  </span>
                </span>
                <span class="text-slate-500">&gt;</span>
                    <span class="relative text-blue-400">AnkitRaj</span>
                
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Flex</span>&gt;
              </p>
              <p class="ml-6 font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Text</span>
                <span class="text-slate-500">&gt;</span>
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Bold</span>
                <span class="text-slate-500">&gt;</span>
                <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span class="relative text-blue-400">32%</span>
                </span>
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Bold</span>
                <span class="text-slate-500">&gt;</span>
                <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span class="relative text-blue-400">Open Sourced</span>
                </span>
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Text</span>
                <span class="text-slate-500">&gt;</span>
              </p>
              <p class="ml-6 font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">Text</span>
                <span class="text-slate-500">&gt;</span>
                <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                  <span class="relative text-blue-400">$ 223,328</span>
                </span>
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Text</span>
                <span class="text-slate-500">&gt;</span>
              </p>
              <p class="ml-3 font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Flex</span>
                <span class="text-slate-500">&gt;</span>
              </p>
              <p class="ml-3 font-mono text font-normal leading-4 tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;</span>
                <span class="text-pink-400">ProgressBar</span>
                <span class="ml-2 text-violet-400">
                  value<span class="text-slate-500">=</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">{32}</span>
                  </span>
                </span>
                <span class="ml-2 text-violet-400">
                  className<span class="text-slate-500">=</span>
                  <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span class="relative text-blue-400">"mt-3"</span>
                  </span>
                </span>
                <span class="text-slate-500">/&gt;</span>
              </p>
              <p class="font-mono text font-normal tracking-wide text-violet-400">
                <span class="text-slate-500">&lt;/</span>
                <span class="text-pink-400">Card</span>
                <span class="text-slate-500">&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
