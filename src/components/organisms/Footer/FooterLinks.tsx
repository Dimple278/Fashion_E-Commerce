import React from 'react';

interface LinkItem {
  text: string;
  href: string;
}

interface FooterLinksProps {
  links: LinkItem[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
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