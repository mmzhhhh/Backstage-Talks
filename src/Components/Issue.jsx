export default function Issue({ img, id, number, available, link }) {
  return (
    <section
      id={id}
      className=" w-full flex items-center justify-center h-screen flex-col"
    >
      <img src={img} alt={id} className="max-w-[344px] md:max-w-[420px] " />
      <p className=" text-sm font-bold mb-4">Issue #{number}</p>
      {available && (
        <p className={`${number===6?"text-pink":"text-white"} hover:underline text-xs font-bold mb-4`}>
          <a href={link}>BUY HERE</a>
        </p>
      )}
      <p className="text-xs font-bold text-center p-4 md:p-0">
        {available
          ? "or in "
          : "If you are lucky, you may get the last pieces in "}
        <a
          className={`${number===6?"text-pink":"text-white"} hover:underline`}
          href="https://backstagetalks.com/stocklist.php"
        >
          selected stores.
        </a>
      </p>
    </section>
  );
}
