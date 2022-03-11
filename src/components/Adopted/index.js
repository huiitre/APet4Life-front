import "./style.scss";
import Page from "src/components/Page";
import { Card, Icon, Image } from "semantic-ui-react";
import adopted from "../../data/adopted";
import Separator from "src/components/Separator";

const Adopted = () => {
  return (
    <Page className="adopted-page">
      <section className="adopted">
        {/* <Card.Group>
          {adopted.map((item) => (
            <Card>
              <Image
                src={require(`../../assets/img/adopted/${item.picture}`)}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                  <span className="date">Adopté par</span>
                </Card.Meta>
                <Card.Description>
                  {item.owner}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group> */}
        {adopted.map((item) => (
          <>
            <div key={item.id} className="element">
              <div className="element__picture">
                <img
                  src={require(`../../assets/img/adopted/${item.picture}`)}
                />
              </div>
              <div className="element__name">
                <h3>{item.name}</h3>
              </div>
              <div className="element__owner">
                Adopté par <span className="owner">{item.owner}</span>
              </div>
            </div>
            <Separator />
          </>
        ))}
      </section>
    </Page>
  );
};

export default Adopted;
