class API {
    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
            }).then( response => response.json())
    }
    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/vendor/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
            }).then( response => response.json())
    }
//     static getVendors(token) {
//         return fetch(`http://127.0.0.1:8000/vendor/vendors/`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Token ${token}`
//    },
//           }).then( response => response.json())
//    }
    static updateVendor(vend_id, body, token) {
        return fetch(`http://127.0.0.1:8000/vendor/vendors/${vend_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
          }).then( response => response.json())
   }
   static createVendor(body, token) {
        return fetch(`http://127.0.0.1:8000/vendor/vendors/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
   },
            body: JSON.stringify( body )
          }).then( response => response.json())
   }
   static deleteVendor(vend_id, token) {
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