import Image from "next/image";
import type { ReactNode } from "react";
import { Database, ExternalLink, GitBranch } from "lucide-react";
import { SvgCss } from "./css";
import SvgGitHub from "./github";
import SvgHtml5 from "./html5";
import SvgJs from "./js";
import SvgNodeJs from "./node-js";
import SvgReact from "./react";
import SvgSass from "./sass";

const svgIconSizes = new Map([
  ["django.svg", { width: 16, height: 20 }],
  ["storybook.svg", { width: 16, height: 20 }],
]);

const fillClassName = "fill-current";

const namedIcons = new Map<string, () => ReactNode>(
  Object.entries({
    "code-branch": () => <GitBranch size="1em" />,
    css: () => <SvgCss className={fillClassName} />,
    database: () => <Database size="1em" />,
    github: () => <SvgGitHub className={fillClassName} />,
    html5: () => <SvgHtml5 className={fillClassName} />,
    js: () => <SvgJs className={fillClassName} />,
    "node-js": () => <SvgNodeJs className={fillClassName} />,
    react: () => <SvgReact className={fillClassName} />,
    sass: () => <SvgSass className={fillClassName} />,
    launch: () => <ExternalLink size="1em" />,
  }),
);

export const Icon = ({ icon }: { icon: string }) => {
  const named = namedIcons.get(icon);

  if (named) return named();

  const { width, height } = svgIconSizes.get(icon) ?? { width: 16, height: 16 };

  return <Image src={`/assets/images/icons/${icon}`} alt="" width={width} height={height} />;
};
