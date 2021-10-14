import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function VendorList(props) {

    const vendorClicked = vendor => {
        props.vendorClicked(vendor)
    }
    const editClicked = vendor => {
        props.editClicked(vendor);
    }
    return (
        <div>
            { props.vendors && props.vendors.map( vendor => {
            return (
             <div key={vendor.id}>
                <h2 onClick={event => vendorClicked(vendor)}>{ vendor.business_name}</h2>
                <FontAwesomeIcon icon={faEdit} onClick={(vendor) => editClicked(vendor)}/>
                <FontAwesomeIcon icon={faTrash}/>

             </div>
            )
            })}
        </div>
    )
}

export default VendorList;