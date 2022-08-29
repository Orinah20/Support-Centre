
function Footer (){
    return(
        <div className={"viewTickets-footer"}>
            <div className={"viewTickets-footer_content"}>
                <div className={"viewTickets-open"}>Open: 0</div>
                <div className={"viewTickets-pending"}>Pending: 0</div>
                <div className={"viewTickets-resolved"}>Resolved: 0</div>
                <div className={"viewTickets-closed"}>Closed: 0</div>
            </div>
        </div>
    )
}

export default Footer
