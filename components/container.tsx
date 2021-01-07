import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return <main className="container max-w-5xl mx-auto px-8">{children}</main>;
};

export default Container;
