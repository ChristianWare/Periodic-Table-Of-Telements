import styles from "../../styles/Row4567.module.css";

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
    id: 199990,
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
    id: 14443,
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
    name: "Pickel",
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
    id: 30,
  },
  {
    name: "Gallium",
    symbol: "G",
    id: 40,
  },
  {
    name: "Germanium",
    symbol: "Gm",
    id: 50,
  },
  {
    name: "Arsenic",
    symbol: "Ar",
    id: 60,
  },
  {
    name: "Selenium",
    symbol: "NL",
    id: 70,
  },
  {
    name: "Bromine",
    symbol: "Be",
    id: 80,
  },
  {
    name: "Krypton",
    symbol: "Kt",
    id: 90,
  },
  {
    name: "Rubidium",
    symbol: "Ru",
    id: 100,
  },
  {
    name: "Strontium",
    symbol: "NL",
    id: 110,
  },
  {
    name: "Yttrium",
    symbol: "NL",
    id: 120,
  },
  {
    name: "Zirconium",
    symbol: "Sn",
    id: 13,
  },
  {
    name: "Niobium",
    symbol: "Js",
    id: 414,
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    id: 155,
  },
  {
    name: "Technetium",
    symbol: "Tc",
    id: 166,
  },
  {
    name: "Rhodium",
    symbol: "Rh",
    id: 187,
  },
  {
    name: "Palladium",
    symbol: "Pd",
    id: 138,
  },
  {
    name: "Qickel",
    symbol: "Nl",
    id: 1888,
  },
  {
    name: "Copper",
    symbol: "Co",
    id: 2888,
  },
  {
    name: "Zinc",
    symbol: "Zn",
    id: 3888,
  },
  {
    name: "Gallium",
    symbol: "G",
    id: 4888,
  },
  {
    name: "Germanium",
    symbol: "Gm",
    id: 5888,
  },
  {
    name: "Arsenic",
    symbol: "Ar",
    id: 6888,
  },
  {
    name: "Selenium",
    symbol: "NL",
    id: 7888,
  },
  {
    name: "Bromine",
    symbol: "Be",
    id: 8888,
  },
  {
    name: "Krypton",
    symbol: "Kt",
    id: 9888,
  },
  {
    name: "Rubidium",
    symbol: "Ru",
    id: 19990,
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
    id: 133,
  },
  {
    name: "Niobium",
    symbol: "Js",
    id: 14444,
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
    name: "Yickel",
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
    id: 30,
  },
  {
    name: "Gallium",
    symbol: "G",
    id: 40,
  }
];

function Row4567() {
  return (
    <div className={styles.row4Container}>
      <div className={styles.content}>
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
  );
}

export default Row4567;
