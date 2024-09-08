export default function Footer() {
  return (
    <footer>
      {/* description */}
      <div className="md:fixed block bottom-4 left-4 max-w-80">
        <p className=" font-extrabold text-xs lg:text-sm leading-5">
          Backstage Talks is a magazine <br />
          of casual, but in depth dialogues
          <br /> on design and business. Our decisions
          <br /> shape and influence this complex
          <br />
          world—to have a chance to make the
          <br /> right ones, we need to talk.
        </p>
        <small className=" text-xs font-light">
          &copy;&nbsp;2024&nbsp;
          <a
            href="https://milk.sk/"
            target="_blank"
            rel="noreferrer"
            className=" underline hover:no-underline"
          >
            Published by studio Milk
          </a>
        </small>
        <br />
        <br />
        <p className=" underline hover:no-underline font-bold text-sm">
          <a href="https://backstagetalks.com/privacy-policy.php">
            Privacy Policy
          </a>
        </p>
      </div>

      {/* contact */}
      <p className=" hidden md:block md:fixed right-4 top-4 text-sm font-bold ">
        <a href="mailto:info@backstagetalks.com">info@backstagetalks.com</a>
      </p>
    </footer>
  );
}
