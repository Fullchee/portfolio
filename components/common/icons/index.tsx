import SvgCodeBranch from "./code-branch";
import SvgDatabase from "./database";
import SvgGitHub from "./github";
import SvgHtml5 from "./html5";
import SvgJs from "./js";
import SvgLaunch from "./github copy";
import SvgNodeJs from "./node-js";
import SvgReact from "./react";
import SvgSass from "./sass";
import Image from "next/image";

export const Icon = ({
  icon,
  className,
}: {
  icon: string;
  className: string;
}) => {
  switch (icon) {
    case "code-branch":
      return <SvgCodeBranch className={className} />;
    case "database":
      return <SvgDatabase className={className} />;
    case "github":
      return <SvgGitHub className={className} />;
    case "html5":
      return <SvgHtml5 className={className} />;
    case "js":
      return <SvgJs className={className} />;
    case "node-js":
      return <SvgNodeJs className={className} />;
    case "react":
      return <SvgReact className={className} />;
    case "sass":
      return <SvgSass className={className} />;
    case "launch":
      return <SvgLaunch className={className} />;
    default:
      return (
        <Image
          src={`/assets/images/icons/${icon}`}
          className={className}
          width={16}
          height={16}
        />
      );
  }
};
