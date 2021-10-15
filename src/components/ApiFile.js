const TOKEN = "297308b6e4022737b5f9517c7201e7a7277fb9b6";

class API {
    static updateVendor(vend_id, body) {
        return fetch(`http://127.0.0.1:8000/vendor/vendors/${vend_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify( body )
          }).then( resp => resp.json())
   }
 }
 export default API;