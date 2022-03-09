import "./style.scss";

import Page from "src/components/Page";
import { Link } from "react-router-dom";

const Error = () => {
  console.log("error 404");

  return (
    <Page className="page__error">
      <div class="anim anim__jb">
        <div class="buisson"></div>
        <div class="prof jb"></div>
      </div>
      <div class="anim anim__steph">
        <div class="buisson"></div>
        <div class="prof steph"></div>
      </div>
      <div class="anim anim__baptiste">
        <div class="buisson"></div>
        <div class="prof baptiste"></div>
      </div>
      <div class="anim anim__pauline">
        <div class="buisson"></div>
        <div class="prof pauline"></div>
      </div>
      <div className="error">
        <h1 className="error__title">
          <span className="title__4">4</span>
          <span className="title__0">0</span>
          <div className="box">
            <div className="cat">
              <div className="cat__body" />
              <div className="cat__body" />
              <div className="cat__tail" />
              <div className="cat__head" />
            </div>
          </div>
          <span className="title__4">4</span>
        </h1>
        <p className="error__subtitle">
          Tu devrais{" "}
          <Link className="error__link" to={"/"}>
            partir
          </Link>
          , de drôles de créatures rôdent dans les feuillages ...
        </p>
      </div>
    </Page>
  );
};

export default Error;
