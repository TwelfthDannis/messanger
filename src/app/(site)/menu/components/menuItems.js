"use client"
import {usePathname} from "next/navigation";

export default function MenuItems() {
    const menuItems = ["Chat", "Setting"];
    const pathname = usePathname().split('/')[1];

    const svgPaths = {
        "Chat": "M12  20.25c4.97  0  9-3.694  9-8.25s-4.03-8.25-9-8.25S3  7.444  3  12c0  2.104.859  4.023  2.273  5.48.432.447.74  1.04.586  1.641a4.483  4.483  0  0  1-.923  1.785A5.969  5.969  0  0  0  6  21c1.282  0  2.47-.402  3.445-1.087.81.22  1.668.337  2.555.337Z",
        "Setting": "M9.594  3.94c.09-.542.56-.94  1.11-.94h2.593c.55  0  1.02.398  1.11.94l.213  1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257  1.075.124l1.217-.456a1.125  1.125  0  0  1  1.37.49l1.296  2.247a1.125  1.125  0  0  1-.26  1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723  7.723  0  0  1  0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26  1.43l-1.298  2.247a1.125  1.125  0  0  1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47  6.47  0  0  1-.22.128c-.331.183-.581.495-.644.869l-.213  1.281c-.09.543-.56.94-1.11.94h-2.594c-.55  0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52  6.52  0  0  1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125  1.125  0  0  1-1.369-.49l-1.297-2.247a1.125  1.125  0  0  1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932  6.932  0  0  1  0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125  1.125  0  0  1-.26-1.43l1.297-2.247a1.125  1.125  0  0  1  1.37-.491l1.216.456c.356.133.751.072  1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    };

    return (
        <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
                <li key={index}>
                    <button className={`${pathname === item.toLowerCase() ? "ActiveBtn linkMenu" : "linkMenu"}`}
                            disabled={pathname === item.toLowerCase()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24" strokeWidth="2"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d={svgPaths[item]} />
                            {item === "Setting" &&
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15  12a3  3  0  1  1-6  0  3  3  0  0  1  6  0Z"/>
                            }
                        </svg>
                        <span className="spanMenu">{item}</span>
                    </button>
                </li>
            ))}
        </ul>
    );
}
