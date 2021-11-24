import styles from '../../styles/Row9.module.css'

const elements = [
  {
    name: "Nickel",
    symbol: "Nl",
    id: 1,
  },
  {
    name: "Copper",
    symbol: "Co",
    id: 2,
  },
  {
    name: "Zinc",
    symbol: "Zn",
    id: 3,
  },
  {
    name: "Gallium",
    symbol: "G",
    id: 4,
  },
  {
    name: "Germanium",
    symbol: "Gm",
    id: 5,
  },
  {
    name: "Arsenic",
    symbol: "Ar",
    id: 6,
  },
  {
    name: "Selenium",
    symbol: "NL",
    id: 7,
  },
  {
    name: "Bromine",
    symbol: "Be",
    id: 8,
  },
  {
    name: "Krypton",
    symbol: "Kt",
    id: 9,
  },
  {
    name: "Rubidium",
    symbol: "Ru",
    id: 10,
  },
  {
    name: "Strontium",
    symbol: "NL",
    id: 11,
  },
  {
    name: "Yttrium",
    symbol: "NL",
    id: 12,
  },
  {
    name: "Zirconium",
    symbol: "Sn",
    id: 13,
  },
  {
    name: "Niobium",
    symbol: "Js",
    id: 14,
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    id: 15,
  },
  {
    name: "Technetium",
    symbol: "Tc",
    id: 16,
  },
  {
    name: "Rhodium",
    symbol: "Rh",
    id: 17,
  },
  {
    name: "Palladium",
    symbol: "Pd",
    id: 18,
  },
  {
    name: "Nickel",
    symbol: "Nl",
    id: 19,
  },
  {
    name: "Copper",
    symbol: "Co",
    id: 20,
  },
  {
    name: "Zinc",
    symbol: "Zn",
    id: 21,
  },
  {
    name: "Gallium",
    symbol: "G",
    id: 22,
  },
  {
    name: "Germanium",
    symbol: "Gm",
    id: 23,
  },
  {
    name: "Arsenic",
    symbol: "Ar",
    id: 24,
  },
  {
    name: "Selenium",
    symbol: "NL",
    id: 25,
  },
  {
    name: "Bromine",
    symbol: "Be",
    id: 26,
  },
  {
    name: "Krypton",
    symbol: "Kt",
    id: 27,
  },
  {
    name: "Rubidium",
    symbol: "Ru",
    id: 28,
  }
];


function Row9() {
    return (
      <div className={styles.row4Container}>
        <div className={styles.content}>
          <div className={styles.left}>
            {elements.map((element) => (
              <div key={element.id} className={styles.box1}>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>{element.symbol}</h2>
                  <p className={styles.elementname}>{element.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Row9
