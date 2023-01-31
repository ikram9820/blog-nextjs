import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.webp"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ikram</h1>
      <p>
        I blog about AI - especially Deep Learning content like Genrative AI,
        Object Detection and Image Calsification etc.
      </p>
    </section>
  );
}

export default Hero;
