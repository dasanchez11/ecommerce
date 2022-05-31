import React, {useState, useEffect, useMemo}from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/checkout-item/checkout-item'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CustomButton from '../../Components/custom-button/custom-button';
import SpinnerText from '../../Components/spinner-text/spinnerText.component';


const CheckoutPage = ({cartItems,total}) => {
 
  const [loading, setLoading] = useState(false)

  const handlePayClick = (e) => {
    e.preventDefault()
    if (loading===true) {
      
    } else {
      // console.log(window)
    setLoading(true)
    var handler = window.ePayco.checkout.configure({
      key: '45b960805ced5c27ce34b1600b4b9f54',
      test: true
    })
    handler.open(data)
    
    }
  }


  var data = useMemo(() => ({
    //Parametros compra (obligatorio)
    name: "Ropa Tienda Diego",
    description: cartItems.map(cartItem => cartItem.name +" (" +cartItem.quantity + ") "),
    currency: "usd",
    amount: total,
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",
    

    //Onpage="false" - Standard="true"
    external: "true",
  }),[cartItems,total])

  useEffect(()=>{
    const url = "https://checkout.epayco.co/checkout.js";
    const script = document.createElement('script');
    script.id = 'epayco'
    Object.keys(data).forEach(prop => script.setAttribute(prop, data[prop]));
    script.src = url;
    script.async = false;
    document.body.appendChild(script)
    document.getElementsByClassName('total')[0].appendChild(script)
    
    return () => {
        document.getElementsByClassName('total')[0].removeChild(script);
      };     
},[data])

  
    
  return(
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    )
    }
    <div className='total'  >
      <span> TOTAL: ${total} </span>
      {/* <StripeCheckoutButton price={total}/> */}
      <CustomButton inverted={true} onClick={handlePayClick}>
       {loading? <SpinnerText/> : 'epay Pay'}
      </CustomButton>
      
    
    </div>

  </div>
)} ;

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)( CheckoutPage)
