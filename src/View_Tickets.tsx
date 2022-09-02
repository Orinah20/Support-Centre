import Header from "./Header";
import {Anchor, Autocomplete, Breadcrumbs, createStyles, ScrollArea, Table} from '@mantine/core';
import {useState} from "react";
import Footer from "./Footer";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import {useNavigate} from "react-router-dom";
import back from "./svg/Tickets/back.svg"

interface Ticket {
    ticket_id: number,
    request_type: string,
    request_subtype: string,
    subject: string,
    status: string,
    assigned_agent: string,
    datetime: string
}

function ViewTickets() {
    const useStyles = createStyles((theme) => ({
        header: {
            position: 'sticky',
            top: 0,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            transition: 'box-shadow 150ms ease',

            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                borderBottom: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
                }`,
            },
        },

        scrolled: {
            boxShadow: theme.shadows.sm,
        },
    }));

    const elements: Ticket[] = [
        {
            ticket_id: 1,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Unauthorised Access",
            status: "Open",
            assigned_agent: "Felix",
            datetime: "31st January 2020 - 14:15:06"
        },
        {
            ticket_id: 2,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Pending",
            assigned_agent: "Not Assigned",
            datetime: "26th February 2019 - 14:29:26"
        },
        {
            ticket_id: 3,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Resolved",
            assigned_agent: "Orina",
            datetime: "21st March 2020 - 14:35:57"
        },
        {
            ticket_id: 4,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Closed",
            assigned_agent: "James",
            datetime: "16th April 2015 - 14:47:43"
        },
        {
            ticket_id: 5,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "18th May 2018 - 15:59:01"
        },
        {
            ticket_id: 6,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Pending",
            assigned_agent: "Izzie",
            datetime: "12th June 2021 - 12:59:59"
        },
        {
            ticket_id: 7,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Cant Access",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "5th July 2022 - 16:41:05"
        },
        {
            ticket_id: 8,
            request_type: "NAV",
            request_subtype: "Locked Account",
            subject: "Locked Out",
            status: "Closed",
            assigned_agent: "Eric",
            datetime: "11th August 2019 - 11:38:41"
        },
        {
            ticket_id: 9,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "16th September 2018 - 17:24:15"
        },
        {
            ticket_id: 10,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Money Not Reflecting",
            status: "Pending",
            assigned_agent: "William",
            datetime: "27th October 2016 - 10:13:14"
        },
        {
            ticket_id: 11,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Resolved",
            assigned_agent: "Izzie",
            datetime: "30th November 2014 - 18:06:55"
        },
        {
            ticket_id: 12,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Closed",
            assigned_agent: "Not Assigned",
            datetime: "18th December 2017 - 09:19:29"
        },
        {
            ticket_id: 13,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Open",
            assigned_agent: "Orina",
            datetime: "14th January 2018 - 19:24:14"
        },
        {
            ticket_id: 14,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Pending",
            assigned_agent: "James",
            datetime: "24th June 2021 - 08:38:24"
        },
        {
            ticket_id: 15,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "31st December 2022 - 20:46:31"
        },

        {
            ticket_id: 1,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Unauthorised Access",
            status: "Open",
            assigned_agent: "Felix",
            datetime: "31st January 2020 - 14:15:06"
        },
        {
            ticket_id: 2,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Pending",
            assigned_agent: "Not Assigned",
            datetime: "26th February 2019 - 14:29:26"
        },
        {
            ticket_id: 3,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Resolved",
            assigned_agent: "Orina",
            datetime: "21st March 2020 - 14:35:57"
        },
        {
            ticket_id: 4,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Closed",
            assigned_agent: "James",
            datetime: "16th April 2015 - 14:47:43"
        },
        {
            ticket_id: 5,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "18th May 2018 - 15:59:01"
        },
        {
            ticket_id: 6,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Pending",
            assigned_agent: "Izzie",
            datetime: "12th June 2021 - 12:59:59"
        },
        {
            ticket_id: 7,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Cant Access",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "5th July 2022 - 16:41:05"
        },
        {
            ticket_id: 8,
            request_type: "NAV",
            request_subtype: "Locked Account",
            subject: "Locked Out",
            status: "Closed",
            assigned_agent: "Eric",
            datetime: "11th August 2019 - 11:38:41"
        },
        {
            ticket_id: 9,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "16th September 2018 - 17:24:15"
        },
        {
            ticket_id: 10,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Money Not Reflecting",
            status: "Pending",
            assigned_agent: "William",
            datetime: "27th October 2016 - 10:13:14"
        },
        {
            ticket_id: 11,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Resolved",
            assigned_agent: "Izzie",
            datetime: "30th November 2014 - 18:06:55"
        },
        {
            ticket_id: 12,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Closed",
            assigned_agent: "Not Assigned",
            datetime: "18th December 2017 - 09:19:29"
        },
        {
            ticket_id: 13,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Open",
            assigned_agent: "Orina",
            datetime: "14th January 2018 - 19:24:14"
        },
        {
            ticket_id: 14,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Pending",
            assigned_agent: "James",
            datetime: "24th June 2021 - 08:38:24"
        },
        {
            ticket_id: 15,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "31st December 2022 - 20:46:31"
        },
        {
            ticket_id: 1,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Unauthorised Access",
            status: "Open",
            assigned_agent: "Felix",
            datetime: "31st January 2020 - 14:15:06"
        },
        {
            ticket_id: 2,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Pending",
            assigned_agent: "Not Assigned",
            datetime: "26th February 2019 - 14:29:26"
        },
        {
            ticket_id: 3,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Resolved",
            assigned_agent: "Orina",
            datetime: "21st March 2020 - 14:35:57"
        },
        {
            ticket_id: 4,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Closed",
            assigned_agent: "James",
            datetime: "16th April 2015 - 14:47:43"
        },
        {
            ticket_id: 5,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "18th May 2018 - 15:59:01"
        },
        {
            ticket_id: 6,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Pending",
            assigned_agent: "Izzie",
            datetime: "12th June 2021 - 12:59:59"
        },
        {
            ticket_id: 7,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Cant Access",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "5th July 2022 - 16:41:05"
        },
        {
            ticket_id: 8,
            request_type: "NAV",
            request_subtype: "Locked Account",
            subject: "Locked Out",
            status: "Closed",
            assigned_agent: "Eric",
            datetime: "11th August 2019 - 11:38:41"
        },
        {
            ticket_id: 9,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "16th September 2018 - 17:24:15"
        },
        {
            ticket_id: 10,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Money Not Reflecting",
            status: "Pending",
            assigned_agent: "William",
            datetime: "27th October 2016 - 10:13:14"
        },
        {
            ticket_id: 11,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Resolved",
            assigned_agent: "Izzie",
            datetime: "30th November 2014 - 18:06:55"
        },
        {
            ticket_id: 12,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Closed",
            assigned_agent: "Not Assigned",
            datetime: "18th December 2017 - 09:19:29"
        },
        {
            ticket_id: 13,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Open",
            assigned_agent: "Orina",
            datetime: "14th January 2018 - 19:24:14"
        },
        {
            ticket_id: 14,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Pending",
            assigned_agent: "James",
            datetime: "24th June 2021 - 08:38:24"
        },
        {
            ticket_id: 15,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "31st December 2022 - 20:46:31"
        },

        {
            ticket_id: 1,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Unauthorised Access",
            status: "Open",
            assigned_agent: "Felix",
            datetime: "31st January 2020 - 14:15:06"
        },
        {
            ticket_id: 2,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Pending",
            assigned_agent: "Not Assigned",
            datetime: "26th February 2019 - 14:29:26"
        },
        {
            ticket_id: 3,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Resolved",
            assigned_agent: "Orina",
            datetime: "21st March 2020 - 14:35:57"
        },
        {
            ticket_id: 4,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Closed",
            assigned_agent: "James",
            datetime: "16th April 2015 - 14:47:43"
        },
        {
            ticket_id: 5,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "18th May 2018 - 15:59:01"
        },
        {
            ticket_id: 6,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Pending",
            assigned_agent: "Izzie",
            datetime: "12th June 2021 - 12:59:59"
        },
        {
            ticket_id: 7,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Cant Access",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "5th July 2022 - 16:41:05"
        },
        {
            ticket_id: 8,
            request_type: "NAV",
            request_subtype: "Locked Account",
            subject: "Locked Out",
            status: "Closed",
            assigned_agent: "Eric",
            datetime: "11th August 2019 - 11:38:41"
        },
        {
            ticket_id: 9,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "16th September 2018 - 17:24:15"
        },
        {
            ticket_id: 10,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Money Not Reflecting",
            status: "Pending",
            assigned_agent: "William",
            datetime: "27th October 2016 - 10:13:14"
        },
        {
            ticket_id: 11,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Resolved",
            assigned_agent: "Izzie",
            datetime: "30th November 2014 - 18:06:55"
        },
        {
            ticket_id: 12,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Closed",
            assigned_agent: "Not Assigned",
            datetime: "18th December 2017 - 09:19:29"
        },
        {
            ticket_id: 13,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Open",
            assigned_agent: "Orina",
            datetime: "14th January 2018 - 19:24:14"
        },
        {
            ticket_id: 14,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Pending",
            assigned_agent: "James",
            datetime: "24th June 2021 - 08:38:24"
        },
        {
            ticket_id: 15,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "31st December 2022 - 20:46:31"
        },

        {
            ticket_id: 1,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Unauthorised Access",
            status: "Open",
            assigned_agent: "Felix",
            datetime: "31st January 2020 - 14:15:06"
        },
        {
            ticket_id: 2,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Pending",
            assigned_agent: "Not Assigned",
            datetime: "26th February 2019 - 14:29:26"
        },
        {
            ticket_id: 3,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Resolved",
            assigned_agent: "Orina",
            datetime: "21st March 2020 - 14:35:57"
        },
        {
            ticket_id: 4,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Closed",
            assigned_agent: "James",
            datetime: "16th April 2015 - 14:47:43"
        },
        {
            ticket_id: 5,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "18th May 2018 - 15:59:01"
        },
        {
            ticket_id: 6,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Pending",
            assigned_agent: "Izzie",
            datetime: "12th June 2021 - 12:59:59"
        },
        {
            ticket_id: 7,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Cant Access",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "5th July 2022 - 16:41:05"
        },
        {
            ticket_id: 8,
            request_type: "NAV",
            request_subtype: "Locked Account",
            subject: "Locked Out",
            status: "Closed",
            assigned_agent: "Eric",
            datetime: "11th August 2019 - 11:38:41"
        },
        {
            ticket_id: 9,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "16th September 2018 - 17:24:15"
        },
        {
            ticket_id: 10,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Money Not Reflecting",
            status: "Pending",
            assigned_agent: "William",
            datetime: "27th October 2016 - 10:13:14"
        },
        {
            ticket_id: 11,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Resolved",
            assigned_agent: "Izzie",
            datetime: "30th November 2014 - 18:06:55"
        },
        {
            ticket_id: 12,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Closed",
            assigned_agent: "Not Assigned",
            datetime: "18th December 2017 - 09:19:29"
        },
        {
            ticket_id: 13,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Open",
            assigned_agent: "Orina",
            datetime: "14th January 2018 - 19:24:14"
        },
        {
            ticket_id: 14,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Pending",
            assigned_agent: "James",
            datetime: "24th June 2021 - 08:38:24"
        },
        {
            ticket_id: 15,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "31st December 2022 - 20:46:31"
        },

        {
            ticket_id: 1,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Unauthorised Access",
            status: "Open",
            assigned_agent: "Felix",
            datetime: "31st January 2020 - 14:15:06"
        },
        {
            ticket_id: 2,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Pending",
            assigned_agent: "Not Assigned",
            datetime: "26th February 2019 - 14:29:26"
        },
        {
            ticket_id: 3,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Resolved",
            assigned_agent: "Orina",
            datetime: "21st March 2020 - 14:35:57"
        },
        {
            ticket_id: 4,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Closed",
            assigned_agent: "James",
            datetime: "16th April 2015 - 14:47:43"
        },
        {
            ticket_id: 5,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "18th May 2018 - 15:59:01"
        },
        {
            ticket_id: 6,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Pending",
            assigned_agent: "Izzie",
            datetime: "12th June 2021 - 12:59:59"
        },
        {
            ticket_id: 7,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Cant Access",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "5th July 2022 - 16:41:05"
        },
        {
            ticket_id: 8,
            request_type: "NAV",
            request_subtype: "Locked Account",
            subject: "Locked Out",
            status: "Closed",
            assigned_agent: "Eric",
            datetime: "11th August 2019 - 11:38:41"
        },
        {
            ticket_id: 9,
            request_type: "Mobile Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Open",
            assigned_agent: "Not Assigned",
            datetime: "16th September 2018 - 17:24:15"
        },
        {
            ticket_id: 10,
            request_type: "ATM Bridge",
            request_subtype: "Locked Account",
            subject: "Money Not Reflecting",
            status: "Pending",
            assigned_agent: "William",
            datetime: "27th October 2016 - 10:13:14"
        },
        {
            ticket_id: 11,
            request_type: "Members Portal",
            request_subtype: "Locked Account",
            subject: "Empty Pages",
            status: "Resolved",
            assigned_agent: "Izzie",
            datetime: "30th November 2014 - 18:06:55"
        },
        {
            ticket_id: 12,
            request_type: "Power BI",
            request_subtype: "Locked Account",
            subject: "Reports Distorted",
            status: "Closed",
            assigned_agent: "Not Assigned",
            datetime: "18th December 2017 - 09:19:29"
        },
        {
            ticket_id: 13,
            request_type: "USSD",
            request_subtype: "Locked Account",
            subject: "Error on Request",
            status: "Open",
            assigned_agent: "Orina",
            datetime: "14th January 2018 - 19:24:14"
        },
        {
            ticket_id: 14,
            request_type: "SMS",
            request_subtype: "Locked Account",
            subject: "Wrong Messages",
            status: "Pending",
            assigned_agent: "James",
            datetime: "24th June 2021 - 08:38:24"
        },
        {
            ticket_id: 15,
            request_type: "Agency Banking",
            request_subtype: "Locked Account",
            subject: "Locked Account",
            status: "Resolved",
            assigned_agent: "Not Assigned",
            datetime: "31st December 2022 - 20:46:31"
        },

    ];

    const limit = [5, 10, 20, 30, 40, 50]

    const columnHelper = createColumnHelper<Ticket>()

    const columns = [
        columnHelper.accessor('ticket_id', {
            header: () => <span>Ticket ID</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('request_type', {
            header: () => <span>Request Type</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('request_subtype', {
            header: () => <span>Request Subtype</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('subject', {
            header: () => <span>Subject</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('status', {
            header: () => <span>Status</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('assigned_agent', {
            header: () => <span>Assigned Agent</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('datetime', {
            header: () => <span>Created On</span>,
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
    ]

    const [value] = useState(1)

    const navigate = useNavigate()

    const handleCreateTicket = () => {
        navigate("/create-new")
    }

    const handleBack = () => {
        navigate(-1)
    }

    const ticketView = () => {
        navigate("/ticket-view")
    }

    const handleChange = (e: any) => {

        const page = e.target.value ? Number(e.target.value) - 1 : 0;
        if (page < table.getPageCount()) {
            table.setPageIndex(page)

        } else {
            alert("Invalid Page")
        }

        /* // get data
         // length of data
         // limit /page
         // pages = math.floor(length/ limit)

         const length = elements.length;
         // const max = table.getState().pagination.pageSize - 1;
         // const min = table.getPageCount() - table.getPageCount() + 1;

         // const pages = Math.max(min, Math.min(max, Number(e.target.value)));
         const pages = Math.ceil(length / newLimit);
         console.log(`Pages ${pages}`)
         setValue(pages);

         const page = Number(e.target.value - 1)

         if(page <= pages){
             table.setPageIndex(page)
         }
         else{
             table.setPageIndex(1)
         }
         console.log(`page - ${page}`)
 */
    }


    const items = [
        {title: 'Home', href: '/landing'},
        {title: 'Tickets'},
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);

    const [data] = useState(() => [...elements])
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <div>
            <Header/>
            <div className={"viewTickets"}>
                <div className={"view_tickets-content--header"}>
                    <div className={"viewTickets-upper_header"}>
                        <img src={back} alt={""} className={"viewTickets-back"} onClick={handleBack}/>
                        <div className={"viewTickets-infoName"}>Tickets</div>
                        <div className={"createTicket-button"}>
                            <button className={"createButton"} onClick={handleCreateTicket}>Create New Ticket</button>
                        </div>
                    </div>

                </div>
                <div className={"line"}></div>
                <div className={"viewTickets-lower_header"}>
                    <Breadcrumbs
                        styles={{
                            breadcrumb: {
                                color: "#003051",
                                padding: "0",
                            },

                            root: {
                                textDecoration: "none",
                            },

                            separator: {
                                margin: "0 0.2rem",
                            }

                        }}>{items}</Breadcrumbs>
                    <div className={"viewTicket-filters"}>
                        <div>
                            Records :
                            <select
                                className={"viewTickets-select"}
                                value={table.getState().pagination.pageSize}

                                onChange={e => {
                                    table.setPageSize(Number(e.target.value))
                                }}
                            >
                                {limit.map(pageSize => (
                                    <option className={"viewTickets-option"} key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            Status :
                            <select name={"choices"} className={"viewTickets-select"}>
                                <option value={""}>Open</option>
                                <option value={""}>Pending</option>
                                <option value={""}>Resolved</option>
                                <option value={""}>Closed</option>
                            </select>

                        </div>
                        <div>
                            <Autocomplete
                                size="xs"
                                placeholder="Search"
                                data={["Testing 1", "Testing 2", "Testing 3"]}
                                classNames={
                                    {
                                        input: 'knowledge_base-autocomplete',
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={"view_tickets-content"}>
                    <ScrollArea offsetScrollbars scrollbarSize={6} sx={{height: "100%"}}
                                onScrollPositionChange={({y}) => setScrolled(y !== 0)}>
                        <Table highlightOnHover>
                            <thead className={cx(classes.header, {[classes.scrolled]: scrolled})}>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <th key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : (
                                                    <div
                                                        {...{
                                                            className: header.column.getCanSort()
                                                                ? 'cursor-pointer select-none'
                                                                : '',
                                                            onClick: header.column.getToggleSortingHandler(),
                                                        }}
                                                    >
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                        {{
                                                            asc: '🔼',
                                                            desc: ' 🔽',
                                                        }[header.column.getIsSorted() as string] ?? null}
                                                    </div>
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody>
                            {value < table.getPageCount() ?
                                table.getRowModel().rows.map(row => (
                                <tr
                                    onClick={ticketView}
                                    style={{
                                        cursor: "pointer"
                                    }} key={row.id}>

                                        {row.getVisibleCells().map(cell => (
                                                <td key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                </tr>
                            ))
                            :
                                <tbody >No Data</tbody>
                            }
                            </tbody>
                        </Table>
                    </ScrollArea>
                </div>
                <div className={"viewTickets-pagination"}>
                    <button
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>

                    <span className={"viewTickets-input_container"}>
                        Go to page:
                    <input
                        max={table.getPageCount()}
                        min={1}
                        defaultValue={""}
                        type="text"
                        onChange={handleChange}
                        className="viewTickets-input"
                        maxLength={table.getPageCount().toString().length}
                    />
                </span>

                </div>

            </div>
            <Footer/>

        </div>
    )
}

export default ViewTickets
