export const metadata = { title: "Admin", robots: { index: false, follow: false } };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-soft">
      <div className="mx-auto max-w-[1100px] px-6 py-8">{children}</div>
    </div>
  );
}
