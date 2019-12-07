import convert from "convert-units";
import data from "./ciqual.json";

function calcTeneur(value, teneur = "", unit = "g") {
  const covertedValue = convert(value)
    .from(unit)
    .to("g");

  const parsedTeneur = parseFloat(teneur.replace(",", "."));

  const result = !parsedTeneur ? teneur : (covertedValue * parsedTeneur) / 100;

  return result.toString();
}

export function getAlimentsByName(name, length) {
  return new Promise(resolve => {
    const alims = data.aliments.filter(
      a =>
        a.alimNomFr.toUpperCase().includes(name.toUpperCase()) ||
        a.alimNomEng.toUpperCase().includes(name.toUpperCase())
    );

    const results = length ? alims.slice(0, length) : alims;

    resolve(results);
  });
}

export function getAlimentByCode(code) {
  return new Promise(resolve => {
    const alim = data.aliments.find(a => a.alimCode === code);

    if (!alim) {
      resolve();
    }

    getCompositionByAlimentId((alim && alim.alimCode) || "").then(
      composition => {
        resolve(
          alim && {
            ...alim,
            composition
          }
        );
      }
    );
  });
}

export function getCompositionByAlimentId(alimCode, value, unit) {
  return new Promise(resolve => {
    const result = data.compositions
      .filter(c => c.alimCode === alimCode)
      .map(c => {
        // aggregate the current composition with his
        // corresponding constants
        const compo = {
          ...c,
          ...data.constants.find(cons => cons.constCode === c.constCode)
        };

        // changing the teneur according to the given value
        if (value) {
          compo.teneur = calcTeneur(value, c.teneur, unit);
        }

        return compo;
      });

    resolve(result);
  });
}

export default {
  getAlimentByCode,
  getAlimentsByName,
  getCompositionByAlimentId
};
