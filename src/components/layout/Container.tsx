"use client";

import { ReactNode } from "react";

type Props = {
  class?: string;
  children: ReactNode;
};

export default function Container(props: Props) {
  return (
    <section
      className={`relative mx-auto max-w-7xl px-6 w-full ${props.class} `}
    >
      {props.children}
    </section>
  );
}
