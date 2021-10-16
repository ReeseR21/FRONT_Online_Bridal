const token = "297308b6e4022737b5f9517c7201e7a7277fb9b6";

class API {
    static updateVendor(vend_id, body) {
        return fetch(`http://127.0.0.1:8000/vendor/vendors/${vend_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
          }).then( response => response.json())
   }
   static createVendor(body) {
        return fetch(`http://127.0.0.1:8000/vendor/vendors/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
   },
            body: JSON.stringify( body )
          }).then( response => response.json())
   }
   static deleteVendor(vend_id) {
    return fetch(`http://127.0.0.1:8000/vendor/vendors/${vend_id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
},
    })
}

 }
 export default API;