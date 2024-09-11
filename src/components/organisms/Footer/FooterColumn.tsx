import React from 'react';

interface LinkItem {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col flex-1 shrink p-5 basis-0">
      <h2 className="text-base font-semibold tracking-wide text-neutral-800">
        {title}
      </h2>
      <nav className="flex flex-col mt-5 w-full text-sm tracking-widest leading-tight text-neutral-500">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={index > 0 ? 'mt-2.5' : ''}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterColumn;