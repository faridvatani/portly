import Link from "next/link";

const navItems = [
  { href: "#", title: "Home" },
  { href: "#", title: "Projects" },
  { href: "#", title: "About" },
  { href: "#", title: "Contact" },
];

export const Header = () => {
  return (
    <header className="fixed flex justify-center items-center top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="nav-item active">
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
