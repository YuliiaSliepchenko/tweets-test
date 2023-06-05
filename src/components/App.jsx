import { Home } from "pages/Home/Home";
import { UserList } from "components/UserList/UserList"; 
import React from 'react';
import {  Navigate, Route ,Routes} from 'react-router-dom';

export const App = () => {
  return (
 
       <Routes>
      {/* <Switch> */}
        <Route path="/" element={<Home/>} />
      <Route path="/tweets" element={<UserList />} />
      <Route path="*"  element={<Navigate to='/'/>} />
        {/* <Redirect to="/" /> */}
       
        </Routes>
   
  );
};
