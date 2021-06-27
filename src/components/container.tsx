import React, { ReactNodeArray } from "react";
type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="mx-12 bg-green-300">{children}</div>;
}
