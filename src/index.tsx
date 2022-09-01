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
import TicketView from "./TicketView";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path="landing" element={<LandingPage/>}/>
                <Route path="knowledge-base" element={<KnowledgeBase/>}/>
                <Route path="create-new" element={<CreateNew/>}/>
                <Route path="view-tickets" element={<ViewTickets/>}/>
                <Route path="profile" element={<Profile/>}>
                    <Route path="personal-info" element={<PersonalInfo/>}></Route>
                    <Route path="change-password" element={<ChangePassword/>}></Route>
                </Route>
                <Route path="ticket-view" element={<TicketView/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
