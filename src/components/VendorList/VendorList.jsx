import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import API from "../ApiFile";
import { useCookies } from 'react-cookie';

function VendorList(props) {

    const [token] = useCookies(['vendortoken']);

    const vendorClicked = vendor => event => {
        props.vendorClicked(vendor)
    }
    const editClicked = vendor => {
        props.editClicked(vendor);
    }
    const removeClicked = vendor => {
        API.deleteVendor(vendor.id, token['vendortoken'])
        .then(() => props.removeClicked(vendor))
        .catch(error => console.log())
    }
    return (
        <div>
            { props.vendors && props.vendors.map( vendor => {
            return (
             <div key={vendor.id} className="vendorItem">
                <h2 onClick={vendorClicked(vendor)}>{ vendor.business_name}</h2>
                <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(vendor)}/>
                <FontAwesomeIcon icon={faTrash}onClick={() => removeClicked(vendor)}/>
             </div>
            )
            })}
        </div>
    )
}

export default VendorList;