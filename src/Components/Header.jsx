import logo from "../assests/images/logo.png";

export default function Header() {
  return (
    <header className=" fixed top-4 left-4 w-[160px] md:w-[260px] z-50">
      <img
        src={logo}
        alt="Backstage Talks"
        className="h-auto border-none bg-transparent cursor-default "
      />
    </header>
  );
}
