import assert from "node:assert/strict";
import { globSync } from "node:fs";
import { test } from "node:test";

import {
  caseStudies,
  caseStudiesOf,
  caseStudyMetadata,
  caseStudyUrl,
  getCaseStudy,
  type CaseStudyImage,
} from "#lib/caseStudy";

const byText = (left: string, right: string) => left.localeCompare(right);

const urls = caseStudies.map((caseStudy) => caseStudyUrl(caseStudy));

test("every Case study has a page, and every Case study page has an entry", () => {
  const pageUrls = globSync("app/{project,role}/*/page.tsx").map(
    (page) => `/${page.replace(/^app\//, "").replace(/\/page\.tsx$/, "")}`,
  );

  assert.deepEqual(urls.toSorted(byText), pageUrls.toSorted(byText));
});

test("Case study URLs are unique", () => {
  assert.equal(new Set(urls).size, urls.length);
});

test("caseStudiesOf returns only the given kind", () => {
  assert.deepEqual(
    caseStudiesOf("role").map(({ slug }) => slug),
    ["forma", "ibm"],
  );
});

test("getCaseStudy finds by kind and slug", () => {
  assert.equal(getCaseStudy("role", "ibm").title, "Working at IBM");
  assert.throws(() => getCaseStudy("project", "ibm"), /Unknown project: ibm/);
});

test("caseStudyUrl prefixes the slug with the kind", () => {
  assert.equal(caseStudyUrl(getCaseStudy("project", "reminders")), "/project/reminders");
});

const openGraphImages = ({ path, width, height, alt }: CaseStudyImage) => [
  { url: path, width, height, alt },
];

test("the og image prefers ogImage, then a Project's hero, then the card image", () => {
  const ibm = getCaseStudy("role", "ibm");
  const forma = getCaseStudy("role", "forma");
  const water = getCaseStudy("project", "toronto-water-monitor");

  assert.ok(ibm.ogImage && water.hero);
  assert.deepEqual(caseStudyMetadata(ibm).openGraph?.images, openGraphImages(ibm.ogImage));
  assert.deepEqual(caseStudyMetadata(water).openGraph?.images, openGraphImages(water.hero));
  assert.deepEqual(caseStudyMetadata(forma).openGraph?.images, openGraphImages(forma.image));
});
