import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./Landing";
import ViewTickets from "./View_Tickets";
import CreateNew from "./Create_New_Ticket";
import KnowledgeBase from "./Knowledge_Base";
import Profile from "./Profile";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./Change_Password";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path="landing" element={<LandingPage/>}/>
                <Route path="knowledgebase" element={<KnowledgeBase/>}/>
                <Route path="createNew" element={<CreateNew/>}/>
                <Route path="viewTickets" element={<ViewTickets/>}/>
                <Route path="profile" element={<Profile/>}>
                    <Route path="personal_info" element={<PersonalInfo/>}></Route>
                    <Route path="change_password" element={<ChangePassword/>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
