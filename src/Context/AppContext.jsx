import React, { useContext, createContext } from "react"
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
    const store = useLocalStore(() => ({
      //obervable
      bugs : ["insect1"],
      //action
      addBug : bug => {
        store.bugs.push(bug)
      },
      //computed
      get bugsCount() {
        return store.bugs.length;
      }
    }))
  
    return (
      <StoreContext.Provider value = {store} >{children}</StoreContext.Provider>
    )
  }

export {StoreContext,StoreProvider}