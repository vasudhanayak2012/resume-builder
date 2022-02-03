import React, {useState} from "react";
import '../stylesheets/Contact.css';
import axios from 'axios';

const Contact = () => {
    const [contactData, setContactData] = useState({
        fName: '',
        lName: '',
        email: '',
        query: ''
    });

    const updateContact = (e) => {
        let fieldName = e.target.name;
        let value = e.target.value;
        let updatedContact = {...contactData, [fieldName]:value};
        setContactData(updatedContact);
    }

    const submitContactForm = () => {
        let contactDataFormatted = {
            name: `${contactData.fName} ${contactData.lName}`,
            email: contactData.email, 
            query: contactData.query
        }

        axios({
            method:'post',
            url: "https://reqres.in/api/users",
            data: contactDataFormatted
        })
        .then(response => {
            alert('Query submitted successfully, please check console for response');
            console.log(response.data);
        })
        .catch(error => console.log(error));
        setContactData({ fName: '', lName: '', email: '',query: ''})
    }

    return (
        <div className="contact-container">

            <div className="mui-row contact-box">
                <div className="mui-col-md-8">
                    <div className="contact-data">
                        <form className="mui-form">
                            <h3>User Details</h3>
                            <div className="mui-row">
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-6 mui-col-xs-12">
                                    <input type="text" onChange={updateContact} value={contactData.fName} name="fName"/>
                                    <label>First Name</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-6 mui-col-xs-12">
                                    <input type="text" onChange={updateContact} value={contactData.lName} name="lName"/>
                                    <label>Last Name</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" onChange={updateContact} value={contactData.email} name="email"/>
                                    <label>Email Address</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" onChange={updateContact} value={contactData.query} name="query"/>
                                    <label>Query</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mui-col-md-12 prev-next">
                    <button onClick={submitContactForm} type="button" className="mui-btn submit-button">Submit</button>
                </div>
            </div>
        </div>
    )

}

export default Contact;