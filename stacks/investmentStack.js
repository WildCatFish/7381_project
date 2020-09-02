import { createAppContainer } from 'react-navigation'

import InvestmentEducation from '../screens/investmentEducation'
import Investment from '../screens/investment';
// import financial news screen here.

import { createStackNavigator } from 'react-navigation-stack';

const InvestmentStack = createStackNavigator(
    {
        InvestmentHome: {
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
        },
        /*FinancialNewsDetail: {
            screen: 
            navigationOptions: {
                headerTitle: "Financial News",
            }
        }*/
    }
)

export default createAppContainer(InvestmentStack);