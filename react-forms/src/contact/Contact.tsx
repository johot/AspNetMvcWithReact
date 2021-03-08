import React, { ReactNode } from "react";
import { HappyFace } from "../common/HappyFace";

export type ContactProps = {
  className?: string;
  children?: ReactNode;
};

export const Contact = ({ children, className }: ContactProps) => {
  return (
    <div className={className}>
      <HappyFace />
      Contact page, this is React!
    </div>
  );
};
