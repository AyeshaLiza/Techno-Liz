// import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAuth from '../../../../../../Hooks/useAuth';
// import { axiosInstance } from '../../../../../../api';
// import Swal from 'sweetalert2';

// const CheckoutForm = () => {
//  const {user} = useAuth()
//  const [error, setError] = useState()
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('')
//   const [transactionId, setTransactionId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//    if (sbscrAmount > 0) {
//        axiosInstance.post('/create-payment-intent', { price: sbscrAmount })
//            .then(res => {
//                console.log(res.data.clientSecret);
//                setClientSecret(res.data.clientSecret);
//            })
//    }

// }, [axiosInstance, sbscrAmount])

//   const handlePayment = async (event) => {
   
//     event.preventDefault();

//     if (!stripe || !elements) {
      
//       return;
//     }
//     const card = elements.getElement(CardElement)

//     if (card === null) {
//         return
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//      type: 'card',
//      card
//  })

//  if (error) {
//      console.log('payment error', error);
//      setError(error.message);
//  }
//  else {
//      console.log('payment method', paymentMethod)
//      setError('');
//  }
//   // confirm payment
//   const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//    payment_method: {
//        card: card,
//        billing_details: {
//            email: user?.email || 'anonymous',
//            name: user?.displayName || 'anonymous'
//        }
//    }
// })
// if (confirmError) {
//  console.log('confirm error')
// }
// else {
//  console.log('payment intent', paymentIntent)
//  if (paymentIntent.status === 'succeeded') {
//      console.log('transaction id', paymentIntent.id);
//      setTransactionId(paymentIntent.id);

//      // now save the payment in the database
//      const payment = {
//          email: user.email,
//          price: sbscrAmount,
//          transactionId: paymentIntent.id,
//          date: new Date(), // utc date convert. use moment js to 
//          status: 'pending'
//      }

//      const res = await axiosInstance.post('/payments', payment);
//      console.log('payment saved', res.data);
//      refetch();
//      if (res.data?.paymentResult?.insertedId) {
//          Swal.fire({
//              position: "top-end",
//              icon: "success",
//              title: "Thank you for the taka paisa",
//              showConfirmButton: false,
//              timer: 1500
//          });
//          navigate('/dashboard/paymentHistory')
//      }

//  }
// }

// }
   

//   return (
//    <form onSubmit={handlePayment}>
//    <CardElement
//        options={{
//            style: {
//                base: {
//                    fontSize: '16px',
//                    color: '#424770',
//                    '::placeholder': {
//                        color: '#aab7c4',
//                    },
//                },
//                invalid: {
//                    color: '#9e2146',
//                },
//            },
//        }}
//    />
//    <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
//        Pay
//    </button>
//    <p className="text-red-600">{error}</p>
//    {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
// </form>
//   )
// };

// export default CheckoutForm;