import React, { useState } from "react";
import API from "../ApiFile";

function VendorForm(props) {
    const [business_name, setBusiness_Name ] = useState(props.vendor.business_name);
    const [street, setStreet ] = useState(props.vendor.street);
    const [city, setCity ] = useState(props.vendor.city);
    const [state, setState ] = useState(props.vendor.state);
    const [zip_code, setZip_Code ] = useState(props.vendor.zip_code);
    const [business_phone, setBusiness_Phone ] = useState(props.vendor.business_Phone);
    const [business_email, setBusiness_Email ] = useState(props.vendor.business_email);
    const [product_service, setProduct_Service ] = useState(props.vendor.Product_Service);
    const [price_range, setPrice_Range ] = useState(props.vendor.price_range);

    const updateClicked = () => {
        API.updateVendor(props.vendor.id, {business_name, street, city, state, zip_code, business_phone, business_email, product_service, price_range})
        .then( response => console.log(response))
        .catch(error => console.log(error));
}

    return (
        <React.Fragment>
          { props.vendor ? (
            // <h1>{ props.vendor.business_name } edit</h1>
            <div>
                <h2>Edit Your Company Information</h2>
                <label htmlFor="business_name">Company</label><br/>
                <input id="business_name" type="text" placeholder="business_name" value={business_name}
                        onChange={ event => setBusiness_Name(event.target.value)}/><br/>

                <label htmlFor="street">Street</label><br/>
                <input id="street" type="text" placeholder="street" value={street}
                        onChange={ event => setStreet(event.target.value)}/><br/>
                
                <label htmlFor="city">City</label><br/>
                <input id="cit" type="text" placeholder="city" value={city}
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
                <button onClick={updateClicked}> Update</button>

                
            </div>
          ) : null }
        </React.Fragment>
    )
}

export default VendorForm;