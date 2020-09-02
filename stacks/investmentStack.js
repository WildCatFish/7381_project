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
      headerTitle: "Investmend Education",
    },
  },
  FinancialNewsDetail: {
    screen: FinancialNews,
    navigationOptions: {
      headerTitle: "Financial News",
    },
  },
});

export default createAppContainer(InvestmentStack);
