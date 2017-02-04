
export type Action =
  { type: 'PUSH_NEW_ROUTE', route: string, passProps:any }
    | { type: 'POP_ROUTE', passProps:any }
    | { type: 'RESET_ROUTE' }
    | { type: 'POP_TO_ROUTE', route: string, passProps:any }
    | { type: 'REPLACE_ROUTE', route: string, passProps:any }
    | { type: 'REPLACE_OR_PUSH_ROUTE', route: string, passProps:any }
    | { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
