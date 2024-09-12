import React from "react";
import { ILinkItem } from "../../../interfaces/IFooter";

interface IFooterLinksProps {
  links: ILinkItem[];
}

const FooterLinks: React.FC<IFooterLinksProps> = ({ links }) => {
  return (
    <nav className="flex flex-wrap gap-6 justify-center items-start w-full py-4 text-xs tracking-wide leading-none text-center text-neutral-500 max-md:max-w-full">
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;
