import Image from "next/image";
import { Database, ExternalLink, GitBranch } from "lucide-react";
import { SvgCss } from "./css";
import SvgGitHub from "./github";
import SvgHtml5 from "./html5";
import SvgJs from "./js";
import SvgNodeJs from "./node-js";
import SvgReact from "./react";
import SvgSass from "./sass";

const svgIconSizes: Record<string, { width: number; height: number }> = {
  "django.svg": { width: 16, height: 20 },
  "storybook.svg": { width: 16, height: 20 },
};

export const Icon = ({ icon }: { icon: string }) => {
  const className = "fill-current";
  switch (icon) {
    case "code-branch":
      return <GitBranch size="1em" />;
    case "css":
      return <SvgCss className={className} />;
    case "database":
      return <Database size="1em" />;
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
      return <ExternalLink size="1em" />;
    default: {
      const { width, height } = svgIconSizes[icon] ?? { width: 16, height: 16 };
      return (
        <Image
          src={`/assets/images/icons/${icon}`}
          alt={`${icon} logo`}
          width={width}
          height={height}
        />
      );
    }
  }
};
