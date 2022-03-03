/* eslint-disable max-len */
import './style.scss';
import Page from 'src/components/Page';
import Button from 'src/components/Button';
import { Icon, Image, Segment } from 'semantic-ui-react';
import test1 from 'src/assets/img/test1.png';
import test2 from 'src/assets/img/test2.png';
import test3 from 'src/assets/img/test3.png';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import FormContact from '../Forms/FormContact';
import { formContactIsOpen } from '../../store/actions/user';
import { findAssoc } from '../../store/selectors/associations';
import { useEffect } from 'react';
import { setAssocBySlugOnApi } from '../../store/actions/associations';

const Assoc = () => {
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
  const formContactClassNames = classNames('form__contact--assoc', { 'form__contact--none': !isOpen });

  //* on fait appel à la fonction useParams() de la dépendance react-router-dom pour récupérer les paramètres d'url
  //* on avait déclaré la route /association/:slug, on vient donc destructurer "slug" pour récupérer ce qu'il contient
  const { slug } = useParams();
  
  const currentAssoc = useSelector((state) => state.associations.currentAssocBySlug);
  console.log('page assoc', currentAssoc[0].name);

  //* ici on fait deux choses en une :
  //*   1. on récupère le résultat de la recherche des assoc dans le state
  //*   2. on insère ce résultat avec en plus le slug (param d'url) dans la fonction findAssoc
  //*      qui va chercher avec un find() l'assoc qui correspond bien au slug de l'url
  // const assoc = useSelector((state) => findAssoc(state.associations.assocList, slug));

  return (
    //* retourner un loading avant que le state se charge
    <Page>
      {/* //* on fait appel au composant "segment" de semantic-ui */}
      <Segment className="assoc">
        <div className="assoc__picture">
          <Image src="" size="medium" rounded />
        </div>
        <div className="assoc__content">
          <div className="assoc__title">username</div>
          <div className="assoc__description">
            <p>
              description
            </p>
          </div>
          <div className="assoc__contact">
            <div className="assoc__contact-coord">
              <span className="assoc__contact-coord--mail">
                <Icon name="mail outline" size="large" />
                <a href="mailto:yanis.deluca@laposte.net">
                  yanis.deluca@laposte.net
                </a>
              </span>
              <span className="assoc__contact-coord--phone">
                <Icon name="phone" size="large" />
                <a href="">06.66.74.58.21</a>
              </span>
              <span className="assoc__contact-coord--website">
                <Icon name="at" size="large" />
                <a href="">huiitre.fr</a>
              </span>
            </div>
          </div>
        </div>
        <div className="assoc__contact-button">
          <Button onClick={handleIsOpen} name="Nous contacter" className="btn--contact-us" />
          <FormContact className={formContactClassNames} onSubmit={handleSubmitContact} />
          <Link
            to="/search"
          >
            <Button name="Retour à la liste" className="btn--return" />
          </Link>
        </div>
      </Segment>
      <section className="assoc-carousel">CAROUSEL</section>
    </Page>
  );
};

export default Assoc;
