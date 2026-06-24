"use client";
import { useState } from "react";

export function CoverImageUpload({
  initialUrl = "", initialAlt = "",
}: { initialUrl?: string; initialAlt?: string }) {
  const [url, setUrl] = useState(initialUrl);
  const [busy, setBusy] = useState(false);
  const field = "w-full rounded-[10px] border border-line px-3 py-2";

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/admin/images", { method: "POST", body: fd });
      if (!res.ok) { alert("Upload failed"); return; }
      const { url: u } = await res.json();
      setUrl(u);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-2">
      <input type="hidden" name="coverImageUrl" value={url} readOnly />
      <input className={field} name="coverImageAlt" placeholder="Image Alt (alt attribution text)" defaultValue={initialAlt} />
      <div className="flex items-center gap-3">
        <label className="cursor-pointer rounded-[10px] border border-line px-3 py-2 text-sm font-semibold">
          {busy ? "Uploading…" : "Choose File"}
          <input type="file" accept="image/*" className="hidden" onChange={onPick} />
        </label>
        {url && <img src={url} alt="" className="h-12 w-20 rounded object-cover" />}
      </div>
    </div>
  );
}
