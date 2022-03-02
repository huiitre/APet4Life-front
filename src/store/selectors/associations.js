/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
//* fonction qui permet de récupérer l'assoc en fonction de son slug
export function findAssoc(assocList, slug) {
  const assoc = assocList.find((item) => {
    //! bien remplacer le userName par le slug, quand on l'aura à dispo dans l'api
    return item.userName === slug;
  });
  return assoc;
};
