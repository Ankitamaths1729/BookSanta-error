import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DonateScreen from '../screens/DonateScreen';
import RecieverScreen from '../screens/RecieverScreen';

export const StackNavigator =createStackNavigator({
    bookDonateList:{screen:DonateScreen},
    RecieverDetails:{screen:RecieverScreen}
    
},{
    initialRouteName:'bookDonateList'
}

)