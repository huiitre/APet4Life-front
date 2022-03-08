import "./style.scss";

import Page from 'src/components/Page';
import { Link } from "react-router-dom";


const Error = () => {
  console.log('error 404')

  return (
    <Page>
      <div className="error">
        <h1 className="error__title">Error 404</h1>
        <p className="error__subtitle">Tu devrais <Link className="error__link" to={'/'}>partir</Link>, de drôles de créatures rôdent dans les feuillages ...</p>
      </div>
    </Page>
  );

  };

export default Error;
