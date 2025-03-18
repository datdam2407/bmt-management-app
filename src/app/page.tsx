import Link from "next/link";
import { mainbar } from "../lib/mainbar";
import LatestPage from "../app/sheet-data-latest-date/page";

export default function MainPage() {
  return (
    <div className="space-y-4">
      {/* <h1 className="text-xl font-medium text-gray-500">Badminton Payment</h1> */}
      <div className="space-y-10 text-white">
        {mainbar.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-black-200 group:hover:text-black-50">
                        {item.name}
                      </div>

                      {item.description && (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <LatestPage />

    </div>
  );
}
