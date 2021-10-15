// const TOKEN = "297308b6e4022737b5f9517c7201e7a7277fb9b6";

// export class API {
//     static updateVendor(vend_id, body) {
//         return fetch(`http://127.0.0.1:8000/vendor/vendors/${vend_id}/`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Token ${TOKEN}`
//             },
//             body: JSON.stringify( body )
//           }).then( resp => resp.json())
//    }
//  }


// API.updateVendor(props.vendor.id, {business_name, street, city, state, zip_code, business_phone, business_email, product_service, price_range})