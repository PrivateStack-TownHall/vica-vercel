import Leftbar from "../navigation/Leftbar";
import Navbar from "../navigation/Navbar";
import Bottombar from "../navigation/Bottombar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        bg-vica-gradient
        flex
        min-h-screen
        items-center
        justify-center
        p-0
        md:p-6
      "
    >
      <div
        className="
          vica-shell
          flex
          h-screen
          w-full
          flex-col
          overflow-hidden
          rounded-none
          md:h-[90vh]
          md:w-[80vw]
          md:max-w-[1400px]
          md:rounded-xl
        "
      >
        <Navbar />

        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="hidden md:flex">
            <Leftbar />
          </div>

          <main
            className="
              min-h-0
              flex-1
              overflow-y-auto
              p-4
              pb-24
              md:p-8
              md:pb-8
            "
          >
            {children}
          </main>
        </div>

        <div className="md:hidden">
          <Bottombar />
        </div>
      </div>
    </div>
  );
}
