"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello I am Valeh! Freshman IT student at ADA University. Self-taught
        programmer.
      </p>
      <p className="mb-3">
        Have 2+ years of experience in the Web Development field. Currently,
        working as a Full-stack Web Developer in a digital agency named
        &quot;Lightbox Agency&quot; and a member of SABAH.incubation Program
        (2023). CTO at the group which was established under the framework of
        SABAH.incubation.
      </p>
    </motion.section>
  );
}
