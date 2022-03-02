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
import { Link } from 'react-router-dom';
import FormContact from '../Forms/FormContact';
import { formContactIsOpen } from '../../store/actions/user';

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
  //* MAIS SI isOpen vaut false, on lui donne en plus la class "form__contact--none" qui va le faire disparaitre
  const formContactClassNames = classNames('form__contact--assoc', { 'form__contact--none': !isOpen });
  return (
    <Page>
      {/* //* on fait appel au composant "segment" de semantic-ui */}
      <Segment className="assoc">
        <div className="assoc__picture">
          <Image src={test3} size="medium" rounded />
        </div>
        <div className="assoc__content">
          <div className="assoc__title">Nom de l'association</div>
          <div className="assoc__description">
            <p>
              descr iption lorem10 descr iption lorem10 descr iption lorem10 descr
              iption lorem10 descr iption lorem10 descr iption lorem10 descr
              iption lorem10 descr iption lorem10 descr iption lorem10
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
            to="/"
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
