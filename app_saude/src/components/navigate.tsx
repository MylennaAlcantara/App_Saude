import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Imc } from "../screens/imc";
import { View, Image } from "react-native";

const Tab = createBottomTabNavigator();
export function MyTabs() {
	return (
		<Tab.Navigator screenOptions={()=>(
            {
                tabBarActiveBackgroundColor: "#BE3737",
                tabBarInactiveBackgroundColor: "#BE3737"
            }
        )}>
			<Tab.Screen name="Home" component={Home} 
            options={{
                headerShown: false,
                tabBarIcon: ({size, color})=>(
                    <InconeHome size={size} color={color}/>
                ),
                tabBarActiveTintColor: "#C4F0C5",
                tabBarInactiveTintColor: "white"
            }}/>
			<Tab.Screen name="Imc" component={Imc} 
            options={{
                headerShown: false,
                tabBarIcon: ({size, color})=>(
                    <InconeBalanca size={size} color={color}/>
                ),
                tabBarActiveTintColor: "#C4F0C5",
                tabBarInactiveTintColor: "white"
            }} />
		</Tab.Navigator>
	);
}
type propIcon ={
    size: number,
    color: string
}
const InconeBalanca = ({size, color}: propIcon) => {
    return(
        <View>
            <Image source={require("../../public/images/balanca.png")} style={{height: size, width: size}} tintColor={color}/>
        </View>
    )
}
const InconeHome = ({size, color}: propIcon) => {
    return(
        <View>
            <Image source={require("../../public/images/home.png")} style={{height: size, width: size}} tintColor={color}/>
        </View>
    )
}