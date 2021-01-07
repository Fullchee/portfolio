import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container max-w-5xl mx-auto px-6 pt-12">{children}</div>
  );
};

export default Container;
