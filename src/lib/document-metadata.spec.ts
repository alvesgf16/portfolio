import { describe, expect, it } from "vitest";

import { documentMetadataFromIntro } from "@/lib/document-metadata";

describe("documentMetadataFromIntro", () => {
  it("builds document title and description from intro", () => {
    const intro = {
      name: "Ada Lovelace",
      title: "Engineer",
      location: "London, UK",
    };

    expect(documentMetadataFromIntro(intro)).toEqual({
      title: "Ada Lovelace · Engineer",
      description: "Engineer based in London, UK.",
    });
  });
});
