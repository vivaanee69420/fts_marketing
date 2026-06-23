/* =========================================================
   FIXED TEETH SOLUTIONS — single source of business config.
   Ported from the original site's CONFIG object.

   ⚠️ PLACEHOLDERS: phone, finance figures and tier prices are
   placeholders from the source. Confirm the real NAP + finance
   numbers before go-live (see TODOS.md). Swap them here only.
   ========================================================= */

export type Tier = {
  name: string;
  material: string;
  feature: boolean;
  /** price for a single arch */
  price1: number;
  /** price for full mouth (both arches) */
  price2: number;
  /** finance/month single arch */
  fin1: number;
  /** finance/month full mouth */
  fin2: number;
  perks: string[];
};

export type Centre = {
  name: string;
  area: string;
  addr: string;
  /** location page slug under /full-arch-solutions-{slug}/ (null = no dedicated page, links to hub) */
  slug: string | null;
  img?: string;
};

export const CONFIG = {
  phone: "0000 000 000", // PLACEHOLDER — confirm real number
  phoneHref: "+440000000000", // PLACEHOLDER
  email: "hello@fixedteethsolutions.co.uk",
  deposit: 499,
  financeFrom: 176.87,
  financeExample:
    "From £176.87 / month over 60 months at representative 12.9% APR (subject to status)",
  tiers: [
    {
      name: "Classic",
      material: "PMMA fixed bridge",
      feature: false,
      price1: 7997,
      price2: 14995,
      fin1: 176.87,
      fin2: 331.66,
      perks: [
        "A fixed bridge for everyday function",
        "Planned around 4 implants per jaw",
        "10 fixed teeth in the bridge design",
        "PMMA bridge with local aftercare",
        "Treatment-day bridge optional",
      ],
    },
    {
      name: "Signature",
      material: "Titanium-reinforced premium bridge",
      feature: true,
      price1: 11995,
      price2: 21995,
      fin1: 265.3,
      fin2: 486.49,
      perks: [
        "Includes the Classic planning pathway",
        "Titanium reinforcement for added support",
        "More detailed shade and smile planning",
        "Premium bridge finish",
        "Priority lab coordination",
      ],
    },
    {
      name: "Elite",
      material: "Full zirconia · lifetime aesthetics",
      feature: false,
      price1: 15995,
      price2: 27995,
      fin1: 353.78,
      fin2: 619.19,
      perks: [
        "Includes the Signature planning pathway",
        "Full zirconia for strength and realism",
        "Sedation up to 4 hours if needed",
        "Highest-detail cosmetic finish",
        "Built for our most premium result",
      ],
    },
  ] as Tier[],
  centres: [
    {
      name: "Ashford",
      area: "Kent",
      addr: "Ashford, Kent",
      slug: "ashford-kent",
      img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a7591109a1ab49db40db8.png",
    },
    {
      name: "Rochester",
      area: "Medway",
      addr: "Rochester, Medway, Kent",
      slug: "rochester-medway",
      img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a7899ae7d476839fa6329.png",
    },
    {
      name: "Warwick Lodge",
      area: "Herne Bay",
      addr: "Canterbury Road, Herne Bay, Kent",
      slug: null,
    },
    {
      name: "Bexleyheath",
      area: "SE London",
      addr: "Bexleyheath, Greater London",
      slug: "bexleyheath-se-london",
      img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a75765ff04dbbc3b49dba.png",
    },
    {
      name: "Barnet",
      area: "N London",
      addr: "Barnet, North London",
      slug: "barnet-n-london",
      img: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a7576b2e956bc24ec7bcd.png",
    },
  ] as Centre[],
} as const;

export const gbp = (n: number) => "£" + n.toLocaleString("en-GB");
