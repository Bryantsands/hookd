import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SearchForm = ({
  onSubmit,
  onChange,
  useTag,
  searchTerms,
  hiddenTerms
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <div className="field-line">
        <TextField
          floatingLabelText="Search Terms"
          name="terms"
          onChange={onChange}
          value={searchTerms}
        />
      </div>
      <input type="hidden" name="tags" value={hiddenTerms} />
      <div className="button-line">
        <RaisedButton type="submit" label="Search" primary />
      </div>
    </form>
  </Card>

  
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchTerms: PropTypes.string.isRequired,
  hiddenTerms: PropTypes.string
};

export default SearchForm;