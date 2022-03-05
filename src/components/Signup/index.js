import "./style.scss";
import Page from "src/components/Page";
import { Radio, Segment } from "semantic-ui-react";
import RadioType from "./radioType";
import Button from "src/components/Button";

const Signup = () => {
  const handleShowNextForm = () => {
    console.log("show next form");
  };
  return (
    <Page>
      <section className="signup">
        <div className="signup__title">
          <h1>Vous êtes :</h1>
        </div>
        <div className="signup__form">
          <RadioType />
        </div>
        <div className="signup__button">
          <Button
            type="submit"
            name="Suivant"
            className="btn--next-form"
            onClick={handleShowNextForm}
          />
        </div>
      </section>
    </Page>
  );
};

export default Signup;
