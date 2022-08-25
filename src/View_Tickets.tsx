import Header from "./Header";
import {Pagination, Table} from '@mantine/core';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {usePagination} from "@mantine/hooks";

function ViewTickets() {
    const elements = [
        { ticket_id: 1, request_type: "Mobile Banking", request_subtype: "Locked Account", subject: "Unauthorised Access", status: "Open", assigned_agent: "Felix", datetime: "31st January 2020 - 14:15:06"},
        { ticket_id: 2, request_type: "Power BI", request_subtype: "Locked Account", subject: "Reports Distorted", status: "Pending", assigned_agent: "Not Assigned", datetime: "26th February 2019 - 14:29:26"},
        { ticket_id: 3, request_type: "USSD", request_subtype: "Locked Account", subject: "Error on Request", status: "Resolved", assigned_agent: "Orina", datetime: "21st March 2020 - 14:35:57"},
        { ticket_id: 4, request_type: "SMS", request_subtype: "Locked Account", subject: "Wrong Messages", status: "Closed", assigned_agent: "James", datetime: "16th April 2015 - 14:47:43"},
        { ticket_id: 5, request_type: "Agency Banking", request_subtype: "Locked Account", subject: "Locked Account", status: "Open", assigned_agent: "Not Assigned", datetime: "18th May 2018 - 15:59:01"},
        { ticket_id: 6, request_type: "Members Portal", request_subtype: "Locked Account", subject: "Empty Pages", status: "Pending", assigned_agent: "Izzie", datetime: "12th June 2021 - 12:59:59"},
        { ticket_id: 7, request_type: "ATM Bridge", request_subtype: "Locked Account", subject: "Cant Access", status: "Resolved", assigned_agent: "Not Assigned", datetime: "5th July 2022 - 16:41:05"},
        { ticket_id: 8, request_type: "NAV", request_subtype: "Locked Account", subject: "Locked Out", status: "Closed", assigned_agent: "Eric", datetime: "11th August 2019 - 11:38:41"},
        { ticket_id: 9, request_type: "Mobile Banking", request_subtype: "Locked Account", subject: "Locked Account", status: "Open", assigned_agent: "Not Assigned", datetime: "16th September 2018 - 17:24:15"},
        { ticket_id: 10, request_type: "ATM Bridge", request_subtype: "Locked Account", subject: "Money Not Reflecting", status: "Pending", assigned_agent: "William", datetime: "27th October 2016 - 10:13:14"},
        { ticket_id: 11, request_type: "Members Portal", request_subtype: "Locked Account", subject: "Empty Pages", status: "Resolved", assigned_agent: "Izzie", datetime: "30th November 2014 - 18:06:55"},
        { ticket_id: 12, request_type: "Power BI", request_subtype: "Locked Account", subject: "Reports Distorted", status: "Closed", assigned_agent: "Not Assigned", datetime: "18th December 2017 - 09:19:29"},
        { ticket_id: 13, request_type: "USSD", request_subtype: "Locked Account", subject: "Error on Request", status: "Open", assigned_agent: "Orina", datetime: "14th January 2018 - 19:24:14"},
        { ticket_id: 14, request_type: "SMS", request_subtype: "Locked Account", subject: "Wrong Messages", status: "Pending", assigned_agent: "James", datetime: "24th June 2021 - 08:38:24"},
        { ticket_id: 15, request_type: "Agency Banking", request_subtype: "Locked Account", subject: "Locked Account", status: "Resolved", assigned_agent: "Not Assigned", datetime: "31st December 2022 - 20:46:31"},

    ];

    const rows = elements.map((element) => (
        <tr>
            <td>{element.ticket_id}</td>
            <td>{element.request_type}</td>
            <td>{element.request_subtype}</td>
            <td>{element.subject}</td>
            <td>{element.status}</td>
            <td>{element.assigned_agent}</td>
            <td>{element.datetime}</td>
        </tr>
    ));

    const navigate = useNavigate()

    const handleCreateTicket = () => {
        navigate("/createNew")
    }

    return (
        <div>
            <Header/>
            <div className={"viewTickets"}>
                <div className={"view_tickets-content--header"}>
                    <div>Back</div>
                    <div>Tickets</div>
                    <button onClick={handleCreateTicket}>Create Ticket</button>
                </div>
                <div className={"line"}></div>
                <div>
                    <div>Breadcrumbs</div>
                    <div>Search</div>
                </div>
                <div className={"view_tickets-content"}>

                    <Table
                        highlightOnHover
                    >

                        <thead>
                        <tr>
                            <th>Ticket Id</th>
                            <th>Request type</th>
                            <th>Request subtype</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Assigned agent</th>
                            <th>Datetime</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>

                    </Table>
                </div>
            </div>

        </div>
    )
}

export default ViewTickets
