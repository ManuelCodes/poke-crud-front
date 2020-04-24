import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { createPokemon } from './actions';

import { connect } from 'react-redux';

class PokemonForm extends React.Component {

  renderTextField = ({
      label,
      input,
      meta: { touched, invalid, error },
      ...custom
    }) => {
      return (
      <TextField
        fullWidth
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    );
  }

  onSubmit = (formValues) => {
    console.log('onSubmit onSubmit onSubmit onSubmit onSubmit onSubmitonSubmit');
    console.log(formValues);
    this.props.createPokemon(formValues);  //aqui va el guardado
  }

  render() {
    console.log("render render render render render render render render render render ");
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container" >
        <Card className="card">
          <div className="login-header">
            <span >Pokemon Stadium</span>
            <img className="icon" src={process.env.PUBLIC_URL + '/images/pokeball.svg'} alt="pokeball" style={{marginLeft: "4px"}} />
          </div>
          <CardContent>
            <div>
              <Field
                name="name"
                component={this.renderTextField}
                label="Name"
              />
              <Button variant="contained" color="primary" type="submit"  fullWidth>
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    )
  }
}

const validate = values => {
  console.log(values);
  const errors = {}
  const requiredFields = [
    'name'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

PokemonForm = connect(null, {createPokemon})(PokemonForm);

export default reduxForm({
  form: 'pokemonForm', // a unique identifier for this form
  validate
})(PokemonForm);
