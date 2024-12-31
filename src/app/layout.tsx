import "../app/globals.css";
import { GlobalNav } from "../ui/global-nav";
import { Metadata } from 'next';
import HeaderAppTable from "../ui/header-app-table";


export const metadata: Metadata = {
  title: "Badminton Group",
  description: "Generated Badminton",
  icons: "../ui/badminton.png",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <HeaderAppTable />
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-3">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
