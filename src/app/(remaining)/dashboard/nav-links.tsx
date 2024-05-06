//@ts-nocheck
'use client';
 

import 
{ FaAndroid, FaComputer, FaHouseUser, FaBook, FaChartLine} from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();

  const links =[
    {
        name: "Home",
        href:"/dashboard",
        icon: <FaHouseUser className="w-6"/>
    },
    {
        name: "Create app",
        href:"/dashboard/addApp",
        icon: <FaAndroid className="w-6"/>
    },
    {
        name: "Create saas",
        href:"/dashboard/addSaas",
        icon:<FaComputer className="w-6"/>
    },
    {
        name: "Create course",
        href:"/dashboard/addCourse",
        icon:<FaBook className="w-6"/>
    },
    {
        name: "analytics",
        href:"/dashboard/analytics",
        icon:<FaChartLine className="w-6"/>
    }
  ]
 
  return (
    <div  className="mt-[3rem] ml-[1rem]">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'mt-[1rem] py-4 px-3 flex grow items-center justify-center gap-5 rounded-md bg-[#fff] text-sm font-medium hover:bg-[#ccc] hover:text-[#000] md:flex-none md:justify-start ',
              {
                'bg-[#ccc] text-[#000]': pathname === link.href,
              },
            )}
          >
            {link.icon}
            <p className="hidden md:block mt-1">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}