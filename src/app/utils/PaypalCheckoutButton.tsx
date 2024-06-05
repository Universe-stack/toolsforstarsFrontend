//@ts-nocheck
'use client'
import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { usePayments } from "@/context/PaymentsContext";

interface paymentHost {
    clientId:string,
    intent:"capture"
    currency:string
}

interface PaypalCheckoutButtonProps {
  payment: Payment;
}

const PaypalCheckoutButton: React.FC<PaypalCheckoutButtonProps> = ({ payment }) => {
  console.log(payment)
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const {state, dispatch} = usePayments()

  const handleApprove = (orderId) => {
    //call backend function to fulfill order

    //if response is success
    setPaidFor(true)
    //Refresh user's account or subscription status

    //setError: if the response is error, alert the user "Your payment was processed successfully, however we're unable to fulfill your purchase. Please contact our support @--"
  }

  if(paidFor) {
    //display success message or redirect user to success page
    alert("thank you for your purchase")
  }
  if (error) {
    //Display error message, modal
    alert(error)
  }

    return (
        <>
        
        <PayPalScriptProvider options={payment}>
            <PayPalButtons 
              style={{ layout: "horizontal", tagline:false }}
              onClick={(data,actions)=> {
                //validate on button click, client or server side
                
                const hasAlreadyPaid = false;

                if(hasAlreadyPaid){
                  setError("You already paid for this space, go to your dashboard to review.")
                  return actions.reject()

                }else {
                  return actions.resolve()
                }
              }}

              createOrder={(data, actions)=> {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: state.description,
                      amount: {
                        value:state.price
                      }
                    }
                  ]
                })
              }}

              onApprove={async (data, actions) => {
                const order = await actions.order?.capture();
                console.log("order", order)

                handleApprove(data.orderID)
              }}

              onCancel={()=> {
                //Display cancel message, modal or redirect the user or back to the checkout page
              }}

              onError={(err)=> {
                setError(err)
                console.error("paypal checkout onError", err)
              }}
            />
        </PayPalScriptProvider>
        </>
  )
}

export default PaypalCheckoutButton;
