import Header from "./Header";
import {Autocomplete, ScrollArea} from "@mantine/core";
import top_vector from "./svg/Landing Page/top_vector.svg";
import left_vector from "./svg/Landing Page/left_vector.svg"
import right_vector from "./svg/Landing Page/right_vector.svg"
import { Accordion } from '@mantine/core';
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate()

    const knowledgebase = () => {
        navigate("/knowledge-base")
    }

    const viewTickets = () => {
        navigate("/view-tickets")
    }

    const createNew = () => {
        navigate("/create-new")
    }

    return (
        <div>
            <Header/>
            <div className={"landing_page"}>
                <div className={"landing_page-header"}>
                    <div className={"landing_page-title"}>Help Centre</div>
                    <div className={"landing_page-links"}>
                        <div><button onClick={knowledgebase} className={"landing_page-knowledgeBase"}>Knowledge Base</button></div>
                        <div><button onClick={viewTickets} className={"landing_page-viewTickets"}>View Tickets</button></div>
                        <div className={"landing_page-buttonContainer"}>
                            <button onClick={createNew} className={"landing_page-createNew"}>Create New Ticket</button>
                        </div>
                    </div>
                </div>
                <div className={"line"}/>
                <ScrollArea style={{ height: "100vh" , width:"99vw" }} >
                <div className={"landing_page-content"}>
                    <div className={"landing_page-details"}>
                        <div>Need assistance?</div>
                        <img className={"landing_top-vector"} alt={""} src={top_vector}></img>
                    </div>
                    <div className={"landing_page-autocomplete"}>
                        <Autocomplete
                            size="md"
                            radius="md"
                            placeholder="Describe your Issue"
                            data={["Testing 1","Testing 2","Testing 3"]}
                            classNames={
                            {
                                input: 'autocomplete_input',
                            }
                        }
                        />
                    </div>
                    <div className={"landing_page-bottomVectors"}>
                        <img className={"landing_left-vector"} alt={""} src={left_vector}></img>
                        <img className={"landing_right-vector"} alt={""} src={right_vector}></img>
                    </div>

                    <div className={"landing_page-articles"}>
                        <strong>Frequently Asked Questions</strong>
                        <div className={"landing_page-accordion"}>
                            <Accordion
                                radius="xs"
                                styles={{
                                    item: {
                                        backgroundColor: '#C8E0E9',
                                        borderRadius: "0.25rem"
                                    },
                                    content:{
                                        backgroundColor: '#ffffff',
                                    }
                                }}
                                chevronPosition="right"
                                variant={"default"}>

                                <Accordion.Item value="customizations1">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations2">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations3">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations4">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>


                                <Accordion.Item value="customizations5">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations6">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations7">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations8">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations9">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations10">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations11">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="customizations12">
                                    <Accordion.Control>Customization</Accordion.Control>
                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs. Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
                                </Accordion.Item>

                            </Accordion>

                        </div>
                    </div>
                </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default LandingPage;
