/* eslint-disable */
import { showAlert } from './alerts';
import { loadStripe } from '@stripe/stripe-js';

//const Stripe = require('stripe');

export const bookTour = async (tourId) => {
  try {
    const stripe = await loadStripe(
      `pk_test_51N4KL8HaTdCMJ2AdWpBGrSOzdGHd6Zoxj9ZoOhuiszlIMsuT0Zp3sGEm6rU6BwyS1HigfwVYt790Tmlml2nxaSpK00xqQngiMB`
    );
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });

    //works as expected
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
