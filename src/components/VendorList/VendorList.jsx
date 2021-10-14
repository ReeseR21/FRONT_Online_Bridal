import React from 'react';

function VendorList(props) {

    const vendorClicked = vendor => {
        props.vendorClicked(vendor)
    }

    return (
        <div>
            { props.vendors && props.vendors.map( vendor => {
            return (
             <div key={vendor.id}>
                <h2 onClick={event => vendorClicked(vendor)}>{ vendor.business_name}</h2>
             </div>
            )
            })}
        </div>
    )
}

export default VendorList;