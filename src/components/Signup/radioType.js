import "./style.scss";

const RadioType = () => (
  <div className="radio-type">
    <div>
      <input
        type="radio"
        id="control_01"
        name="select"
        value="1"
      />
      <label for="control_01"><p>Un particulier</p></label>
    </div>
    <div>
      <input
        type="radio"
        id="control_02"
        name="select"
        value="1"
      />
      <label for="control_02"><p>Une association</p></label>
    </div>
  </div>
);

export default RadioType;
