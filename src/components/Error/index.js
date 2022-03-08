import "./style.scss";

import Page from 'src/components/Page';


const Error = () => {
  console.log('error 404')

  return (
    <Page>
    <div>
      <p>404</p>
    </div>
    </Page>
  );

  };

export default Error;
