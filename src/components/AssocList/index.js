import './style.scss';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Separator from 'src/components/Separator';

const AssocList = ({ assocList }) => (

  <Segment>
    <ul className="list">
      {
        assocList.map(
          (item) => (
            <>
              <Link to={`/association/${item.slug}`}>
                <li className="list__item">
                  <img className="list__item-logo" src={item.picture} alt="" />
                  <div className="list__item-infos">
                    <div className="list__item-header">
                      <h3 className="list__item-title">{item.userName}</h3>
                      <p className="list__item-species">{item.speciesName}</p>
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
            </>
          ),
        )
        }

    </ul>
  </Segment>

);

export default AssocList;
