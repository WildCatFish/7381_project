import { createAppContainer } from "react-navigation";

import InvestmentEducation from "../screens/investmentEducation";
import Investment from "../screens/investment";
import FinancialNews from "../screens/financialNews";

import { createStackNavigator } from "react-navigation-stack";

const InvestmentStack = createStackNavigator({

  InvestmentHome: {
    screen: Investment,
    navigationOptions: {
      headerShown: false,
    },
  },
  InvestmentEducationDetail: {
    screen: InvestmentEducation,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Investmend Education",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },
  FinancialNewsDetail: {
    screen: FinancialNews,
    navigationOptions: {
      headerTitleAlign: "center",
      headerTitle: "Financial News",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#1F4E79",
      }
    },
  },
});


export default createAppContainer(InvestmentStack);
