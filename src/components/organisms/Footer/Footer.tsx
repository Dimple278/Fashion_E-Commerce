import React from "react";
import FooterColumn from "./FooterColumn";
import FooterSubscribe from "./FooterSubscribe";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
  const accountLinks = [
    { text: "Log In", href: "#" },
    { text: "Sign Up", href: "#" },
    { text: "Redeem a Gift Card", href: "#" },
  ];

  const companyLinks = [
    { text: "About", href: "#" },
    { text: "Environmental Initiatives", href: "#" },
    { text: "Factories", href: "#" },
    { text: "DEI", href: "#" },
    { text: "Careers", href: "#" },
    { text: "International", href: "#" },
    { text: "Accessibility", href: "#" },
  ];

  const helpLinks = [
    { text: "Help Center", href: "#" },
    { text: "Return Policy", href: "#" },
    { text: "Shipping Info", href: "#" },
    { text: "Bulk Orders", href: "#" },
  ];

  const connectLinks = [
    { text: "Facebook", href: "#" },
    { text: "Instagram", href: "#" },
    { text: "Twitter", href: "#" },
    { text: "Affiliates", href: "#" },
    { text: "Our Stores", href: "#" },
  ];

  const bottomLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Do Not Sell or Share My Personal Information", href: "#" },
    { text: "CS Supply Chain Transparency", href: "#" },
    { text: "Vendor Code of Conduct", href: "#" },
    { text: "Sitemap Pages", href: "#" },
    { text: "Sitemap Products", href: "#" },
  ];

  return (
    <footer className="flex flex-col self-stretch px-20 pt-10 bg-stone-100 max-md:px-5">
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <FooterColumn title="Account" links={accountLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Get Help" links={helpLinks} />
        <FooterColumn title="Connect" links={connectLinks} />
        <FooterSubscribe />
      </div>
      <FooterLinks links={bottomLinks} />
      <div className="mt-4 text-xs tracking-wide leading-none text-center text-neutral-500 max-md:max-w-full">
        © 2023 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
