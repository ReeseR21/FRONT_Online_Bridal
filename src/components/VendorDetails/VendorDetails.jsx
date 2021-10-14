import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function VendorDetails(props) {    

    const [ highlighted, setHighlighted ] = useState(-1);

    let vend = props.vendor;

    const highlightRate = high => event => {
        setHighlighted(high);
    }

    const rateClicked = rate => event => {
      fetch(`http://127.0.0.1:8000/vendor/vendors/${vend.id}/rate_vendor/`, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 297308b6e4022737b5f9517c7201e7a7277fb9b6'
        },
        body: JSON.stringify( {stars: rate + 1} )
    })
        .then( () => getDetails ())
        .catch( error => console.log(error))
    }
    const getDetails = () => {
      fetch(`http://127.0.0.1:8000/vendor/vendors/${vend.id}/`, {
        method: 'GET',
        headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 297308b6e4022737b5f9517c7201e7a7277fb9b6'
        }
        })
        .then( resp => resp.json())
        .then( resp => props.updateVendor(resp))
        .catch( error => console.log(error))
    }


    return (
        <React.Fragment>
          { vend ? (
            <div>
            <h3>{vend.business_name}</h3>
            <p>{vend.street}</p>
            <p> {vend.city}, {vend.state}, {vend.zip_code}</p>
            <p>Phone: {vend.business_phone}</p>
            <p>Email: {vend.business_email}</p>
            <p>Description of product or service:</p> <p>{vend.product_service}</p>
            <p>Highest Price: {vend.price_range}</p>
            {/* <p>{props.vendor.low_price}</p>
            <p>{props.vendor.high_price}</p>
            <p>{props.vendor.description}</p> */}
            <FontAwesomeIcon icon={faHeart} className={vend.avg_rating > 0 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={vend.avg_rating > 1 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={vend.avg_rating > 2 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={vend.avg_rating > 3 ? 'pink':''}/>
            <FontAwesomeIcon icon={faHeart} className={vend.avg_rating > 4 ? 'pink':''}/>
            ({vend.no_of_ratings})
            <div className="rate-container">
                <h2>Rate this vendor</h2>
                {[...Array(5)].map( (e, index) => {
                    return <FontAwesomeIcon key={index} icon={faHeart} className={highlighted > index - 1 ? 'pink':''}
                        onMouseEnter={highlightRate(index)}
                        onMouseLeave={highlightRate(-1)}
                        onClick={(rateClicked(index))}
                    />
                })}
            
            </div>            
        </div>
            ) : null }
        </React.Fragment>           
    )
}

export default VendorDetails;