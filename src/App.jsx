import React, { useState, useEffect } from 'react';
import './App.css';
import VendorList from './components/VendorList/VendorList';
import VendorDetails from './components/VendorDetails/VendorDetails';
import VendorForm from './components/VendorForm/VendorForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';
// import { useFetch } from './components/Hooks/useFetch';


function App() {

    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [editedVendor, setEditedVendor] = useState(null);
    const [token, setToken, deleteToken] = useCookies(['vendortoken']);
    // const [data, loading, error] = useFetch();

    // useEffect(()=>{
    //     console.log(data);
    //   setVendors(data);
    // }, [data])
    useEffect( () => {
        return fetch(`http://127.0.0.1:8000/vendor/vendors/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['vendortoken']}`
            }
          })
          .then( response => response.json())
        //   .then( response => setVendors(response))
          .catch( error=> console.log(error))
   }, [])

    useEffect( () => {
        console.log(token);
        if(!token['vendortoken']) window.location.href = '/';
    }, [token])

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
    const logoutUser = () => {
        deleteToken(['vendortoken']);
      }
    
    //   if(loading) return <h1>Loading...</h1>
    //   if(error) return <h1>Error loading vendors</h1>

    return (
        <div className="App">
            <header className="App-header">
                {/* <center><h1>Vendor Directory</h1></center> */}
                <center><h3>---</h3></center>
                <h1>
                  <span>Vendor Directory</span>
                </h1>
                 <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
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