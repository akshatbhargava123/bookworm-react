import React, { Component } from 'react'
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Validator from "validator";
import InlineError from "../messages/InlineError";

const styles = {
  input: {
    display: 'block'
  }
};

class LoginForm extends Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
      errors: {}
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <TextField
          error={errors.email == undefined ? false : true}
          id="email"
          label="Email"
          name="email"
          style={styles.input}
          value={data.email}
          margin="normal"
          onChange={this.onChange}
        />
        {errors.email && <InlineError text={errors.email} />}
        <TextField
          error={errors.password == undefined ? false : true}
          id="password"
          label="Password"
          type="password"
          name="password"
          style={styles.input}
          value={data.password}
          margin="normal"
          onChange={this.onChange}
        />
        {errors.password && <InlineError text={errors.password} />}
        <Button
          variant="raised"
          size="large"
          color="primary"
          style={{...styles.input,  marginTop: 20 }}
          onClick={this.onSubmit}
        >
          Login
        </Button>
      </div>
    )
  }
}

export default LoginForm;
