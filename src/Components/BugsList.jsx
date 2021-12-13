import React, {useContext} from 'react'
import { useObserver,observer } from 'mobx-react';
import { StoreContext } from '../Context/AppContext';

const BugsList = observer((children) => {
    const store = React.useContext(StoreContext);
   return (
     <ul>
        {store.bugs.map(bug => (
         <li key = {bug}>{bug}</li>
       ))}
      </ul>
   )
 
 })

export default BugsList
