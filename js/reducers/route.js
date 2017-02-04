
import type { Action } from '../actions/types';
import { globalNav } from '../AppNavigator';
import { PUSH_NEW_ROUTE, POP_ROUTE, POP_TO_ROUTE, REPLACE_ROUTE, REPLACE_OR_PUSH_ROUTE, REHYDRATE } from '../actions/route';

export type State = {
    routes: Array<string>
}

const initialState = {
  routes: ['login'],
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === PUSH_NEW_ROUTE) {
    globalNav.navigator.push({ id: action.route, passProps: action.passProps });
    return {
      routes: [...state.routes, action.route],
    };
  }


  if (action.type === REPLACE_ROUTE) {
    globalNav.navigator.replaceWithAnimation({ id: action.route, passProps: action.passProps });

    const routes = state.routes;
    routes.pop();

    return {
      routes: [...routes, action.route],
    };
  }

  // For sidebar navigation
  if (action.type === REPLACE_OR_PUSH_ROUTE) {
    let routes = state.routes;

    if (routes[routes.length - 1] === 'home') {
        // If top route is home and user navigates to a route other than home, then push
      if (action.route !== 'home') {
        globalNav.navigator.push({ id: action.route, passProps: action.passProps });
      } else {
        // If top route is home and user navigates to home, do nothing
        routes = [];
      }
    } else if (action.route === 'home') {
      globalNav.navigator.resetTo({ id: 'home', passProps: action.passProps });
      routes = [];
    }
    globalNav.navigator.replaceWithAnimation({ id: action.route, passProps: action.passProps });
    routes.pop();
    return {
      routes: [...routes, action.route],
    };
  }

  if (action.type === POP_ROUTE) {
    globalNav.navigator.pop({ passProps: action.passProps });

    const routes = state.routes;
    routes.pop();

    return {
      routes,
    };
  }

  if (action.type === POP_TO_ROUTE) {
    globalNav.navigator.popToRoute({ id: action.route, passProps: action.passProps });

    const routes = state.routes;
    while (routes.pop() !== action.route) {
      // while loop
    }

    return {
      routes: [...routes, action.route],
    };
  }

  if (action.type === REHYDRATE) {
    const savedData = action.payload.route || state;
    return {
      ...savedData,
    };
  }
  return state;
}
