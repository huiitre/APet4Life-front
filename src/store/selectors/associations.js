/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
//* fonction qui permet de récupérer l'assoc en fonction de son slug
export function findAssoc(assocList, slug) {
  const assoc = assocList.find((item) => {
    return item.slug === slug;
  });
  return assoc;
};
