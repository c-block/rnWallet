import { StackNavigator } from 'react-navigation';
import AssetsHomeScreen from './AssetsHomeScreen';
import AssetsDetailScreen from './AssetsDetailScreen';


export default AssetsContainer = StackNavigator({
    AssetsHome: { screen: AssetsHomeScreen },
    AssetsDetail: { screen: AssetsDetailScreen },
},
    {
        navigationOptions: {
            headerTitleStyle: { fontSize: 18, color: 'skyblue' },
        },
        gesturesEnabled: true,
    }
);