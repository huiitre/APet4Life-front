/* eslint-disable max-len */
import "./style.scss";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import Separator from "src/components/Separator";
import { useDispatch } from "react-redux";

//! faire propType d'assocList

const AssocList = ({ assocList }) => {
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    console.log(evt.currentTarget.id);
    dispatch(setAssocBySlugOnApi(evt.currentTarget.id));
  };
  console.log(assocList);
  return (
    <Segment>
      <ul className="list">
        {
          //* on "boucle" sur le tableau assocList pour générer des éléments JSX pour chaque item parcouru
          assocList.map((item) => (
            <div key={item.id}>
              {/* //* composant Link vient de la dépendance react-router-dom
              //* c'est en gros un lien < href=""> qui communique avec les Routes que nous avons déclarés dans le composant App
              //* dans l'attribut "to", on peut l'url sur laquelle on veut atterir
              //* elle doit correspondre à une route */}
              <Link to={`/association/${item.slug}`}>
                <li className="list__item">
                  <img className="list__item-logo" src={item.picture} alt="" />
                  <div className="list__item-infos">
                    <div className="list__item-header">
                      <h3 className="list__item-title">{item.name}</h3>
                        {/* //* map du sous objet assoSpecies pour récupérer la liste des espèces que propose une association */}
                        {
                          item.species.map(
                            (specie) => (
                              <p key={specie.id} className="list__item-species">
                                {specie.name}
                              </p>
                            )
                          )
                        }
                    </div>
                    <p className="list__item-description">{item.description}</p>
                    <div className="list__item-localisation">
                      <p className="list__item-city">{item.city}</p>
                      <p className="list__item-department">{item.department}</p>
                    </div>
                  </div>
                </li>
              </Link>
              <Separator className="list__separator" />
            </div>
          ))
        }
      </ul>
    </Segment>
  );
};

export default AssocList;
