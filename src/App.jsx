import React, { useState, useEffect } from 'react';
import './App.css';
import VendorList from './components/VendorList/VendorList';
import VendorDetails from './components/VendorDetails/VendorDetails';
import VendorForm from './components/VendorForm/VendorForm';

function App() {

    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [editedVendor, setEditedVendor] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/vendor/vendors/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 297308b6e4022737b5f9517c7201e7a7277fb9b6'
        }
    }).then(resp => resp.json())
      .then(resp => setVendors(resp))
      .catch( error => console.log(error))
    }, [])

    // const vendorClicked = vendor => {
    //     setSelectedVendor(vendor);
    // }
    const loadVendor = vendor => {
        setSelectedVendor(vendor);
        setEditedVendor(null);
    }
    const editClicked = vendor => {
        setEditedVendor(vendor);
        setSelectedVendor(null);
    }
    const updatedVendor = vendor => {
        const newVendors = vendors.map( vend => {
            if (vend.id === vendor.id) {
                return vendor;
            }
            return vend;
        })
        setVendors(newVendors)
    }
    const newVendor = () => {
      setEditedVendor({business_name: '', street: '', city:'', state:'', zip_code:'', business_phone: '', business_email: '', product_service:'', price_range:''}); 
      setSelectedVendor(null);  
    }
    const vendorCreated = vendor => {
        const newVendors = [...vendors, vendor]
        setVendors(newVendors);
    }
    const removeClicked = vendor => {
        const newVendors = vendors.filter(vend => vend.id !== vendor.id);
        // ( vend => {
        //     if (vend.id === vendor.id) {
        //         return false;
        //     }
        //     return true;
        // })
        setVendors(newVendors);
    }     

    return (
        <div className="App">
            <header className="App-header">
                <center><h1>Vendor Directory</h1></center>
                <center><h3>---</h3></center>
                </header>
                <div className="layout">
                    <div>
                    <h3>Click on a vendor to view their details</h3>
                    <div>
                    <VendorList vendors={vendors} vendorClicked={loadVendor} editClicked={editClicked} removeClicked={removeClicked}
                    />
                    <button onClick={newVendor}>New Vendor</button>
                    </div>
                    <VendorDetails vendor={selectedVendor} updateVendor={loadVendor}/>
                    {editedVendor ? 
                    <VendorForm vendor={editedVendor} updatedVendor={updatedVendor} vendorCreated={vendorCreated}/> : null}
                </div>                
            </div>
        </div>

    );
}

export default App;