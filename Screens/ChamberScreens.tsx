import  React from "react";
import { View } from "react-native";
import LocalArea from '../components/LocalAreas/LocalArea'
import ChamberHeader from "../components/ChamberHeader/ChamberHeader";


export default function ChamberScreen(){

    return ( 
        <View>
            {/* <ChamberHeader />         */}
            <LocalArea />
        </View> 
    );
}

