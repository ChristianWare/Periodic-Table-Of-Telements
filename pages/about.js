import styles from "../styles/About.module.css";
import Layout from "../src/components/Layout";
import Link from "next/link";

function about({}) {
  return (
    <Layout title='About Telements'>
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <div className={styles.lines}></div>
          <h1>ABOUT TELEMENTS</h1>
          <div className={styles.lines2}></div>
          <div className={styles.metaInfo}>
            <p>
              The Periodic Table of Telements (televion + elements =
              &quot;tele&quot;ments) is a reference chart showing the most up to
              date movie data from each major streaming platform. It is
              organized so that you can quickly get information on individual
              telements such as their title, brief overview, runtime, release
              date, and average viewer rating. So if you are looking for
              something to watch, why not give telemets a try?
            </p>

            <h1>Netflix</h1>
            <p>
              Netflix, Inc. is an American subscription streaming service and
              production company. Launched on August 29, 1997, it offers a
              library of films and television series through distribution deals
              as well as its own productions, known as Netflix Originals.
            </p>
            <h1>Hulu</h1>
            <p>
              Hulu is an American streaming platform owned by The Walt Disney
              Company. Launched on October 29, 2007, It offers a library of
              films and television series from networks such as CBS, ABC, NBC,
              or FX, as well as Hulu original content.
            </p>
            <h1>Prime</h1>
            <p>
              Amazon Prime Video, or simply Prime Video, is a subscription video
              on-demand over-the-top streaming and rental service of Amazon.com,
              Inc., offered as a standalone service or as part of Amazon&rsquo;s
              Prime subscription.
            </p>
            <h1>HBO Max</h1>
            <p>
              HBO Max is an American subscription video on demand streaming
              service owned by AT&T&rsquo;s WarnerMedia, through its WarnerMedia
              Direct subsidiary.
            </p>
            <h1>Disney</h1>
            <p>
              Disney+ is an American subscription video on-demand over-the-top
              streaming service owned and operated by the Media and
              Entertainment Distribution division of The Walt Disney Company.
            </p>
            <h1>Paramount</h1>
            <p>
              Paramount+ is a subscription video on-demand over-the-top
              streaming service owned and operated by ViacomCBS Streaming, a
              division of ViacomCBS. It offers original and library content from
              the CBS Entertainment Group and ViacomCBS Domestic Media Networks
              broadcast properties, as well as the Paramount Pictures library.
            </p>
            <h1>Peacock</h1>
            <p>
              Peacock is an American over-the-top video streaming service owned
              and operated by the Television and Streaming division of
              NBCUniversal, a subsidiary of Comcast. Named after the NBC logo,
              the service launched on July 15, 2020.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default about;
