import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© Popcorn Time 2026</p>
        <Image
          src="/popcorn.png"
          alt="Logo"
          width={32}
          height={32}
          className="w-auto h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
