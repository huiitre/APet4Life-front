import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
// import dummyassoclist from 'src/data/dummyassoclist';
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
                    <h3 className="list__item-title">{item.name}</h3>
                    <p className="list__item-description">{item.description}</p>
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
