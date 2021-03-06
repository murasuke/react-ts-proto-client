import React , {useReducer, useContext} from 'react';

export type Action ={ type: 'CHANGE_VALUE' | 'CLEAR_VALUE', name: string, value: string }
export type InputDataType = {[index:string]: string};

const initialState: InputDataType = {}

function reducer(state:InputDataType,  action: Action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.name]: action.value
      };
      case 'CLEAR_VALUE':
        return {
          ...state,
          [action.name]: ""
        };
    default : 
      return state
  }
}

export const Page3Context = React.createContext({} as {
  state: InputDataType
  dispatch: React.Dispatch<Action>
});

export const Page3ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Page3Context.Provider value={{state, dispatch}}>
    {props.children}
  </Page3Context.Provider>
}
