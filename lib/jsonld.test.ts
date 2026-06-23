import { describe, it, expect } from "vitest";
import { medicalProcedure, dentistLocation, faqPage, breadcrumb, organization } from "./jsonld";

describe("JSON-LD builders", () => {
  it("organization is a Dentist with contact info", () => {
    const o = organization() as Record<string, unknown>;
    expect(o["@type"]).toBe("Dentist");
    expect(o.url).toBeTruthy();
    expect(o.telephone).toBeTruthy();
  });

  it("medicalProcedure carries name, description and provider", () => {
    const m = medicalProcedure({ name: "All-on-4", description: "desc", path: "/treatments/x/" }) as Record<string, unknown>;
    expect(m["@type"]).toBe("MedicalProcedure");
    expect(m.name).toBe("All-on-4");
    expect(m.provider).toBeTruthy();
  });

  it("dentistLocation includes a PostalAddress and geo", () => {
    const d = dentistLocation({
      name: "Ashford",
      city: "Ashford",
      region: "Kent",
      address: "1 High St",
      geo: { lat: 51.1, lng: 0.87 },
      path: "/full-arch-solutions-ashford-kent/",
    }) as Record<string, unknown>;
    expect(d["@type"]).toBe("Dentist");
    expect((d.address as Record<string, unknown>)["@type"]).toBe("PostalAddress");
    expect((d.geo as Record<string, unknown>)["@type"]).toBe("GeoCoordinates");
  });

  it("faqPage maps items to Question/Answer", () => {
    const f = faqPage([{ q: "Q1", a: "A1" }]) as Record<string, unknown>;
    expect(f["@type"]).toBe("FAQPage");
    const mainEntity = f.mainEntity as Record<string, unknown>[];
    expect(mainEntity[0]["@type"]).toBe("Question");
    expect((mainEntity[0].acceptedAnswer as Record<string, unknown>).text).toBe("A1");
  });

  it("breadcrumb positions items in order", () => {
    const b = breadcrumb([
      { name: "Home", path: "/" },
      { name: "Treatments", path: "/treatments/" },
    ]) as Record<string, unknown>;
    const items = b.itemListElement as Record<string, unknown>[];
    expect(items[0].position).toBe(1);
    expect(items[1].position).toBe(2);
  });
});
