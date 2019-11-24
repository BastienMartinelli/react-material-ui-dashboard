import convert from "convert-units";
import d from "./ciqual.json";

type CiqualData = {
  aliments: Alim[];
  compositions: Compo[];
  constants: Const[];
};

type Alim = {
  alimCode: string;
  alimGrpCode: string;
  alimNomEng: string;
  alimNomFr: string;
  alimNomIndexEng: string;
  alimNomIndexFr: string;
  alimSsgrpCode: string;
  alimSsssgrpCode: string;
};

type Compo = {
  alimCode: string;
  codeConfiance: string;
  constCode: string;
  max: any;
  min: any;
  sourceCode: any;
  teneur: string;
};

type Const = {
  constCode: string;
  constNomEng: string;
  constNomFr: string;
};

type Aliment = Alim & {
  composition: (Compo | Const)[];
};

const data = d as CiqualData;

function calcTeneur(value: string, teneur = "", unit = "g") {
  const covertedValue = convert(value)
    .from(unit)
    .to("g");

  const parsedTeneur = parseFloat(teneur.replace(",", "."));

  const result = !parsedTeneur ? teneur : (covertedValue * parsedTeneur) / 100;

  return result.toString();
}

export function getAlimentsByName(name: string, length: number) {
  return new Promise<Alim[]>(resolve => {
    const alims = data.aliments.filter(
      a =>
        a.alimNomFr.toUpperCase().includes(name.toUpperCase()) ||
        a.alimNomEng.toUpperCase().includes(name.toUpperCase())
    );

    const results = length ? alims.slice(0, length) : alims;

    resolve(results);
  });
}

export function getAlimentByCode(code: string) {
  return new Promise<Aliment>(resolve => {
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

export function getCompositionByAlimentId(
  alimCode: string,
  value?: string,
  unit?: string
) {
  return new Promise<(Compo | Const)[]>(resolve => {
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
