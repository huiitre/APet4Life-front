import "./style.scss";

import Page from 'src/components/Page';


const Error = () => {
  console.log('error 404')

  return (
    <Page>
    <div className="error">
      <h1>404 Not found</h1>
      <p>Tu t'es perdu ? Reste pas là, de drôles de personnes rodent dans les feuillages ...</p>
    </div>
    </Page>
  );

  };

export default Error;
