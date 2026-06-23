import Image from "next/image";
import { getTeamMember } from "@/lib/team";
import { formatDate } from "@/lib/blog/format";

export function AuthorByline({ authorSlug, authorName, date }: {
  authorSlug?: string; authorName?: string; date: Date | string;
}) {
  const member = authorSlug ? getTeamMember(authorSlug) : undefined;
  const name = member?.name ?? authorName;
  return (
    <div className="flex items-center gap-3 text-sm text-muted">
      {member?.photo && (
        <Image src={member.photo} alt={name ?? ""} width={40} height={40}
          className="h-10 w-10 rounded-full object-cover" />
      )}
      <span>
        {name && <span className="font-semibold text-ink">{name}</span>}
        {name && " · "}
        {formatDate(date)}
      </span>
    </div>
  );
}
