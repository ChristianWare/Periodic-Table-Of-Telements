import styles from "../../styles/Netflix.module.css";

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
    name: "Pickel",
    symbol: "Nl",
    id: 19,
  },
  {
    name: "Copper2",
    symbol: "Co",
    id: 20,
  },
  {
    name: "Zinc2",
    symbol: "Zn",
    id: 21,
  },
  {
    name: "Gallium45",
    symbol: "G",
    id: 22,
  },
  {
    name: "Germanium45",
    symbol: "Gm",
    id: 23,
  },
  {
    name: "Arsenic45",
    symbol: "Ar",
    id: 24,
  },
  {
    name: "Selenium45",
    symbol: "NL",
    id: 25,
  },
  {
    name: "Bromine45",
    symbol: "Be",
    id: 26,
  },
  {
    name: "Krypton45",
    symbol: "Kt",
    id: 27,
  },
  {
    name: "Rubidium45",
    symbol: "Ru",
    id: 28,
  },
  {
    name: "Strontium45",
    symbol: "NL",
    id: 29,
  },
  {
    name: "Yttrium45",
    symbol: "NL",
    id: 30,
  },
  {
    name: "Zirconium45",
    symbol: "Sn",
    id: 31,
  },
  {
    name: "Niobium45",
    symbol: "Js",
    id: 32,
  },
  {
    name: "Molybdenum45",
    symbol: "Mo",
    id: 33,
  },
  {
    name: "Technetium45",
    symbol: "Tc",
    id: 34,
  },
  {
    name: "Rhodium45",
    symbol: "Rh",
    id: 35,
  },
  {
    name: "Palladium45",
    symbol: "Pd",
    id: 36,
  },
  {
    name: "Qickel45",
    symbol: "Nl",
    id: 37,
  },
  {
    name: "Copper3",
    symbol: "Co",
    id: 38,
  },
  {
    name: "Zinc3",
    symbol: "Zn",
    id: 39,
  },
  {
    name: "Gallium555",
    symbol: "G",
    id: 40,
  },
  {
    name: "Germanium555",
    symbol: "Gm",
    id: 41,
  },
  {
    name: "Arseni555c",
    symbol: "Ar",
    id: 42,
  },
  {
    name: "Selenium555",
    symbol: "NL",
    id: 43,
  },
  {
    name: "Bromine555",
    symbol: "Be",
    id: 44,
  },
  {
    name: "Krypton555",
    symbol: "Kt",
    id: 45,
  },
  {
    name: "Rubidium555",
    symbol: "Ru",
    id: 46,
  },
  {
    name: "Strontium555",
    symbol: "NL",
    id: 47,
  },
  {
    name: "Yttrium555",
    symbol: "NL",
    id: 48,
  },
  {
    name: "Zirconium555",
    symbol: "Sn",
    id: 49,
  },
  {
    name: "Niobium555",
    symbol: "Js",
    id: 50,
  },
  {
    name: "Molybdenum555",
    symbol: "Mo",
    id: 51,
  },
  {
    name: "Technetium555",
    symbol: "Tc",
    id: 52,
  },
  {
    name: "Rhodium555",
    symbol: "Rh",
    id: 53,
  },
  {
    name: "Palladium555",
    symbol: "Pd",
    id: 54,
  },
  {
    name: "Yickel555",
    symbol: "Nl",
    id: 55,
  },
  {
    name: "Copper4",
    symbol: "Co",
    id: 56,
  },
  {
    name: "Zinc4",
    symbol: "Zn",
    id: 57,
  },
  {
    name: "Sallium",
    symbol: "G",
    id: 58,
  }
];

function Netflix() {
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

export default Netflix;
