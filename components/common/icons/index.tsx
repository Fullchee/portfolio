import Image from "next/image";
import type { ReactNode } from "react";
import { Database, ExternalLink, GitBranch } from "lucide-react";
import { iconFiles, iconFilesDirectory } from "#components/common/icons/files";
import { SvgCss } from "./css";
import SvgGitHub from "./github";
import SvgHtml5 from "./html5";
import SvgJs from "./js";
import SvgNodeJs from "./node-js";
import SvgReact from "./react";
import SvgSass from "./sass";

/** Where a drawn icon comes from, for the attributions page. */
export interface IconCredit {
  library: "Font Awesome" | "Lucide";
  name: string;
}

const fillClassName = "fill-current";

const fontAwesome = (name: string): IconCredit => ({ library: "Font Awesome", name });
const lucide = (name: string): IconCredit => ({ library: "Lucide", name });

const drawnIcons = {
  "code-branch": { draw: () => <GitBranch size="1em" />, credit: lucide("git-branch") },
  css: { draw: () => <SvgCss className={fillClassName} />, credit: fontAwesome("css3-alt") },
  database: { draw: () => <Database size="1em" />, credit: lucide("database") },
  github: { draw: () => <SvgGitHub className={fillClassName} />, credit: fontAwesome("github") },
  html5: { draw: () => <SvgHtml5 className={fillClassName} />, credit: fontAwesome("html5") },
  js: { draw: () => <SvgJs className={fillClassName} />, credit: fontAwesome("js-square") },
  launch: { draw: () => <ExternalLink size="1em" />, credit: lucide("external-link") },
  "node-js": {
    draw: () => <SvgNodeJs className={fillClassName} />,
    credit: fontAwesome("node-js"),
  },
  react: { draw: () => <SvgReact className={fillClassName} />, credit: fontAwesome("react") },
  sass: { draw: () => <SvgSass className={fillClassName} />, credit: fontAwesome("sass") },
} satisfies Record<string, { draw: () => ReactNode; credit: IconCredit }>;

type DrawnIconName = keyof typeof drawnIcons;

type FileIconName = keyof typeof iconFiles;

export type IconName = DrawnIconName | FileIconName;

export const iconCredits = Object.values(drawnIcons).map(({ credit }) => credit);

const isDrawn = (icon: IconName): icon is DrawnIconName => Object.hasOwn(drawnIcons, icon);

export const Icon = ({ icon }: { icon: IconName }) => {
  if (isDrawn(icon)) return drawnIcons[icon].draw();

  const { file, width, height } = iconFiles[icon];

  return <Image src={`${iconFilesDirectory}/${file}`} alt="" width={width} height={height} />;
};
