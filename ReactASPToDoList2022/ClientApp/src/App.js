import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import './custom.css';
import {FrontLayout} from "./pages/Front"
import {Home} from "./pages/Home/Home"
import {AuthLayout} from "./pages/Auth"
import {Login} from "./pages/Auth/Login"
import {UsersLayout} from "./pages/Users"
import {List as UsersList} from "./pages/Users/List"
import {NotFound} from "./pages/Special/NotFound"
import {Unauthorized} from "./pages/Special/Unauthorized"
import {useAuthContext} from "./providers/AuthProvider"


export const App = () => {
  let displayName = App.name;
  //const [{profile, accessToken}] = useAuthContext();

    return (
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/sign" element={<AuthLayout />}>
          <Route path="/sign/in" element={<Login />} />
        </Route>
        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<UsersList />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default App;
