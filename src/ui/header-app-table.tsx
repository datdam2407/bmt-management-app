"use client"
import { usePathname } from "next/navigation";
import React from "react";


export default function HeaderAppTable() {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
            <div className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink" width="24"
                    height="24" x="0" y="0" viewBox="0 0 32 32"
                    fontStyle="enable-background:new 0 0 512 512"
                    xmlSpace="preserve" className=""><g><path
                        d="M17.295 10.256a.75.75 0 0 1 .942-.967l1.205.402.722-.361a.748.748 0 0 1 .614-.025l.972.389.972-.389a.755.755 0 0 1 .557 0l.972.389.972-.389a.755.755 0 0 1 .614.025l.722.361 1.205-.402a.747.747 0 0 1 .942.967l-.913 2.511a2.26 2.26 0 0 0-.504.099l-.615.205-.172-.086a2.274 2.274 0 0 0-1.001-.234c-.288 0-.568.054-.835.161l-.415.166-.416-.166a2.239 2.239 0 0 0-1.67-.001l-.415.166-.41-.164a2.235 2.235 0 0 0-.84-.163 2.28 2.28 0 0 0-1.008.238l-.165.083-.623-.208a2.278 2.278 0 0 0-.496-.096zM17.295 5.256a.75.75 0 0 1 .942-.967l1.205.402.722-.361a.748.748 0 0 1 .614-.025l.972.389.972-.389a.755.755 0 0 1 .557 0l.972.389.972-.389a.755.755 0 0 1 .614.025l.722.361 1.205-.402a.747.747 0 0 1 .942.967l-.913 2.511a2.26 2.26 0 0 0-.504.099l-.615.205-.172-.086A2.269 2.269 0 0 0 25.5 7.75c-.288 0-.568.054-.835.161l-.415.166-.416-.166a2.23 2.23 0 0 0-1.669 0l-.415.166-.41-.164a2.235 2.235 0 0 0-.84-.163 2.28 2.28 0 0 0-1.008.238l-.165.083-.623-.208a2.278 2.278 0 0 0-.496-.096zM9.25 11.756c1.338.025 2.568.134 3.75.3v11.885a31.202 31.202 0 0 1-3.75.302zM4 5.449V2.607C4 1.719 6.015 1 8.5 1s4.5.719 4.5 1.607v2.842a19.63 19.63 0 0 0-9 0z" fill="#ffffff" opacity="1" data-original="#000000" className=""></path><path d="M13 25.47v3.923C13 30.28 10.985 31 8.5 31S4 30.28 4 29.393V6.989a18.187 18.187 0 0 1 9 0v3.539a33.867 33.867 0 0 0-4.47-.278.754.754 0 0 0-.78.75v14c0 .444.405.746.84.75a33.77 33.77 0 0 0 4.41-.28zM17.295 15.256a.75.75 0 0 1 .942-.967l1.205.402.722-.361a.748.748 0 0 1 .614-.025l.972.389.972-.389a.755.755 0 0 1 .557 0l.972.389.972-.389a.755.755 0 0 1 .614.025l.722.361 1.205-.402a.747.747 0 0 1 .942.967l-2.861 7.869h-1.597L25.384 20H23.75v1.5a.75.75 0 0 1-1.5 0V20h-1.634l1.136 3.125h-1.597zM20.5 24.625h5V26.5a2.5 2.5 0 1 1-5 0z" fill="#ffffff"
                            opacity="1" data-original="#000000" className=""></path></g></svg>
            </div>
            <div className="flex gap-x-1 text-sm font-medium">
                <div>
                    <span className="px-2 text-gray-400">Badminton</span>
                </div>
                {pathname ? (
                    <>
                        <span className="text-gray-600">/</span>
                        {pathname
                            .split('/')
                            .slice(2)
                            .map((segment) => {
                                return (
                                    <React.Fragment key={segment}>
                                        <span>
                                            <span
                                                key={segment}
                                                className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100"
                                            >
                                                {segment}
                                            </span>
                                        </span>

                                        <span className="text-gray-600">/</span>
                                    </React.Fragment>
                                );
                            })}
                    </>
                ) : null}

            </div>
        </div>
    )
}