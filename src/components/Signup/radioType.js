import "./style.scss";

const RadioType = ({ onChange }) => {
  return (
    <div className="radio-type" onClick={onChange}>
      <div>
        <input type="radio" id="control_01" name="select" value="Particular" />
        <label className="radio-type__label" htmlFor="control_01">
          Un particulier
        </label>
      </div>
      <div>
        <input type="radio" id="control_02" name="select" value="Association" />
        <label className="radio-type__label" htmlFor="control_02">
          <p>Une association</p>
        </label>
      </div>
    </div>
  );
};

export default RadioType;
