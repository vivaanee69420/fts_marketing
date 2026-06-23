import { CONFIG, gbp } from "@/lib/config";

export function PromoBar() {
  return (
    <div className="bg-ink px-3 py-2 text-center text-[0.82rem] font-medium text-[#dceee9]">
      Free consultation + 3D scan &nbsp;·&nbsp;{" "}
      <b className="text-gold">Callback within 60 minutes</b> (8am–8pm) &nbsp;·&nbsp; Finance from{" "}
      <b className="text-gold">{gbp(CONFIG.financeFrom)}/mo</b>
    </div>
  );
}
