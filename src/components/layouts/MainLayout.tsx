export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-vica-gradient flex min-h-screen items-center justify-center p-6">
      <div className="h-[85vh] w-[70vw] overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex h-full flex-col">
          <header className="h-16 border-b">Navbar</header>

          <div className="flex flex-1 overflow-hidden">
            <aside className="w-[10vw] border-r">Sidebar</aside>

            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
