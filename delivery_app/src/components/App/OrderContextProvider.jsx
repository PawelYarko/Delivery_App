import {createContext , useState} from 'react';

const OrderContext = createContext();

const OrderContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const updateData = (newData) =>{
        setData(newData);
    }

    return (<OrderContext.Provider value={{data, updateData}}>
                {children}
            </OrderContext.Provider>
    );
  }
  
  export {OrderContextProvider, OrderContext};