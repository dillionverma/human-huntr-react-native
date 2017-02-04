
import { actions } from 'react-native-navigation-redux-helpers';
import { closeDrawer } from './drawer';

const {
  replaceAt,
  popRoute,
  pushRoute,
  reset,
} = actions;

export default function navigateTo(route, homeRoute) {
  return (dispatch, getState) => {
    const navigation = getState().cardNavigation;
    const currentRouteKey = navigation.routes[navigation.routes.length - 1].key;
    dispatch(closeDrawer());
    if (homeRoute === 'home' && route === 'login') {
      dispatch(reset([{ key: 'login' }], navigation.key, 0));
    } else if (currentRouteKey !== homeRoute && route !== homeRoute) {
      dispatch(replaceAt(currentRouteKey, { key: route, index: 1 }, navigation.key));
    } else if (currentRouteKey !== homeRoute && route === homeRoute) {
      dispatch(popRoute(navigation.key));
    } else if (currentRouteKey === homeRoute && route !== homeRoute) {
      dispatch(pushRoute({ key: route, index: 1 }, navigation.key));
    }
  };
}
