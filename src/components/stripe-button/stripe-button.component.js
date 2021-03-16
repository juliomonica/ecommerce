import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51F4cL8GhxHGGixaDLeqQcexyNm9mMD6Lfs9vl0nnxVCUVJ1EzOeq8JL2VOTkGTpvbbcpaBJBSjWD7VSF2g478aft003JNga2sO';

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Fashion Clothing Ltd.'
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/64b62804f7"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;
