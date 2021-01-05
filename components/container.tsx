import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container max-w-7xl mx-auto px-5">{children}</div>;
};

export default Container;
