/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, useReducer } from 'react';

export type Action = {
  type: 'CHANGE_VALUE' | 'CLEAR_VALUE';
  name: string;
  value: string;
};
export type InputDataType = { [index: string]: string };

const initialState: InputDataType = {};

const reducer = (state: InputDataType, action: Action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'CLEAR_VALUE':
      return {
        ...state,
        [action.name]: '',
      };
    default:
      return state;
  }
};

export const Page3Context = React.createContext(
  {} as {
    state: InputDataType;
    dispatch: React.Dispatch<Action>;
  },
);

export const Page3ContextProvider: FC<any> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <Page3Context.Provider value={{ state, dispatch }}>
      {children}
    </Page3Context.Provider>
  );
};
