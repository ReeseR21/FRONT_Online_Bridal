// import React, { useState, useEffect} from 'react';
// import Vendor from './components/Vendor';
// import './Vendor.css';

// function Vendor() {

//     const [vendors, setVendor] = useState([]);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/onlinebridal/vendor/", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Token 297308b6e4022737b5f9517c7201e7a7277fb9b6'
//         }
//     }).then(response => response.json())
//       .then(response => setVendor(response))
//       .catch( error => console.log(error))
//     }, [])

//     return (
//         <div className="Vendor">
//             <header className="Vendor-header">
//                 <center><h1>Event Vendors</h1></center>
//                 <center><h3>Helping you to plan your big day!</h3></center>
//                 </header>
//                 <div className="layout">
//                     <div>
//                         {vendors.map(vendor => {
//                             return <h2>{vendor.business_name}</h2>
//                         })}
//                     </div>
//                     <h2></h2>
//                 {/* <div>Vendor List</div> */}
//                 <div>Vendor Details</div>
//                 {/* <div>Share</div> */}
//                 {/* <center><h3>For the bride who wants to keep it simple!</h3></center> */}
//                 </div>
//         </div>
//     );
// }

// export default Vendor;