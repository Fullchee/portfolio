import type React from "react";

interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return <main className="">{children}</main>;
};

export default Container;
