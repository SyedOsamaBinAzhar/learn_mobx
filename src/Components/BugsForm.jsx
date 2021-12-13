import React, { useContext, useState } from "react"
import { observer } from 'mobx-react';
import { StoreContext,StoreProvider } from "../Context/AppContext";

const BugsForm = () => {
    const store = useContext(StoreContext);
    const [bug,setBug] = useState("");
  
    return (
      <form
      onSubmit={e => {
        store.addBug(bug)
        setBug("")
        e.preventDefault();
  
      }}
      >
        <input type = "text" value = {bug} onChange={ e => setBug(e.target.value)}/>
        <button type= "submit">ADD</button>
      </form>
    )
}

export default BugsForm