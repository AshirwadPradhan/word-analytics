function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} heading="words" />
      <Stat number={stats.numberOfChars} heading="characters" />
      <Stat number={stats.instagramCharsLeft} heading="instagram" />
      <Stat number={stats.facebookCharsLeft} heading="facebook" />
    </section>
  );
}

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}

export default Stats;
