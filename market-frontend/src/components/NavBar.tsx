import Image from "next/image";
import { NavItem } from "./NavItem";
import { AptosConnect } from "./AptosConnect";

export function NavBar() {
  return (
    <nav className="navbar py-4 px-4 bg-base-100">
      <div className="flex-1">
        {/* <Image src="/logo.svg" width={203} height={64} alt="logo" /> */}
        Nifty Valley
        <ul className="menu menu-horizontal p-0 ml-5">
          <NavItem href="/" title="Home" />
          <NavItem href="/mint" title="Mint" />
          <NavItem href="/dashboard" title="Dashboard" />
          <NavItem href="/team" title="Our Team" />
          <NavItem href="/team" title="Apply for Launchpad" />
          <NavItem href="/team" title="Verify Your Collection" />
        </ul>
      </div>
      <AptosConnect />
    </nav>
  );
}
