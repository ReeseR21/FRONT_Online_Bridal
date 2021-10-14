import React from "react";

function VendorForm(props) {
    return (
        <h1>{props.vendor && props.vendor.business_name} edit</h1>
    )
}

export default VendorForm;