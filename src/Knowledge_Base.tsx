import Header from "./Header";
import backArrow from "./svg/Knowledge Base/back.svg"
import {Accordion, Autocomplete} from "@mantine/core";
import {useNavigate} from "react-router-dom";

function KnowledgeBase() {
    const navigate = useNavigate();

    const previousRoute = () => {
        navigate(-1)
    }

    const viewTickets = () => {
        navigate("/viewTickets")
    }

    const createNew = () => {
        navigate("/createNew")
    }

    return (
        <div>
            <Header/>
            <div className={"knowledge_base"}>
                <div className={"navbar"}>
                    <div className={"navbar_header"}>
                        <img className={"navbar_header-icon"} alt={""} src={backArrow} onClick={previousRoute}></img>
                        <div className={"navbar_header-name"}>Type</div>
                    </div>
                    <div className={"navbar_content"}>Unstructured Supplementary Service Data(USSD)</div>
                    <div className={"navbar_content"}>Power Business Intelligence(BI)</div>
                    <div className={"navbar_content"}>Automatic Teller Machine(ATM) Bridge</div>
                    <div className={"navbar_content-test"}>Short Message Service(SMS)</div>
                    <div className={"navbar_content"}>Dynamics NAV</div>
                    <div className={"navbar_content"}>Member Portal</div>
                    <div className={"navbar_content"}>Mobile Banking</div>
                    <div className={"navbar_content"}>Agency Banking</div>
                </div>
                <div className={"knowledge_base-content"}>
                    <div className={"knowledge_base-header"}>
                        <div className={"knowledge_base-header__name"}>Knowledge Base</div>
                        <div className={"knowledge_base-header__links"}>
                            <div>
                                <button onClick={viewTickets} className={"landing_page-viewTickets"}>View Tickets
                                </button>
                            </div>
                            <div className={""}>
                                <button onClick={createNew} className={"landing_page-createNew"}>Create New Ticket
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={"line"}/>

                    <div className={"knowledge_base-content__container"}>
                        <div className={"knowledge_base-search"}>
                            <Autocomplete
                                size="xs"
                                radius="md"
                                ml={"xs"}
                                placeholder="Search"
                                data={["Testing 1", "Testing 2", "Testing 3"]}
                                classNames={
                                    {
                                        input: 'knowledge_base-autocomplete',
                                    }
                                }
                            />
                        </div>

                        <div>
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
                                variant={"default"}>

                                <Accordion.Item value="customizations1">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations2">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations3">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations4">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>


                                <Accordion.Item value="customizations5">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations6">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations7">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations8">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations9">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations10">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>


                                <Accordion.Item value="customizations11">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations12">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit
                                        your design needs. Colors, fonts, shadows and many other parts are customizable
                                        to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KnowledgeBase
