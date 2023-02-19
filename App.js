import { useState } from 'react';
import DefaultLayout from './layouts/layout-default'
import UiViews from './views/ui-views';
// import shantellSansRegular from './assets/fonts/ShantellSans-Regular.ttf'
// import shantellSansBold from './assets/fonts/ShantellSans-Bold.ttf'
import ShoppingList from './components/shopping-list/shopping-list';
import { useFonts } from '@expo-google-fonts/days-one';
import LoadingView from './views/loading-view';

export default function App() {
  const [fontsLoaded] = useFonts({
    'ShantellSansRegular': require('./assets/fonts/ShantellSans-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return <LoadingView/>;
  }

  return (
    <DefaultLayout>
        <ShoppingList/>
        {/* <UiViews/> */}
    </DefaultLayout>
  );
}
