import { createAppContainer } from 'react-navigation'
import InvestmentEducation from '../screens/investmentEducation'
import Investment from '../screens/investment';

import { createStackNavigator } from 'react-navigation-stack';


const InvestmentStack = createStackNavigator(
    {
        Home: {
            screen: Investment,
            navigationOptions: {
                headerShown: false,
            },
        },
        InvestmentEducationDetail: {
            screen: InvestmentEducation,
            navigationOptions: {
                headerTitle: "Investmend Education",
            }
        }
    }
)

export default createAppContainer(InvestmentStack);