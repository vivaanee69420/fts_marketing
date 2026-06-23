/* =========================================================
   LOCATION (CLINIC) PAGE DATA — one entry per city clinic,
   keyed by slug. Copy ported faithfully from the original
   static pages in fts-old/nearbyclinics/*.html (the page
   body sections only — chrome is handled by the app layout).

   ⚠️ NOTES:
   - `phone` / `whatsapp` are the REAL per-clinic numbers from
     the source HTML (not the shared CONFIG placeholder).
   - `geo` lat/lng are APPROXIMATE plausible town-centre
     coordinates kept from the previous data file, added for
     schema/maps. They are NOT surveyed clinic coordinates —
     confirm exact values before go-live.
   ========================================================= */

export type LocationFaq = { q: string; a: string };

/** One "Getting here" card under the "Easy to reach" section. */
export type TransportItem = { heading: string; body: string };

export type Location = {
  slug: string;
  city: string;
  region: string;
  /** Clinic trading name (varies per location). */
  clinicName: string;
  /** H1 text — template wraps the city word in teal. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Italic gold tagline above the H1. */
  tagline: string;
  heroSub: string;
  /** Small fact cards under the hero CTAs. */
  heroFacts: { label: string; sub: string }[];
  /** Clinic photo (filesafe CDN url) shown full-width below the hero. */
  photo: string;
  photoAlt: string;
  /** Intro paragraph(s) for the address/map block. */
  intro: string[];
  /** Bullet points in the address block (the "checklist"). */
  highlights: string[];
  /** Full address as displayed (single string). */
  address: string;
  /** Postcode (split out for convenience / schema). */
  postcode: string;
  phone: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappHref: string;
  email?: string;
  /** Opening hours lines, if the source lists them. */
  hours?: string[];
  /** Google Maps embed iframe src + accessible title. */
  mapSrc: string;
  mapTitle: string;
  /** Approximate town-centre coordinates — placeholders to confirm. */
  geo: { lat: number; lng: number };
  /** "Easy to reach" intro line + transport/parking cards. */
  transportIntro: string;
  transport: TransportItem[];
  /** "Patients travel from across the area" heading + copy + chips. */
  areasHeading: string;
  areasIntro: string;
  areasServed: string[];
  faqs: LocationFaq[];
};

export const LOCATIONS: Record<string, Location> = {
  "ashford-kent": {
    slug: "ashford-kent",
    city: "Ashford",
    region: "Kent",
    clinicName: "GM Dental & Implant Centre",
    title: "Full arch dental implants in Ashford",
    metaTitle:
      "Full Arch Dental Implants in Ashford, Kent — Fixed Teeth Solutions",
    metaDescription:
      "Fixed full arch dental implants in Ashford, Kent. Free consultation & 3D scan at our Ashford clinic — easy to reach from Tenterden, Hythe, Folkestone, Headcorn and across the M20 corridor.",
    tagline: "Eat. Smile. Live. Again.",
    heroSub:
      "Specialist full arch dental implants in Ashford — a fixed set of teeth, often in a day, with a free consultation and 3D scan close to home.",
    heroFacts: [
      { label: "Borough of Ashford", sub: "South-east Kent market town" },
      { label: "On High Speed 1", sub: "~37 min to London St Pancras" },
      { label: "M20 corridor", sub: "Junctions 9, 10 & 10A" },
    ],
    photo:
      "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a7591109a1ab49db40db8.png",
    photoAlt: "GM Dental & Implant Centre — Ashford clinic",
    intro: [
      "Ashford is a thriving market town in south-east Kent, sitting between the North Downs and Romney Marsh on the Channel corridor between Maidstone, Canterbury and Folkestone. With a town population of around 83,000 — and a wider borough of roughly 132,000 — it is one of the best-connected towns in the county, which makes our Ashford clinic a natural choice for full arch implant care across this part of Kent.",
    ],
    highlights: [
      "Free consultation, 3D CT scan and written treatment plan",
      "Fixed teeth on as few as four implants per arch — often in a day",
      "GDC-registered clinicians · CQC-regulated care",
      "Finance from £149/month, subject to status",
    ],
    address: "40 Elwick Road, Ashford, Kent, TN23 1NN",
    postcode: "TN23 1NN",
    phone: "01233 803804",
    phoneHref: "tel:+441233803804",
    whatsappDisplay: "07359 335907",
    whatsappHref: "https://wa.me/447359335907",
    email: "info@gmdentalashford.co.uk",
    hours: [
      "Mon–Wed 08:30–17:30 · Thu 08:30–20:00 · Fri 08:30–17:30 · Sat–Sun closed",
    ],
    mapSrc:
      "https://www.google.com/maps?q=40+Elwick+Road%2C+Ashford%2C+TN23+1NN&z=16&output=embed",
    mapTitle:
      "Map of GM Dental & Implant Centre, 40 Elwick Road, Ashford TN23 1NN",
    geo: { lat: 51.1465, lng: 0.8702 }, // approximate — confirm
    transportIntro:
      "However you travel, our Ashford clinic is straightforward to get to from across South-east Kent.",
    transport: [
      {
        heading: "By rail",
        body: "Ashford International is a major rail hub on High Speed 1, with direct services from London St Pancras in around 37 minutes — and it is only about a 5-minute walk from the practice along Elwick Road, making this the most transport-friendly of the GM Dental locations. Classic services also run to London Charing Cross, Cannon Street and Victoria, plus the Kent coast.",
      },
      {
        heading: "By road",
        body: "The M20 runs straight through Ashford (junctions 9, 10 and 10A), linking west toward Maidstone and the M25 and east toward Folkestone and the Channel Tunnel. The A2070, A28 and A20 also feed the town.",
      },
      {
        heading: "Parking",
        body: "Excellent — two car parks within metres of the practice. Elwick Road Car Park (TN23 1LH) is on the same road, an Ashford Borough Council pay-and-display right by the front door. Elwick Place (Gasworks Lane, TN23 1DY) lets Blue Badge holders register for free parking up to 3 hours, with the barrier opening automatically once registered. Ashford International Station Car Park F (Elwick Road, TN23 1NN) is open 24/7 with 165 spaces incl. 2 disabled bays — cashless ANPR by card or the APCOA app.",
      },
    ],
    areasHeading: "Patients travel to Ashford from across the area",
    areasIntro:
      "Our Ashford clinic regularly welcomes patients from the surrounding towns and villages. If you live nearby, you’re well placed for full arch implant care — book a free consultation to get started.",
    areasServed: [
      "Tenterden",
      "Charing",
      "Hythe",
      "Folkestone",
      "Headcorn",
      "Wye",
      "Hamstreet",
      "Pluckley",
      "Maidstone",
      "Canterbury",
    ],
    faqs: [
      {
        q: "Where is your Ashford clinic?",
        a: "We are at 40 Elwick Road, Ashford, Kent, TN23 1NN — about a 5-minute walk from Ashford International station.",
      },
      {
        q: "How do I get to the Ashford clinic?",
        a: "Ashford International is on High Speed 1, around 37 minutes from London St Pancras, with classic services to Charing Cross, Cannon Street and Victoria. By road the M20 runs through Ashford at junctions 9, 10 and 10A.",
      },
      {
        q: "Is there parking near the clinic?",
        a: "Yes — Elwick Road Car Park (TN23 1LH) is on the same road, Elwick Place (TN23 1DY) offers free Blue Badge parking up to 3 hours once registered, and Ashford International Station Car Park F (TN23 1NN) is open 24/7 with 165 spaces.",
      },
      {
        q: "Which areas do you serve from Ashford?",
        a: "We regularly welcome patients from Tenterden, Charing, Hythe, Folkestone, Headcorn, Wye, Hamstreet, Pluckley, Maidstone and Canterbury.",
      },
      {
        q: "What happens at the free consultation?",
        a: "You will have a free 3D CT scan, a specialist assessment and a written treatment plan, with no pressure and no obligation. We will tell you honestly whether full arch implants are right for you.",
      },
    ],
  },

  "rochester-medway": {
    slug: "rochester-medway",
    city: "Rochester",
    region: "Medway, Kent",
    clinicName: "GM Dental & Implant Centre",
    title: "Full arch dental implants in Rochester",
    metaTitle:
      "Full Arch Dental Implants in Rochester, Medway — Fixed Teeth Solutions",
    metaDescription:
      "Fixed full arch dental implants in Rochester, Medway. Free consultation & 3D scan at our Rochester clinic — easy to reach from Chatham, Gillingham, Strood, Rainham and across the Medway towns on the M2 and High Speed 1.",
    tagline: "Eat. Smile. Live. Again.",
    heroSub:
      "Specialist full arch dental implants in Rochester and the Medway towns — a fixed set of teeth, often in a day, with a free consultation and 3D scan close to home.",
    heroFacts: [
      {
        label: "Medway, Kent",
        sub: "Historic cathedral city on the River Medway",
      },
      { label: "On High Speed 1", sub: "~39 min to London St Pancras" },
      { label: "M2 corridor", sub: "Junctions 1, 2, 3 & 4" },
    ],
    photo:
      "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a7899ae7d476839fa6329.png",
    photoAlt: "Fixed Teeth Solutions — Rochester, Medway clinic",
    intro: [
      "Rochester is a historic cathedral city on the River Medway, at the heart of the Medway towns — the conurbation of Rochester, Chatham, Gillingham, Strood and Rainham that is home to around 280,000 people, one of the largest urban areas in the South East. Sitting right on the M2 and High Speed 1, Rochester is exceptionally well connected, which makes our clinic here a natural choice for full arch implant care across Medway and north Kent.",
    ],
    highlights: [
      "Free consultation, 3D CT scan and written treatment plan",
      "Fixed teeth on as few as four implants per arch — often in a day",
      "GDC-registered clinicians · CQC-regulated care",
      "Finance from £149/month, subject to status",
    ],
    address: "5 London Road, Rochester, Kent, ME2 3JA",
    postcode: "ME2 3JA",
    phone: "01634 718882",
    phoneHref: "tel:+441634718882",
    whatsappDisplay: "07419 838336",
    whatsappHref: "https://wa.me/447419838336",
    email: "info@gm-dental.co.uk",
    hours: [
      "Mon–Wed 08:30–17:30 · Thu 08:30–20:00 · Fri 08:30–17:30 · Sat–Sun closed",
    ],
    mapSrc:
      "https://www.google.com/maps?q=5+London+Road%2C+Rochester%2C+ME2+3JA&z=16&output=embed",
    mapTitle:
      "Map of GM Dental & Implant Centre, 5 London Road, Rochester ME2 3JA",
    geo: { lat: 51.388, lng: 0.5045 }, // approximate — confirm
    transportIntro:
      "However you travel, our Rochester clinic is straightforward to get to from across the Medway towns and north Kent.",
    transport: [
      {
        heading: "By rail",
        body: "Rochester station (Southeastern) is about a 10–15 minute walk along the High Street to London Road, with direct services to London Victoria, St Pancras, Blackfriars and Cannon Street. High Speed 1 trains from nearby Strood and Chatham reach London St Pancras in around 39 minutes. Several bus routes also serve London Road directly.",
      },
      {
        heading: "By road",
        body: "The M2 runs along the southern edge of Medway (junctions 1 to 4), linking west to the M25, Dartford Crossing and London, and east toward Sittingbourne, Faversham and Canterbury. The A2, A229 and A289 (Medway Tunnel) feed Rochester directly from Chatham, Strood and the surrounding towns.",
      },
      {
        heading: "Parking",
        body: "Rochester Multi-Storey Car Park on Cory’s Road (ME1 1PZ) is a short walk from London Road — 280 spaces including 18 disabled bays, open daily 7am–1am. It’s cashless: pay by card, contactless, Apple Pay, Google Pay or the Go Mobon app (location code 59346). Blue Badge holders park free but must register the vehicle in advance. There is also some time-limited on-street parking on London Road — check the signs on arrival.",
      },
    ],
    areasHeading: "Patients travel to Rochester from across Medway",
    areasIntro:
      "Our Rochester clinic regularly welcomes patients from across the Medway towns and north Kent. If you live nearby, you’re well placed for full arch implant care — book a free consultation to get started.",
    areasServed: [
      "Chatham",
      "Gillingham",
      "Strood",
      "Rainham",
      "Walderslade",
      "Cuxton",
      "Hoo",
      "Gravesend",
      "Sittingbourne",
      "Maidstone",
    ],
    faqs: [
      {
        q: "Where is your Rochester clinic?",
        a: "We are at 5 London Road, Rochester, Kent, ME2 3JA, in the heart of the Medway towns.",
      },
      {
        q: "How do I get to the Rochester clinic?",
        a: "Rochester station (Southeastern) is a 10–15 minute walk along the High Street to London Road, with direct trains to Victoria, St Pancras, Blackfriars and Cannon Street. High Speed 1 from Strood and Chatham reaches St Pancras in about 39 minutes. By road the M2 runs along the southern edge of Medway at junctions 1 to 4.",
      },
      {
        q: "Is there parking near the clinic?",
        a: "Yes — Rochester Multi-Storey Car Park on Cory's Road (ME1 1PZ) is a short walk away, with 280 spaces including 18 disabled bays, open daily 7am–1am. It is cashless. There is also some time-limited on-street parking on London Road.",
      },
      {
        q: "Which areas do you serve from Rochester?",
        a: "We regularly welcome patients from Chatham, Gillingham, Strood, Rainham, Walderslade, Cuxton, Hoo, Gravesend, Sittingbourne and Maidstone.",
      },
      {
        q: "What happens at the free consultation?",
        a: "You will have a free 3D CT scan, a specialist assessment and a written treatment plan, with no pressure and no obligation. We will tell you honestly whether full arch implants are right for you.",
      },
    ],
  },

  "bexleyheath-se-london": {
    slug: "bexleyheath-se-london",
    city: "Bexleyheath",
    region: "SE London",
    clinicName: "Fixed Teeth Solutions",
    title: "Full arch dental implants in Bexleyheath",
    metaTitle:
      "Full Arch Dental Implants in Bexleyheath, SE London — Fixed Teeth Solutions",
    metaDescription:
      "Fixed full arch dental implants in Bexleyheath, south-east London. Free consultation & 3D scan at our Bexleyheath clinic — convenient for Welling, Sidcup, Erith, Crayford and Dartford.",
    tagline: "Eat. Smile. Live. Again.",
    heroSub:
      "Specialist full arch dental implants in Bexleyheath — a fixed set of teeth, often in a day, with a free consultation and 3D scan in the heart of the London Borough of Bexley.",
    heroFacts: [
      {
        label: "London Borough of Bexley",
        sub: "Borough administrative centre",
      },
      {
        label: "Zone 5 · National Rail",
        sub: "Charing Cross, Cannon St & Victoria",
      },
      { label: "A2 corridor", sub: "Fast link to M25 & Kent" },
    ],
    photo:
      "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a75765ff04dbbc3b49dba.png",
    photoAlt: "GM Dental & Implant Centre — Bexleyheath clinic",
    intro: [
      "Bexleyheath is a town in south-east London and the administrative centre of the London Borough of Bexley. With a town population of around 15,600 within a borough of roughly 248,000, it has a busy suburban character anchored by a large shopping area, and borders the Borough of Dartford in Kent — making our Bexleyheath clinic convenient for patients across south-east London and the Kent border.",
    ],
    highlights: [
      "Free consultation, 3D CT scan and written treatment plan",
      "Fixed teeth on as few as four implants per arch — often in a day",
      "GDC-registered clinicians · CQC-regulated care",
      "Finance from £149/month, subject to status",
    ],
    address: "35 Woodside Road, Bexleyheath, Kent, DA7 6LB",
    postcode: "DA7 6LB",
    phone: "020 4524 0149",
    phoneHref: "tel:+442045240149",
    whatsappDisplay: "07503 987949",
    whatsappHref: "https://wa.me/447503987949",
    email: "info@fixedteethsolutions.co.uk",
    // flagged: source lists no opening hours for Bexleyheath — omitted.
    mapSrc:
      "https://www.google.com/maps?q=35+Woodside+Road%2C+Bexleyheath%2C+DA7+6LB&z=15&output=embed",
    mapTitle:
      "Map of Fixed Teeth Solutions, 35 Woodside Road, Bexleyheath DA7 6LB",
    geo: { lat: 51.4596, lng: 0.1387 }, // approximate — confirm
    transportIntro:
      "However you travel, our Bexleyheath clinic is straightforward to get to from across South-east London.",
    transport: [
      {
        heading: "By rail & bus",
        body: "Bexleyheath station, served by Southeastern, runs to London Charing Cross, Cannon Street and Victoria (London fare Zone 5), and is approximately a 20-minute walk from the Broadway Shopping Centre area. Several bus routes stop at Bexleyheath Clock Tower, including the 89, 132, 229, 269, 401, 422 and 469.",
      },
      {
        heading: "By road",
        body: "The A2 (the main London–Dover route toward the M2 and M25) runs just south of the town, with the A220/A207 (Broadway / Watling Street) through the town centre and the A205 South Circular further west. Buses link Bromley, Crayford, Dartford, Eltham, Erith, Sidcup, Welling and Woolwich.",
      },
      {
        heading: "Parking",
        body: "Woodside Road itself may have on-street spaces directly outside — worth checking on arrival. As a residential area, nearby side streets often have free parking outside of any controlled hours. Bexleyheath has some controlled parking zones, so always check the signs on arrival.",
      },
    ],
    areasHeading: "Patients travel to Bexleyheath from across the area",
    areasIntro:
      "Our Bexleyheath clinic regularly welcomes patients from the surrounding towns and villages. If you live nearby, you’re well placed for full arch implant care — book a free consultation to get started.",
    areasServed: [
      "Welling",
      "Sidcup",
      "Erith",
      "Crayford",
      "Old Bexley",
      "Belvedere",
      "Dartford",
      "Eltham",
    ],
    faqs: [
      {
        q: "Where is your Bexleyheath clinic?",
        a: "We are at 35 Woodside Road, Bexleyheath, Kent, DA7 6LB, in the heart of the London Borough of Bexley.",
      },
      {
        q: "How do I get to the Bexleyheath clinic?",
        a: "Bexleyheath station (Southeastern, Zone 5) runs to Charing Cross, Cannon Street and Victoria. Buses 89, 132, 229, 269, 401, 422 and 469 stop at Bexleyheath Clock Tower. By road the A2 runs just south of the town toward the M2 and M25.",
      },
      {
        q: "Is there parking near the clinic?",
        a: "Woodside Road itself may have on-street spaces directly outside, and nearby side streets often have free parking outside controlled hours. Bexleyheath has some controlled parking zones, so always check the signs on arrival.",
      },
      {
        q: "Which areas do you serve from Bexleyheath?",
        a: "We regularly welcome patients from Welling, Sidcup, Erith, Crayford, Old Bexley, Belvedere, Dartford and Eltham.",
      },
      {
        q: "What happens at the free consultation?",
        a: "You will have a free 3D CT scan, a specialist assessment and a written treatment plan, with no pressure and no obligation. We will tell you honestly whether full arch implants are right for you.",
      },
    ],
  },

  "barnet-n-london": {
    slug: "barnet-n-london",
    city: "Barnet",
    region: "N London",
    clinicName: "GM Dental & Implant Centre",
    title: "Full arch dental implants in Barnet",
    metaTitle:
      "Full Arch Dental Implants in Barnet, North London — Fixed Teeth Solutions",
    metaDescription:
      "Fixed full arch dental implants in Barnet, north London. Free consultation & 3D scan at our Barnet clinic — easy to reach from Whetstone, Finchley, New Barnet, Totteridge and Potters Bar.",
    tagline: "Eat. Smile. Live. Again.",
    heroSub:
      "Specialist full arch dental implants in Barnet — a fixed set of teeth, often in a day, with a free consultation and 3D scan at the northern edge of Greater London.",
    heroFacts: [
      {
        label: "London Borough of Barnet",
        sub: "Historic High Barnet market town",
      },
      { label: "Northern line · Zone 4", sub: "High Barnet to central London" },
      { label: "A1 & M25", sub: "Junction 23 at South Mimms" },
    ],
    photo:
      "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3a7576b2e956bc24ec7bcd.png",
    photoAlt: "GM Dental & Implant Centre — Barnet clinic",
    intro: [
      "Chipping Barnet — also known as High Barnet — is a historic market town at the northern edge of Greater London, within the London Borough of Barnet. It sits on high ground at London’s frontier with Hertfordshire, roughly ten miles north-north-west of central London, with a surrounding population on the order of 100,000. Our Barnet clinic is well placed for patients across north London and the Hertfordshire border.",
    ],
    highlights: [
      "Free consultation, 3D CT scan and written treatment plan",
      "Fixed teeth on as few as four implants per arch — often in a day",
      "GDC-registered clinicians · CQC-regulated care",
      "Finance from £149/month, subject to status",
    ],
    address: "27 Wood Street, Barnet, Hertfordshire, EN5 4BE",
    postcode: "EN5 4BE",
    phone: "020 8449 3022",
    phoneHref: "tel:+442084493022",
    whatsappDisplay: "07542 078682",
    whatsappHref: "https://wa.me/447542078682",
    email: "hello@gm-dental.co.uk",
    hours: [
      "Mon–Wed 08:30–17:30 · Thu 08:30–20:00 · Fri 08:30–17:30 · Sat–Sun closed",
    ],
    mapSrc:
      "https://www.google.com/maps?q=27+Wood+Street%2C+Barnet%2C+EN5+4BE&z=16&output=embed",
    mapTitle:
      "Map of GM Dental & Implant Centre, 27 Wood Street, Barnet EN5 4BE",
    geo: { lat: 51.6504, lng: -0.2007 }, // approximate — confirm
    transportIntro:
      "However you travel, our Barnet clinic is straightforward to get to from across North London.",
    transport: [
      {
        heading: "By rail",
        body: "High Barnet Underground station is the northern terminus of the Northern line (Zone 4) and only about a 5-minute walk from Wood Street — excellent access for patients coming from London, running into the centre via Charing Cross (West End) or Bank (City) in roughly 30–45 minutes. New Barnet and Oakleigh Park (Great Northern) also run south to Moorgate and King’s Cross.",
      },
      {
        heading: "By road",
        body: "The A1000 (Great North Road) is the main route through High Barnet, Whetstone and Finchley; the modern A1 runs to the west, and the A1(M) meets the M25 at Junction 23 (South Mimms) just north of Barnet for fast orbital access.",
      },
      {
        heading: "Parking",
        body: "Stapylton Road Car Park (EN5 4JD) is the closest, about a 2-minute walk — open Mon–Sat 8:00am–6:30pm and very affordable (30 mins 50p, 1hr £1, 3hrs £2, 4hrs £2.50, over 4hrs £5). The Spires Shopping Centre car park (Britannia Parking, EN5 4QT) sits directly adjacent with more space. Wood Street itself has cashless pay-and-display bays directly outside, and Moxon Street car park offers a free first hour (code 802550) a short walk away. Check signs on arrival as some bays are time-limited.",
      },
    ],
    areasHeading: "Patients travel to Barnet from across the area",
    areasIntro:
      "Our Barnet clinic regularly welcomes patients from the surrounding towns and villages. If you live nearby, you’re well placed for full arch implant care — book a free consultation to get started.",
    areasServed: [
      "New Barnet",
      "East Barnet",
      "Whetstone",
      "Totteridge",
      "Friern Barnet",
      "Finchley",
      "Mill Hill",
      "Borehamwood",
      "Potters Bar",
      "Cockfosters",
    ],
    faqs: [
      {
        q: "Where is your Barnet clinic?",
        a: "We are at 27 Wood Street, Barnet, Hertfordshire, EN5 4BE, in historic High Barnet at the northern edge of Greater London.",
      },
      {
        q: "How do I get to the Barnet clinic?",
        a: "High Barnet Underground (Northern line, Zone 4) is about a 5-minute walk from Wood Street, reaching central London via Charing Cross or Bank in roughly 30–45 minutes. By road the A1000 runs through High Barnet, with the M25 at Junction 23 (South Mimms) just north.",
      },
      {
        q: "Is there parking near the clinic?",
        a: "Stapylton Road Car Park (EN5 4JD) is the closest, about a 2-minute walk and very affordable. The Spires Shopping Centre car park (EN5 4QT) is adjacent, Wood Street has cashless pay-and-display bays directly outside, and Moxon Street car park offers a free first hour.",
      },
      {
        q: "Which areas do you serve from Barnet?",
        a: "We regularly welcome patients from New Barnet, East Barnet, Whetstone, Totteridge, Friern Barnet, Finchley, Mill Hill, Borehamwood, Potters Bar and Cockfosters.",
      },
      {
        q: "What happens at the free consultation?",
        a: "You will have a free 3D CT scan, a specialist assessment and a written treatment plan, with no pressure and no obligation. We will tell you honestly whether full arch implants are right for you.",
      },
    ],
  },
};

export const LOCATION_SLUGS = Object.keys(LOCATIONS);

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS[slug];
}
