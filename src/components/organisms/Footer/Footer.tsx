import React from "react";
import FooterColumn from "./FooterColumn";
import FooterSubscribe from "./FooterSubscribe";
import FooterLinks from "./FooterLinks";
import {
  accountLinks,
  companyLinks,
  helpLinks,
  connectLinks,
  bottomLinks,
} from "../../../constants/footer";

const Footer: React.FC = () => {
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
