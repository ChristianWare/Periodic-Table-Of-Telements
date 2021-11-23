import styles from "../../styles/PeriodicTable.module.css";
import data from "../../PeriodicTable.json";

const colorMap = {
  "amazon prime": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "netflix": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

function PeriodicTable() {
  return (
    <div className={styles.periodicTable}>
      {data.elements.map((element) => (
        <div
        className={styles.element}
          key={element.name}
          style={{
            gridColumn: element.xpos, 
            gridRow: element.ypos,
            borderColor: colorMap[element.category],
          }}
        >
          <strong>{element.symbol}</strong>
          <small className={styles.number}>{element.number}</small>
          <small className={styles.name}>{element.name}</small>
        </div>
      ))}
    </div>
  );
}

export default PeriodicTable;
