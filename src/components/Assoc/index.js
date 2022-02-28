import './style.scss';
import Page from 'src/components/Page';
import Button from 'src/components/Button';
import { Icon, Image, Segment } from 'semantic-ui-react';
import test1 from 'src/assets/img/test1.png';
import test2 from 'src/assets/img/test2.png';
import test3 from 'src/assets/img/test3.png';

const Assoc = () => (
  <Page>
    <Segment className="assoc">
      <div className="assoc__picture">
        <Image src={test2} size="medium" rounded />
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
        <Button name="Nous contacter" className="btn--contact-us" />
        <br />
        <Button name="Retour à la liste" className="btn--return" />
      </div>
    </Segment>
    <section className="assoc-carousel">CAROUSEL</section>
  </Page>
);

export default Assoc;
