import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import { Header, MainContainer, CreateContainer } from './components';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useStateValue } from './components/context/StateProvider';
import { actionType } from './components/context/reducer';

const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async()=>{
    await getAllFoodItems().then(data =>{
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
    })
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>

      <main className="mt-16 md:mt-24 px-8 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer/>}/>
          <Route path="/createItem" element={<CreateContainer/>}/>
        </Routes>
      </main>
      </div>
    </AnimatePresence>
  )
}

export default App;