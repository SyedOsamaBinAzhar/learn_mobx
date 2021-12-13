import React, { useContext } from "react"
import { useLocalStore, useObserver, observer } from 'mobx-react';
import { StoreContext,StoreProvider } from "./Context/AppContext";
import BugsHeader from "./Components/BugsHeader";
import BugsList from "./Components/BugsList";
import BugsForm from "./Components/BugsForm";

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader/>
        <BugsList/>
        <BugsForm/>
      </main>
    </StoreProvider>
  );
}

export default App;
