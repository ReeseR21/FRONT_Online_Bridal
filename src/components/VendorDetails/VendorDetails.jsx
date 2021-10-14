import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function VendorDetails(props) {    

    return (
        <div>
          { props.vendor ? (
            <div>
            <h3>{props.vendor.business_name}</h3>
            <p>{props.vendor.street}</p>
            <p> {props.vendor.city}, {props.vendor.state}, {props.vendor.zip_code}</p>
            <p>Phone: {props.vendor.business_phone}</p>
            <p>Email: {props.vendor.business_email}</p>
            <p>Description of product or service:</p> <p>{props.vendor.product_service}</p>
            <p>Highest Price: {props.vendor.price_range}</p>
            {/* <p>{props.vendor.low_price}</p>
            <p>{props.vendor.high_price}</p>
            <p>{props.vendor.description}</p> */}
            <FontAwesomeIcon icon={faHeart} className={props.vendor.avg_rating > 0 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={props.vendor.avg_rating > 1 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={props.vendor.avg_rating > 2 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={props.vendor.avg_rating > 3 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={props.vendor.avg_rating > 4 ? 'pink':''}/>
            ({props.vendor.no_of_ratings})

            </div>
            ) : null }
        </div>              
    )
}

export default VendorDetails;