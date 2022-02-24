import './style.scss';
import React from 'react';
import { Input, Select } from 'semantic-ui-react';

const FormSearch = () =>
// const countryOptions = [
//   { key: 'af', value: 'af', text: 'Afghanistan' },
//   { key: 'ax', value: 'ax', text: 'Aland Islands' },
//   { key: 'al', value: 'al', text: 'Albania' },
//   { key: 'dz', value: 'dz', text: 'Algeria' },
//   { key: 'as', value: 'as', text: 'American Samoa' },
//   { key: 'ad', value: 'ad', text: 'Andorra' },
//   { key: 'ao', value: 'ao', text: 'Angola' },
//   { key: 'ai', value: 'ai', text: 'Anguilla' },
//   { key: 'ag', value: 'ag', text: 'Antigua' },
//   { key: 'ar', value: 'ar', text: 'Argentina' },
//   { key: 'am', value: 'am', text: 'Armenia' },
//   { key: 'aw', value: 'aw', text: 'Aruba' },
//   { key: 'au', value: 'au', text: 'Australia' },
//   { key: 'at', value: 'at', text: 'Austria' },
//   { key: 'az', value: 'az', text: 'Azerbaijan' },
//   { key: 'bs', value: 'bs', text: 'Bahamas' },
//   { key: 'bh', value: 'bh', text: 'Bahrain' },
//   { key: 'bd', value: 'bd', text: 'Bangladesh' },
//   { key: 'bb', value: 'bb', text: 'Barbados' },
//   { key: 'by', value: 'by', text: 'Belarus' },
//   { key: 'be', value: 'be', text: 'Belgium' },
//   { key: 'bz', value: 'bz', text: 'Belize' },
//   { key: 'bj', value: 'bj', text: 'Benin' },
// ];

  (
    <div className="form-search">

      <form className="form">
        {/* <p>Cherchez une association :</p>
        <Select className="form__select" placeholder="Région" options={countryOptions} />
        <Select className="form__select" placeholder="Département" options={countryOptions} />
        <p>ou<br />Entrez votre code postal :</p>
        <Input action={{ icon: 'search' }} placeholder="Code postal" /> */}
        <p>Cherchez une association :</p>
        <select className="form__select" placeholder="Région" options={countryOptions} />
        <select className="form__select" placeholder="Département" options={countryOptions} />
        <p>ou<br />Entrez votre code postal :</p>
        {/* <Input action={{ icon: 'search' }} placeholder="Code postal" /> */}

      </form>

    </div>
  );
export default FormSearch;
