import React, {useContext} from 'react'
import { useLocalStore, useObserver } from 'mobx-react';
import { StoreContext } from '../Context/AppContext';

//useObserver is depreciated
const BugsHeader = () => {

    const store = useContext(StoreContext);
    return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>)

}

export default BugsHeader
