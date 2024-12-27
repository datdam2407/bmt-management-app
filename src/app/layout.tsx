
import "../styles/global.css";
import { GlobalNav } from "../ui/global-nav";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Badminton App",
  description: "Generated Badminton",
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
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
