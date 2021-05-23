import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Menu from "../screens/menu";
import Contacto from "../screens/contacto";
import Fotos from "../screens/fotos";
import Inicio from "../screens/inicio";
import Redes from "../screens/redes";
import Somos from "../screens/somos";
import Viajes from "../screens/viajes";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="menu"
                component={Menu}
                options={{title:"MENU"}}
                />
            <Tab.Screen
                name="contacto"
                component={Contacto}
                options={{title:"CONTACTO"}}
                />
            <Tab.Screen
                name="fotos"
                component={Fotos}
                options={{title:"FOTOS"}}
                />
            <Tab.Screen
                name="inicio"
                component={Inicio}
                options={{title:"INICIO"}}
                />
            <Tab.Screen
                name="redes"
                component={Redes}
                options={{title:"REDES"}}
                />
            <Tab.Screen
                name="somos"
                component={Somos}
                options={{title:"¿QUIENES SOMOS?"}}
                />
            <Tab.Screen
                name="viajes"
                component={Viajes}
                options={{title:"VIAJES"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )

}