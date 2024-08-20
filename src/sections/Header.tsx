import Link from "next/link";
import { twMerge } from "tailwind-merge";

const navItems = [
  { href: "#", title: "Home", isActive: false },
  { href: "#", title: "Projects", isActive: false },
  { href: "#", title: "About", isActive: false },
  { href: "#", title: "Contact", isActive: true },
];

export const Header = () => {
  return (
    <header className="fixed flex justify-center items-center top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={twMerge("nav-item", item.isActive === true && "active")}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
