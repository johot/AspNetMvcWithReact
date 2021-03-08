import React, { ReactNode } from "react";

export type HappyFaceProps = {
  className?: string;
  children?: ReactNode;
};

export const HappyFace = ({ children, className }: HappyFaceProps) => {
  return (
    <div className={className} style={{ fontSize: 100 }}>
      😃
    </div>
  );
};
