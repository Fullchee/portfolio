import { iconCredits, type IconCredit } from "#components/common/icons";
import { buildMetadata } from "#lib/metadata";

export const metadata = buildMetadata({
  title: "Attributions",
  description: "Icon attributions used on fullchee.com",
  path: "/attributions",
});

const libraries: Record<IconCredit["library"], { url: (name: string) => string; licence: string }> =
  {
    "Font Awesome": {
      url: (name) => `https://fontawesome.com/icons/${name}?style=brands`,
      licence: "by Font Awesome (fab) is licensed under CC Attribution 4.0",
    },
    Lucide: {
      url: (name) => `https://lucide.dev/icons/${name}`,
      licence: "by Lucide is licensed under ISC",
    },
  };

const Attribution = ({ credit: { library, name } }: { credit: IconCredit }) => {
  const { url, licence } = libraries[library];

  return (
    <li>
      <a href={url(name)}>
        "{name}" {licence}
      </a>
    </li>
  );
};

export default function AttributionsPage() {
  return (
    <ul className="p-10">
      {iconCredits.map((credit) => (
        <Attribution key={credit.name} credit={credit} />
      ))}
    </ul>
  );
}
