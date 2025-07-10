"use client";

import { ReactNode } from "react";

type Props = {
  class?: string;
  children: ReactNode;
};

export default function Container(props: Props) {
  return (
    <section className={`px-6 py-24 md:px-32 text-[#1f2937] ${props.class} `}>
      {props.children}
    </section>
  );
}
