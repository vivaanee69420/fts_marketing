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
    role: "Dental Implantologist",
    bio: "Specialises in dental implants and advanced restorative dentistry, combining clinical expertise with a patient-focused approach to deliver functional, natural-looking results.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1a109a1ab49dcf8fea.png",
  },
  {
    slug: "pedro-laranjeira",
    name: "Pedro Laranjeira",
    role: "Implant & Restorative Dentist",
    bio: "Provides advanced implant, aesthetic and full mouth rehabilitation treatments, combining extensive clinical experience with a focus on exceptional patient outcomes.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1aae7d47683914f56c.png",
  },
  {
    slug: "nicolas-montagnat-rentier",
    name: "Nicolas Montagnat-Rentier",
    role: "Restorative & Implant Dentist",
    bio: "Designs and delivers advanced restorative and implant treatments, helping patients achieve healthy, functional and natural-looking smiles.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aad1a72499097121f5a03.png",
  },
  {
    slug: "marta-ribeiro",
    name: "Marta Ribeiro",
    role: "Oral Surgery & Implant Dentist",
    bio: "Performs complex extractions, implant treatments and restorative procedures, ensuring every patient feels informed, comfortable and confident throughout their journey.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3aae7f659bec99fcaf1006.png",
  },
  {
    slug: "shreyas-mhatre",
    name: "Shreyas Mhatre",
    role: "Dental Implantologist & Invisalign Provider",
    bio: "Combines expertise in dental implants, full mouth rehabilitation and Invisalign treatment to deliver exceptional aesthetic and functional outcomes.",
    photo: "https://assets.cdn.filesafe.space/M2XSNIR4apA5H3xESZuY/media/6a3ab0512ed3b9e323b6fbdd.png",
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}
