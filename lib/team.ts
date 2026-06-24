export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "gaurav-mehta",
    name: "Gaurav Mehta",
    role: "Lead Implant Specialist",
    bio: "Leads complex implant and full arch rehabilitation cases, combining advanced digital planning, guided surgery and extensive clinical experience to deliver predictable, life-changing results.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1b181eb301d443d726.png",
  },
  {
    slug: "rami-daoui",
    name: "Rami Daoui",
    role: "Restorative & Cosmetic Lead",
    bio: "Designs and fits your bridge for the perfect bite, fit and natural-looking finish.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1a109a1ab49dcf8fea.png",
  },
  {
    slug: "pedro-laranjeira",
    name: "Pedro Laranjeira",
    role: "Patient Coordinator",
    bio: "Your point of contact from first enquiry to aftercare — answering questions and arranging your visits.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1aae7d47683914f56c.png",
  },
  {
    slug: "nicolas-montagnat-rentier",
    name: "Nicolas Montagnat-Rentier",
    role: "In-house Laboratory",
    bio: "Crafts your fixed teeth in our own lab for precise fit, function and aesthetics.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1a72499097121f5a03.png",
  },
  {
    slug: "marta-ribeiro",
    name: "Marta Ribeiro",
    role: "Clinical Care",
    bio: "Supports your treatment and recovery, keeping you comfortable at every step.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aae7f659bec99fcaf1006.png",
  },
  {
    slug: "shreyas-mhatre",
    name: "Shreyas Mhatre",
    role: "Operations",
    bio: "Makes sure every clinic runs smoothly so your care is seamless.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3ab0512ed3b9e323b6fbdd.png",
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}
