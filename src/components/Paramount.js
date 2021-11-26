import styles from '../../styles/Paramount.module.css'
import { RiArrowLeftDownLine } from 'react-icons/ri'

function Paramount({ para }) {
  return (
    <>
      <div className={styles.paramountContainer}>
        <div className={styles.content}>
          {para.results.map((p) => (
            <div key={p.title} className={styles.box1}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{p.title.slice(1, 3)}</h2>
                <p className={styles.elementname}>{p.title}</p>
              </div>
            </div>
          ))}
          {para.results.map((p) => (
            <div key={p.title} className={styles.box1}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{p.title.slice(1, 3)}</h2>
                <p className={styles.elementname}>{p.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.text}>
          <h1>
            PARAMOUNT <br /> <span className={styles.tel}>TELE</span>MENTS
          </h1>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <RiArrowLeftDownLine className={styles.arrow} />
      </div>
    </>
  );
}


export default Paramount
