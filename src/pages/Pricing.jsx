// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Enjoy premium features without breaking the bank with our affordable
            subscription. Access exclusive content, enhanced tools, and priority
            support at a fraction of the cost. Elevate your experience without
            compromising your budget. Subscribe today and unlock a world of
            value.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
