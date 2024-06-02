import { StackNavigator } from 'react-navigation-stack';

import Homepage from './screens/Homepage';
import Secondpage from './screens/Secondpage';

export default StackNavigator({
    Homepage: {
        screen: Homepage,
    },
    Secondpage: {
        screen: Secondpage,
    },
});