import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SettingsScreen extends React.component{
    constructor(){
        super()
        this.state={
         emailId:'',
         firstName:'',
         lastName:'',
         address:'',
         contact:'',
         docId:'',
        }
    }

    getUserDetails(){
        var user=firebase.auth().currentUser;
        var email=user.email;
        db.collection('users').where('emailId','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    emailId:data.emailId,
                    firstName:data.firstName,
                     lastName:data.lastName,
                     address:data.address,
                     contact:data.contact,
                    docId:doc.id, 
                })
            })
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }
 render(){
    return(
        <View style={{flex:1}}>
                 <MyHeader
               title="Settings"
               navigation={this.props.navigation}
               /> 
               <View>
                   
               <TextInput
          style={styles.formTextInput}
          placeholder="First Name"
          maxLength ={10}
          onChangeText={(text)=>{
           this.setState({
             firstName:text
           })
          }}
          value={this.state.firstName}
          />
            <TextInput
          style={styles.formTextInput}
          placeholder="Last Name"
          maxLength ={10}
          onChangeText={(text)=>{
           this.setState({
             lastName:text
           })
          }}
          value={this.state.lastName}
          />
            <TextInput
            style={styles.formTextInput}
          placeholder="Address"
          multiline={true}
          onChangeText={(text)=>{
           this.setState({
             address:text
           })
          }}
          value={this.state.address}
          />
          
             <TextInput
             style={styles.formTextInput}
          placeholder="Contact"
          maxLength ={10}
          onChangeText={(text)=>{
           this.setState({
             contact:text
           })
          }}
          value={this.state.contact}
          />
          </View>   
       </View>

    )
 }
}