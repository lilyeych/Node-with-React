import React, { Component } from "react";
import StripeReactCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeReactCheckout
        name="Emaily"
        description="$5 for 5 emails"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeReactCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
