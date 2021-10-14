import React from 'react';

function VendorList(props) {
    return(
        <div>
            { props.vendors && props.vendors.map( vendor => {
            return <h2>{ vendor.business_name}</h2>
            })}
        </div>
    )
}

export default VendorList;