/* =========================================================
   Treatment page content, ported from the original static
   /treatments/*.html files. Keyed by URL slug.

   NOTE: the source denture-alternatives.html was empty in the
   export, so that entry uses reasonable placeholder copy written
   in the same voice as the other pages. Confirm before go-live.
   ========================================================= */

export type WhoCard = { title: string; body: string };
export type Faq = { q: string; a: string };

export type Treatment = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroSub: string;
  overview: string[];
  included: string[];
  whoHelps: WhoCard[];
  faqs: Faq[];
};

export const TREATMENTS: Record<string, Treatment> = {
  "dental-implants": {
    slug: "dental-implants",
    title: "Dental Implants",
    metaTitle:
      "Dental Implants — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "From a single tooth to a full arch, dental implants are the gold-standard way to replace missing teeth with a permanent, natural-looking result.",
    heroKicker: "Treatments",
    heroSub:
      "From a single tooth to a full arch, dental implants are the gold-standard way to replace missing teeth with a permanent, natural-looking result.",
    overview: [
      "A dental implant is a small titanium post that replaces the root of a missing tooth and fuses with your jawbone. It provides a stable foundation for a crown, bridge or full arch of teeth that looks, feels and works like the real thing.",
      "While we specialise in full arch cases, our clinicians plan every implant with the same advanced 3D imaging and care.",
    ],
    included: [
      "Replace one tooth or many",
      "Titanium implants that fuse with bone",
      "Natural-looking, long-lasting results",
      "Protects jawbone and facial structure",
      "3D-planned for precision",
      "Specialist-led care",
    ],
    whoHelps: [
      {
        title: "Missing one or more teeth",
        body: "A fixed alternative to gaps, partial dentures or bridges.",
      },
      {
        title: "Want to protect your jaw",
        body: "Implants help preserve bone where teeth are lost.",
      },
      {
        title: "Want a natural result",
        body: "Crowns and bridges matched to your existing teeth.",
      },
    ],
    faqs: [
      {
        q: "How long do implants last?",
        a: "With good care and regular reviews, implants are designed to be a durable, long-term solution.",
      },
      {
        q: "Is it painful?",
        a: "Treatment is done under local anaesthetic with sedation options. Most patients report less discomfort than expected.",
      },
      {
        q: "Am I too old for implants?",
        a: "Age is rarely a barrier — health and bone matter more. A free assessment confirms suitability.",
      },
    ],
  },

  "all-on-four-dental-implants": {
    slug: "all-on-four-dental-implants",
    title: "All-on-4 Dental Implants",
    metaTitle:
      "All-on-4 Dental Implants — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "A full arch of fixed teeth supported by just four precisely-placed implants — the efficient, proven technique behind fixed teeth in a day.",
    heroKicker: "Treatments",
    heroSub:
      "A full arch of fixed teeth supported by just four precisely-placed implants — the efficient, proven technique behind fixed teeth in a day.",
    overview: [
      "The All-on-4 technique anchors a complete arch of fixed teeth onto four implants, angled to make the most of your available bone. For many patients this avoids the need for bone grafting and means a fixed smile can be fitted in a single visit.",
      "It's one of the most studied approaches in implant dentistry — and one we perform routinely.",
    ],
    included: [
      "Full arch on 4 implants",
      "Often avoids bone grafting",
      "Fixed teeth typically same day",
      "Smaller treatment, faster recovery",
      "From £7,997 per arch · finance available",
      "Backed by 3D planning and our own lab",
    ],
    whoHelps: [
      {
        title: "Limited bone",
        body: "Angled implants make the most of the bone you have, often without grafting.",
      },
      {
        title: "Want a faster route",
        body: "Fewer implants can mean a quicker, more comfortable treatment.",
      },
      {
        title: "Value matters",
        body: "An efficient technique that keeps treatment accessible.",
      },
    ],
    faqs: [
      {
        q: "Is All-on-4 strong enough?",
        a: "Yes — four well-placed implants are designed to support a full fixed arch. Your clinician may recommend more implants in some cases.",
      },
      {
        q: "Will I need a bone graft?",
        a: "Often not. Angled implants are designed to use existing bone; your 3D scan confirms what's possible.",
      },
      {
        q: "How is this different from full mouth implants?",
        a: "All-on-4 is one technique for restoring a full arch. We'll recommend the right number of implants for you at your consultation.",
      },
    ],
  },

  "full-mouth-dental-implants": {
    slug: "full-mouth-dental-implants",
    title: "Full Mouth Dental Implants",
    metaTitle:
      "Full Mouth Dental Implants — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "Replace a whole jaw — or both — of missing, loose or failing teeth with a fixed, natural-looking set of teeth secured on as few as four implants per arch.",
    heroKicker: "Treatments",
    heroSub:
      "Replace a whole jaw — or both — of missing, loose or failing teeth with a fixed, natural-looking set of teeth secured on as few as four implants per arch.",
    overview: [
      "Full mouth dental implants replace an entire arch of teeth with a fixed bridge anchored to dental implants. Unlike dentures, they don't come out, don't cover your palate, and let you eat and speak with confidence. In most cases your fixed teeth are fitted on the same day as your implants.",
      "As the UK's full arch specialists, we place over 1,000 implants a year and back every case with advanced 3D planning and our own dental laboratory.",
    ],
    included: [
      "Fixed teeth — often in a day",
      "As few as 4 implants per arch",
      "No nightly removal, no palate plate",
      "Three bridge options: Classic, Signature, Elite",
      "From £7,997 per arch · finance from £149/mo",
      "Aftercare and reviews included",
    ],
    whoHelps: [
      {
        title: "Failing teeth across the mouth",
        body: "When several or most teeth are broken, infected or beyond saving.",
      },
      {
        title: "Long-term denture wearers",
        body: "If you're tired of slipping, clicking dentures that limit your life.",
      },
      {
        title: "People who want to eat normally",
        body: "A stable, fixed bite for the foods you've been avoiding.",
      },
    ],
    faqs: [
      {
        q: "Can I have both jaws done?",
        a: "Yes — full mouth means upper and lower. Pricing is published per arch and for a full mouth, with finance available.",
      },
      {
        q: "Will my teeth look natural?",
        a: "Yes. You choose the bridge material and finish, and our lab matches shade and shape to suit your face.",
      },
      {
        q: "How soon will I have teeth?",
        a: "In most cases a fixed set of teeth is fitted the same day as your implants.",
      },
    ],
  },

  "smile-in-a-day": {
    slug: "smile-in-a-day",
    title: "Fixed Teeth in a Day",
    metaTitle:
      "Smile in a Day — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "Walk in with failing or missing teeth and walk out the same day with a fixed, natural-looking smile. This is what we're known for.",
    heroKicker: "Treatments",
    heroSub:
      "Walk in with failing or missing teeth and walk out the same day with a fixed, natural-looking smile. This is what we're known for.",
    overview: [
      "“Fixed teeth in a day” means your implants are placed and a fixed set of teeth fitted in one appointment. There's no months-long gap with no teeth, and no removable temporary denture to manage.",
      "It's made possible by precise 3D planning, the All-on-4 technique and our in-house laboratory working alongside your clinician.",
    ],
    included: [
      "Implants placed and teeth fitted same day",
      "No long gap without teeth",
      "No removable temporary plate",
      "Local anaesthetic with sedation options",
      "Planned with 3D imaging",
      "Final bridge crafted in our own lab",
    ],
    whoHelps: [
      {
        title: "Want fast results",
        body: "Ideal if you don't want to wait months for a fixed smile.",
      },
      {
        title: "Have an event coming up",
        body: "Leave with teeth you're proud to show.",
      },
      {
        title: "Hate the idea of dentures",
        body: "Skip the removable temporary stage entirely.",
      },
    ],
    faqs: [
      {
        q: "Are the same-day teeth my final teeth?",
        a: "They're a strong, fixed set you wear while your implants integrate. Your final bridge is then crafted for the perfect long-term fit.",
      },
      {
        q: "Does everyone qualify for same-day teeth?",
        a: "Most full arch patients do. Your 3D scan and assessment confirm it.",
      },
      {
        q: "Will I be in pain afterwards?",
        a: "Most patients manage comfortably with simple pain relief and are pleasantly surprised by recovery.",
      },
    ],
  },

  "denture-alternatives": {
    slug: "denture-alternatives",
    title: "Denture Alternatives",
    metaTitle:
      "Denture Alternatives — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "Tired of loose, removable dentures? Fixed implant-supported teeth are a permanent alternative that stay put — no plates, no adhesive, no nightly removal.",
    heroKicker: "Treatments",
    heroSub:
      "Tired of loose, removable dentures? Fixed implant-supported teeth are a permanent alternative that stay put — no plates, no adhesive, no nightly removal.",
    overview: [
      "Conventional dentures sit on your gums and can slip, click and limit what you eat. Implant-supported fixed teeth are anchored to your jaw, so they stay firmly in place day and night — letting you eat, speak and smile with confidence.",
      "As the UK's full arch specialists, we plan every case with advanced 3D imaging and our own dental laboratory to give you a secure, natural-looking result.",
    ],
    included: [
      "Fixed teeth that never come out",
      "No palate plate covering your taste",
      "No adhesive or nightly removal",
      "Secured on as few as 4 implants per arch",
      "From £7,997 per arch · finance available",
      "Aftercare and reviews included",
    ],
    whoHelps: [
      {
        title: "Struggling with loose dentures",
        body: "If your dentures slip, click or rub, fixed teeth stay firmly in place.",
      },
      {
        title: "Avoiding certain foods",
        body: "A stable, fixed bite lets you eat the foods you've been missing.",
      },
      {
        title: "Want a permanent solution",
        body: "Fixed teeth you don't take out, clean like natural teeth.",
      },
    ],
    faqs: [
      {
        q: "How are fixed teeth different from dentures?",
        a: "Fixed implant-supported teeth are anchored to your jaw and don't come out, while dentures rest on the gums and are removed for cleaning.",
      },
      {
        q: "Can I switch from dentures to implants?",
        a: "In most cases, yes. A free assessment and 3D scan confirm whether implant-supported fixed teeth are right for you.",
      },
      {
        q: "Will fixed teeth feel more natural?",
        a: "Most patients find fixed teeth far more secure and comfortable than removable dentures, with no plate covering the palate.",
      },
    ],
  },

  "dental-implants-abroad": {
    slug: "dental-implants-abroad",
    title: "Thinking of Dental Implants Abroad?",
    metaTitle:
      "Dental Implants Abroad — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "Tempted by implants abroad? Before you book a flight, here's an honest look at the trade-offs — and why UK-based aftercare matters.",
    heroKicker: "Treatments",
    heroSub:
      "Tempted by implants abroad? Before you book a flight, here's an honest look at the trade-offs — and why UK-based aftercare matters.",
    overview: [
      "Treatment abroad can look cheaper up front, but full arch implants are a long-term commitment that needs follow-up, adjustments and aftercare. If something needs attention after you fly home, distance makes it harder and can add cost.",
      "With Fixed Teeth Solutions you get published UK pricing, finance options, GDC-registered clinicians, CQC-regulated clinics and aftercare at a clinic near you — supported by our own laboratory.",
    ],
    included: [
      "Published UK pricing & finance",
      "Aftercare at a clinic near you",
      "GDC-registered clinicians",
      "CQC-regulated clinics",
      "Our own dental laboratory",
      "No long-haul travel for follow-ups",
    ],
    whoHelps: [
      {
        title: "Considering travelling",
        body: "Weigh the true cost including travel, time and follow-up.",
      },
      {
        title: "Value aftercare",
        body: "Ongoing reviews and adjustments close to home.",
      },
      {
        title: "Want UK regulation",
        body: "Care under UK clinical and regulatory standards.",
      },
    ],
    faqs: [
      {
        q: "Isn't treatment abroad much cheaper?",
        a: "Headline prices can be lower, but factor in flights, accommodation, repeat trips and the cost of any aftercare back home. Our finance keeps UK treatment accessible.",
      },
      {
        q: "What if something goes wrong after I fly home?",
        a: "That's the key risk. With us, your clinic and clinician are nearby for reviews and adjustments.",
      },
      {
        q: "Can you help if I've had treatment abroad?",
        a: "Yes — we see patients who need assessment or aftercare following overseas treatment. Book a consultation and we'll advise honestly.",
      },
    ],
  },

  "periodontal-disease": {
    slug: "periodontal-disease",
    title: "Gum (Periodontal) Disease & Implants",
    metaTitle:
      "Periodontal (Gum) Disease — Fixed Teeth Solutions | Full Arch Dental Implant Specialists",
    metaDescription:
      "Advanced gum disease is a leading cause of tooth loss. When teeth can't be saved, full arch implants offer a fresh, stable start.",
    heroKicker: "Treatments",
    heroSub:
      "Advanced gum disease is a leading cause of tooth loss. When teeth can't be saved, full arch implants offer a fresh, stable start.",
    overview: [
      "Periodontal (gum) disease damages the bone and tissue that hold your teeth in place. In advanced cases, teeth become loose and may need to be removed. Full arch implants replace failing teeth with a fixed solution that doesn't rely on diseased tissue.",
      "Our clinicians assess your gum health and bone carefully and plan treatment to give your new smile the best possible foundation.",
    ],
    included: [
      "Assessment of gum and bone health",
      "Removal of unsalvageable teeth where needed",
      "Fixed teeth on healthy implants",
      "Advanced 3D planning around your bone",
      "Ongoing aftercare and reviews",
      "Our own laboratory support",
    ],
    whoHelps: [
      {
        title: "Loose teeth",
        body: "If gum disease has left teeth wobbly or drifting.",
      },
      {
        title: "Repeated problems",
        body: "If you're stuck in a cycle of treatment that isn't holding.",
      },
      {
        title: "Want a clean slate",
        body: "A fixed, healthy smile built on a stable foundation.",
      },
    ],
    faqs: [
      {
        q: "Can I have implants if I've had gum disease?",
        a: "Often yes. We assess and stabilise your gum health first, then plan implants where the bone allows.",
      },
      {
        q: "Will the disease affect my implants?",
        a: "Good oral care and regular reviews are essential. We guide and support you to keep your new smile healthy.",
      },
      {
        q: "Is treatment done in stages?",
        a: "Sometimes. Your clinician will explain a clear, step-by-step plan at your free consultation.",
      },
    ],
  },
};

/** Stable, ordered list of treatments for hubs and static params. */
export const TREATMENT_LIST: Treatment[] = [
  "dental-implants",
  "all-on-four-dental-implants",
  "full-mouth-dental-implants",
  "smile-in-a-day",
  "denture-alternatives",
  "dental-implants-abroad",
  "periodontal-disease",
].map((slug) => TREATMENTS[slug]);
