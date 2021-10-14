// // import React, { useState } from 'react';
// import './App.css';

// function App() {

// // const [bridalprofile, setProfile] = useState();

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <center><h1>Simply Bridal</h1></center>
//                 <center><h3>Planning and Community</h3></center>
//                 <div className="layout">
//                 <div>Create</div>
//                 <div>Design</div>
//                 <div>Share</div>
//                 </div>
//                 <center><h3>For the bride who wants to keep it simple!</h3></center>
//             </header>
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect} from 'react';
import './App.css';
import VendorList from './components/VendorList/VendorList';
import VendorDetails from './components/VendorDetails/VendorDetails';

function App() {

    const [vendors, setVendor] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/vendor/vendor/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 297308b6e4022737b5f9517c7201e7a7277fb9b6'
        }
    }).then(resp => resp.json())
      .then(resp => setVendor(resp))
      .catch( error => console.log(error))
    }, [])

    const vendorClicked = vendor => {
        setSelectedVendor(vendor);
        // console.log(vendor.business_name);
    }

    return (
        <div className="App">
            <header className="App-header">
                <center><h1>Vendor Directory</h1></center>
                {/* <center><h3>Helping you to plan your big day!</h3></center> */}
                </header>
                <div className="layout">
                    <VendorList vendors={vendors} vendorClicked={vendorClicked} />                
                    <VendorDetails vendor={selectedVendor}/>               
                </div>
        </div>
    );
}

export default App;