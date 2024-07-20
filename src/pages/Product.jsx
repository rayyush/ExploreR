import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About ExploreR.</h2>
          <p>
            ExploreR is your personal travel companion, meticulously documenting
            your global adventures. Seamlessly record every city and country
            you've explored with detailed notes, dates, and memories. Whether
            you're a seasoned traveler or just starting your journey, our
            intuitive interface lets you effortlessly log your travels, complete
            with interactive maps that showcase your travel milestones. Share
            your experiences with friends and family, or keep your travel diary
            private. With ExploreR, relive your adventures, gain insights into
            your travel patterns, and inspire future journeys. Start your
            virtual passport today and embark on a journey of memories and
            discovery.
          </p>
        </div>
      </section>
    </main>
  );
}
