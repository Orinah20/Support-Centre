import Header from "./Header";

function LandingPage(){
    return (
        <div>
            <Header/>
            <div className={"landing_page-header"}>
                <div className={"landing_page-title"} >Help Centre</div>
                <div className={"landing_page-links"}>
                    <div>Knowledge Base</div>
                    <div>View Tickets</div>
                    <div>Create New Ticket</div>
                </div>
            </div>
            <div className={"line"}>Line</div>
        </div>
    )
}

export default LandingPage;
