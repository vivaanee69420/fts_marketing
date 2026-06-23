import Link from "next/link";
import { NAV } from "@/lib/site";

/** Desktop nav with CSS-hover dropdowns (no JS). Hidden below lg. */
export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-7 xl:flex">
      {NAV.map((item) =>
        item.children ? (
          <div key={item.label} className="group relative inline-flex items-center">
            <button
              type="button"
              className="inline-flex items-center gap-[5px] whitespace-nowrap border-none bg-transparent p-0 font-sans text-[0.95rem] font-semibold text-ink2 group-hover:text-teal"
              aria-haspopup="true"
            >
              {item.label}
              <i className="text-[0.66rem] not-italic transition-transform group-hover:rotate-180">▾</i>
            </button>
            {/* outer wrapper: transparent pt-2 bridges the button→menu gap so
                the hover never breaks; inner div is the visible card */}
            <div className="invisible absolute left-1/2 top-full z-[70] -translate-x-1/2 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
              <div className="flex min-w-[250px] flex-col rounded-[14px] border border-line bg-white p-2 shadow-card">
                {item.children.map((c) => (
                  <Link
                    key={c.href + c.label}
                    href={c.href}
                    className="whitespace-nowrap rounded-[9px] px-[14px] py-[10px] text-[0.92rem] font-semibold text-ink2 hover:bg-soft hover:text-teal"
                  >
                    {c.label}
                    {c.sub && (
                      <small className="mt-px block text-[0.76rem] font-medium text-muted">
                        {c.sub}
                      </small>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href!}
            className="whitespace-nowrap text-[0.95rem] font-semibold text-ink2 hover:text-teal"
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}
