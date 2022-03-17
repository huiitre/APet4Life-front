import "./style.scss";

import Page from "src/components/Page";
import { Link } from "react-router-dom";

const Error = () => {
  console.log("error 404");

  return (
    <Page className="page__error">
      <div className="anim anim__jb">
        <div className="buisson"></div>
        <div className="prof jb"></div>
      </div>
      <div className="anim anim__steph">
        <div className="buisson"></div>
        <div className="prof steph"></div>
      </div>
      <div className="anim anim__baptiste">
        <div className="buisson"></div>
        <div className="prof baptiste"></div>
      </div>
      <div className="anim anim__pauline">
        <div className="buisson"></div>
        <div className="prof pauline"></div>
      </div>
      <div className="anim anim__benji">
        <div className="buisson"></div>
        <div className="prof benji"></div>
      </div>
      <div className="anim anim__romain">
        <div className="buisson"></div>
        <div className="prof romain"></div>
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
