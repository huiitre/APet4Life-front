/* eslint-disable max-len */
import "./style.scss";
import Page from "src/components/Page";
import Button from "src/components/Button";
import { Icon, Image, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FormContact from "../Forms/FormContact";
import { formContactIsOpen } from "../../store/actions/user";
import { findAssoc } from "../../store/selectors/associations";
import { useEffect } from "react";
import { loadAssocBySlug } from "../../store/actions/associations";
import Spinner from "src/components/Spinner";

const Assoc = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  //? si la précédente localisation existe, on retourne dessus au clic sur le bouton, sinon on retourne à l'accueil
  const handleClickNavigateToPreviousPage = () => {
    if (location.state === null) {
      navigate('/');
    } else {
      navigate(location.state.prevPath);
    }
  };

  //! ancienne version
  //* on récupère l'object qui a été stocké dans le "state" de l'url
  // const array = location.state.array;

  const dispatch = useDispatch();

  //* on récupère la propriété "isOpen" venant du state
  const isOpen = useSelector((state) => state.user.contactAssoc.isOpen);

  //* fonction handleIsOpen renvoie le contraire de l'état actuel du state (true -> false, false -> true)
  //* si isOpen vaut true, on affiche le formulaire de contact pour les assoc, si il vaut false, le formulaire reste caché
  const handleIsOpen = () => {
    dispatch(formContactIsOpen());
  };

  //* fonction onSubmit, pour envoyer un mail à l'assoc via ce formulaire (pas implémenté pour l'instant, juste un event.preventDefault())
  const handleSubmitContact = (evt) => {
    evt.preventDefault();
  };

  //* dépendance classNames permet de mieux passer d'une class à une autre en fonction d'un état du state
  //* ici on donne la class "form__contact--assoc" dans tous les cas
  //* MAIS SI isOpen vaut false, on lui donne en plus la class "form__contact--none" qui va le faire disparaître
  const formContactClassNames = classNames("form__contact--assoc", {
    "form__contact--none": !isOpen,
  });

  //* on fait appel à la fonction useParams() de la dépendance react-router-dom pour récupérer les paramètres d'url
  //* on avait déclaré la route /association/:slug, on vient donc destructurer "slug" pour récupérer ce qu'il contient
  const { slug } = useParams();

  //! ancienne version
  //* on récupère le tableau depuis les props, et on l'insère dans la fonction findAssoc (avec le slug qui provient de useParams() -> paramètres d'url)
  // const assoc = findAssoc(array, slug);

  //todo nouvelle version
  //* on fait un useeffect quand on arrive sur la page pour récupérer l'assoc en cours avec le slug
  useEffect(() => {
    dispatch(loadAssocBySlug(slug));
  }, []);
  //* on récup l'assoc depuis le store
  const assoc = useSelector((state) => state.associations.currentAssoc);
  //* on récup le loading depuis le store
  const loadingSlug = useSelector((state) => state.associations.loadingSlug);
  //todo -------------------------

  return (
    <Page className="assoc-page">
      {loadingSlug && <Spinner />}
      {!loadingSlug && (
        <Segment className="assoc">
          <div className="assoc__picture">
            <Image src={assoc.picture} size="medium" rounded />
          </div>
          <div className="assoc__content">
            <div className="assoc__title">{assoc.name}</div>
            <div className="assoc__species">
              {/* {assoc.species !== [] &&
                assoc.species.map((item) => (
                  <div className="assoc__specie">{item.name}</div>
                ))} */}
            </div>
            <div className="assoc__description">
              <p>{assoc.description}</p>
            </div>
            <div className="assoc__contact">
              {/* <div className="assoc__contact-coord"> */}
              <span className="coord assoc__contact-coord--mail">
                <Icon name="mail outline" size="large" />
                <a href={`mailto:${assoc.mail}`}>{assoc.mail}</a>
              </span>
              <span className="coord assoc__contact-coord--phone">
                <Icon name="phone" size="large" />
                <a href={`tel:${assoc.phone_number}`}>{assoc.phone_number}</a>
              </span>
              <span className="coord assoc__contact-coord--website">
                <Icon name="at" size="large" />
                <a href={assoc.website}>{assoc.website}</a>
              </span>
              <span className="coord assoc__contact-coord--address">
                <Icon name="home" size="large" />
                {assoc.adress}
              </span>
              <span className="coord assoc__contact-coord--city">
                <Icon name="home" size="large" />
                {assoc.zipcode} {assoc.city} | {assoc.department}
              </span>
              <span className="coord assoc__contact-coord--region">
                <Icon name="home" size="large" />
                {assoc.region}
              </span>
              {/* </div> */}
            </div>
          </div>
          <div className="assoc__contact-button">
            <Button
              onClick={handleIsOpen}
              name="Nous contacter"
              className="btn--contact-us"
            />
            <FormContact
              className={formContactClassNames}
              onSubmit={handleSubmitContact}
            />
            <Button
              onClick={handleClickNavigateToPreviousPage}
              name="Retour"
              className="btn--return"
            />
          </div>
        </Segment>
      )}
    </Page>
  );
};

export default Assoc;
