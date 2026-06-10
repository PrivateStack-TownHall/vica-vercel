import Leftbar from "../navigation/Leftbar";
import Navbar from "../navigation/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-vica-gradient flex min-h-screen items-center justify-center p-6">
      <div className="vica-shell h-[90vh] w-[100vw] md:w-[90vw] lg:w-[75vw] overflow-hidden rounded-xl">
        <Navbar />
        <div className=" flex h-full">
          <Leftbar />

          <div className="flex flex-1 flex-col">
            <main className="flex-1 overflow-auto p-8">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
