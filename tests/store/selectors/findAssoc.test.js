import { findAssoc } from "../../../src/store/selectors/associations";
import dummyassoclist from "../../../src/data/dummyassoclist";

describe('Association Selector', () => {

  //* test findAssoc
  describe('findAssoc', () => {

    //* test structure
    describe('structure', () => {

      test('it is a function', () => {
        expect(typeof findAssoc).toBe('function');
      });

    });

    //* test exécution
    describe('execution', () => {

      //* vérifier qu'on nous retourne un objet contenant un id si on passe le premier slug
      test('it returns an object with an id property', () => {
        const foundAssoc = findAssoc(dummyassoclist, dummyassoclist[0].slug);

        //* est-ce un objet ?
        expect(typeof foundAssoc).toBe('object');

        //* propriété id dans l'objet ?
        expect(foundAssoc).toHaveProperty('id');
      });

      //* vérifier qu'on nous retourne la première association si on passe le premier slug
      test('it return the first assoc when the first slug is given', () => {
        const foundAssoc = findAssoc(dummyassoclist, dummyassoclist[0].slug);

        expect(foundAssoc).toEqual(dummyassoclist[0]);
      });

      //* vérifier qu'on nous retourne undefined si on passe un slug bidon
      test('it return undefined when a wrong slug is given', () => {
        const foundAssoc = findAssoc(dummyassoclist, 'dqdqsdqs-qsdqsd');

        expect(foundAssoc).toBeUndefined();
      })
    })

  })
})