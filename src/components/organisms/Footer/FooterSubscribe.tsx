import Image from "../../atoms/Image";
const FooterSubscribe: React.FC = () => {
  return (
    <form className="flex items-start p-5 min-w-[240px] max-md:max-w-full">
      <label htmlFor="emailInput" className="sr-only">
        Email Address
      </label>
      <input
        type="email"
        id="emailInput"
        placeholder="Email Address"
        className="gap-2.5 self-stretch px-4 py-5 text-sm tracking-widest leading-tight bg-white border border-solid border-zinc-300 min-w-[240px] text-neutral-500 w-[388px]"
        aria-label="Email Address"
      />
      <button
        type="submit"
        className="flex overflow-hidden gap-2.5 items-center px-3.5 py-4 border border-solid bg-neutral-800 border-neutral-800 h-[53px] w-[52px]"
        aria-label="Subscribe"
      >
        <Image
          loading="lazy"
          src="/ArrowRight.png"
          className="object-contain w-6 aspect-square"
          alt=""
        />
      </button>
    </form>
  );
};

export default FooterSubscribe;
