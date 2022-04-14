import assocReducer, {initialState} from 'src/store/reducers/associations';
import dummyassoclist from "../../../src/data/dummyassoclist";
import { insertAllAssociationsOnState } from '../../../src/store/actions/associations';

describe('Association Reducer', () => {

  describe('Structure', () => {

    //* on test sur le reducer est une fonction
    test('It is a function', () => {
      expect(typeof assocReducer).toBe('function');
    });
  });

  describe('Execution', () => {

    //* on va tester le reducer, voir si il retourne bien l'initial state, sans arguments
    test('It return the right initial state when called without any arguments', () => {
      expect(assocReducer()).toBe(initialState);
    });

    //* on va tester l'action ALL_ASSOCIATIONS_ON_STATE
    test('It handles ALL_ASSOCIATIONS_ON_STATE action right', () => {
      
      //* on test l'exécution de la fonction
      //* Pour cela il nous faut :
      //* - les données en entrée (pour une fonction, les arguments)
      //* - connaitre le résultat voulu (la sortie attendu)
      //* - vérifier que le résultat obtenu est bien le résultat attendu

      const stateBefore = {
        //* je prévoit dans mon state une propriété quelconque, autre que celle sur lauelle l'action doit travailler
        test: 'abc',
      };

      //* on récupère les fausses data à insérer dans le state
      const associationsToSave = dummyassoclist;

      const exceptedStateAfter = {
        //* je vérifie en sortie que cette propriété est toujours là
        test: 'abc',
        //* j'insère les associations
        allAssociations: associationsToSave,
        //* j'insère le loading à false car il est attendu dans le case de l'action, dans le reducer
        loading: false,
      };

      //* je définie mon action avec en paramètre les fausses données
      const action = insertAllAssociationsOnState(associationsToSave);

      const stateAfter = assocReducer(stateBefore, action);

      expect(stateAfter).toEqual(exceptedStateAfter);
    });
  })
})