import Header from "./Header";
import {Accordion, Anchor, Breadcrumbs, CloseButton} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import avatar from "./svg/Tickets/Avatar.svg"

function TicketView() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1)
    }

    const items = [
        {title: 'Home', href: '/landing'},
        {title: 'Tickets', href: '/view-tickets'},
        {title: '#1'},
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <div>
            <Header/>
            <div className={"ticket"}>
                <div className={"ticket-nav"}>
                    <CloseButton title="Close popover" size="sm" className={"createNew-close"} iconSize={18}
                                 onClick={handleClose}/>
                    <CloseButton title="Close popover" size="sm" className={"createNew-close"} iconSize={18}
                                 onClick={handleClose}/>
                </div>

                <div className={"ticket-content"}>
                    <div className={"ticket-breadcrumb"}>
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

                            }}
                        >{items}
                        </Breadcrumbs>
                    </div>

                    <div className={"ticket-content_container"}>
                        <div className={"ticket-left"}>
                            <div className={"ticket-chat_header"}>1</div>
                            <div className={"ticket-chat_content"}>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>

                        </div>
                        <div className={"ticket-right"}>
                            <Accordion
                                radius="xs"
                                styles={{
                                    item: {
                                        backgroundColor: '#C8E0E9',
                                        borderRadius: "0.25rem"
                                    },
                                    content: {
                                        backgroundColor: '#ffffff',
                                    }
                                }}
                                chevronPosition="right"
                                variant={"default"}
                                defaultValue={"customizations1"}>

                                <Accordion.Item value="customizations1">
                                    <Accordion.Control>Ticket Request</Accordion.Control>
                                    <Accordion.Panel>
                                        <div className={"accordion-data flex-row"}>
                                            <div className={"flex-column accordion-data-1"}>
                                                <div>Request ID</div>
                                                <div>Type</div>
                                                <div>Subtype</div>
                                                <div>Priority</div>
                                            </div>
                                            <div className={"flex-column accordion-data-2"}>
                                                <div>:</div>
                                                <div>:</div>
                                                <div>:</div>
                                                <div>:</div>
                                            </div>
                                            <div className={"flex-column accordion-data-3"}>
                                                <div>#1</div>
                                                <div>Mobile Banking</div>
                                                <div>Locked Account</div>
                                                <div>Critical</div>
                                            </div>
                                        </div>
                                        <div className={"line"}/>

                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations2">
                                    <Accordion.Control>Agent Information</Accordion.Control>
                                    <Accordion.Panel>
                                        <div className={"accordion-data"}>
                                            <div className={"flex-row"}>
                                                <div className={"accordion-avatar flex-row"}>
                                                    <img src={avatar} alt={""}></img>
                                                </div>
                                                <div className={"accordion-data_right"}>
                                                    <div className={"accordion-data flex-row"}>
                                                        <div className={"flex-column accordion-data-1"}>
                                                            <div>Full Name</div>
                                                            <div>Phone Number</div>
                                                            <div>Email Address</div>
                                                        </div>
                                                        <div className={"flex-column accordion-data-2"}>
                                                            <div>:</div>
                                                            <div>:</div>
                                                            <div>:</div>
                                                        </div>
                                                        <div className={"flex-column accordion-data-3"}>
                                                            <div>Felix Orina</div>
                                                            <div>+254712345678</div>
                                                            <div>forinan@gmail.com</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TicketView;
