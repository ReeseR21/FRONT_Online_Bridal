import React, { useState, useEffect } from "react";
import API from "../ApiFile";

function VendorForm(props) {
    const [business_name, setBusiness_Name ] = useState('');
    const [street, setStreet ] = useState('');
    const [city, setCity ] = useState('');
    const [state, setState ] = useState();
    const [zip_code, setZip_Code ] = useState('');
    const [business_phone, setBusiness_Phone ] = useState('');
    const [business_email, setBusiness_Email ] = useState('');
    const [product_service, setProduct_Service ] = useState('');
    const [price_range, setPrice_Range ] = useState('');

    useEffect( () => {
        setBusiness_Name(props.vendor.business_name)
        setStreet(props.vendor.street)
        setCity(props.vendor.city)
        setState(props.vendor.state)
        setZip_Code(props.vendor.zip_code)
        setBusiness_Phone(props.vendor.business_phone)
        setBusiness_Email(props.vendor.business_email)
        setProduct_Service(props.vendor.product_service)
        setPrice_Range(props.vendor.price_range)
    }, [props.vendor])

    const updateClicked = () => {
            console.log('update here');
        API.updateVendor(props.vendor.id, {business_name, street, city, state, zip_code, business_phone, business_email, product_service, price_range})
        .then( response => props.updatedVendor(response))
        .catch(error => console.log(error));
    }
    const createClicked = () => {
        console.log('update here');
     API.createVendor({business_name, street, city, state, zip_code, business_phone, business_email, product_service, price_range})
     .then( response => props.vendorCreated(response))
     .catch(error => console.log(error));
   }

    return (
        <React.Fragment>
          { props.vendor ? (
            <div>
                <h3>Update or Add Your Company Information</h3>
                <label htmlFor="business_name">Company</label><br/>
                <input id="business_name" type="text" placeholder="business_name" value={business_name}
                        onChange={ event => setBusiness_Name(event.target.value)}/><br/>

                <label htmlFor="street">Street</label><br/>
                <input id="street" type="text" placeholder="street" value={street}
                        onChange={ event => setStreet(event.target.value)}/><br/>
                
                <label htmlFor="city">City</label><br/>
                <input id="city" type="text" placeholder="city" value={city}
                        onChange={ event => setCity(event.target.value)}/><br/>
                
                <label htmlFor="state">State</label><br/>
                <input id="state" type="text" placeholder="state" value={state}
                        onChange={ event => setState(event.target.value)}/><br/>
                
                <label htmlFor="zip_code">Zip Code</label><br/>
                <input id="zip_code" type="text" placeholder="zip code" value={zip_code}
                        onChange={ event => setZip_Code(event.target.value)}/><br/>
                
                <label htmlFor="business_phone">Business Phone</label><br/>
                <input id="business_phone" type="text" placeholder="business phone" value={business_phone}
                        onChange={ event => setBusiness_Phone(event.target.value)}/><br/>
                
                <label htmlFor="business_email">Business Email</label><br/>
                <input id="business_email" type="text" placeholder="business email" value={business_email}
                        onChange={ event => setBusiness_Email(event.target.value)}/><br/>
                
                <label htmlFor="product_service">Product/Service</label><br/>
                <textarea id="product_service" type="text" placeholder="product/service" value={product_service}
                        onChange={ event => setProduct_Service(event.target.value)}></textarea><br/>

                <label htmlFor="price_range">Price</label><br/>
                <input id="price_range" type="integer" placeholder="price" value={price_range}
                        onChange={ event => setPrice_Range(event.target.value)}/><br/>
                {props.vendor.id ?
                 <button onClick={updateClicked}> Update</button> :
                 <button onClick={createClicked}> Create</button> 
                }                
                
            </div>
          ) : null }
        </React.Fragment>
    )
}

export default VendorForm;