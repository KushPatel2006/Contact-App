import React, {useState,useEffect} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import Contacts from 'react-native-contacts';

export default function CreateContact({ navigation }){
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState(['']);

}
  useEffect(() => {
    if(phoneNumbers[phoneNumbers.length-1].length > 0){
      setPhoneNumbers((prevState) => [...prevState, '']);
    }
    try {
      if((phoneNumbers[phoneNumbers.length-2]. length === 0) && (phoneNumbers.length >=2)){
        setPhoneNumbers(prevState) =>{
          const useState.slice(),
          newState.pop()
          return useState(null)
        }) catch {}
      }, [phoneNumbers])


      function addContact(){
        if((!firstName && !lastName) || phoneNumbers.lenth === 1) {}
      }
    }
  })

