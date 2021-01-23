import axios from 'axios';
import {useReducer} from 'react';
import {ContactContext} from './contact.context';
import reducer from './contact.reducer';
// import setAuthToken from '../../utils/token';
import {CONTACT_SUCCESS,CONTACT_FAILED,CONTACT_CREATED,CONTACT_CREATE_FAILED} from './contact.action';


const ContactState = (props)=>{
 
    const initialState = {
        contacts:[],
        isLoading:false,
        error:null,
        contacCreatedFailed:null
    }


    const [state, dispatch] = useReducer(reducer, initialState);
    
    const loadContacts = async ()=>{
        try {
            const userContacts = await axios.get('/api/v1/contacts');
            dispatch({type:CONTACT_SUCCESS,contacts:userContacts.data.contacts});
        } catch (error) {
            const errorMsg = error?.code == '404' ? 'No Data Found' : 'Something went wrong please try again.';
            dispatch({type:CONTACT_FAILED,error:errorMsg});     
        }
    }

    const createContact = async (contact)=>{
        try {
            const addContact = await axios.post('/api/v1/contacts',{
            ...contact
            });
            console.log(addContact.data.msg);
            // Contacts Created Successfully
        } catch (error) {
            console.log(error);
            dispatch({type:CONTACT_CREATE_FAILED,error:error.message});   
        }
    };


    return (<ContactContext.Provider value={{ ...state,loadContacts,createContact}}>
        {props.children}
    </ContactContext.Provider>)


}

export default ContactState;