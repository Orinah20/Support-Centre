import Header from "./Header";

function ViewTickets() {
    return (
        <div>
            <Header/>
            <div className={"view_tickets-content"}>
                <div className={"view_tickets-content--header"}>
                    <div>Back</div>
                    <div>Tickets</div>
                    <button>Create Ticket</button>
                </div>
                <div className={"line"}></div>

            </div>

        </div>
    )
}

export default ViewTickets
