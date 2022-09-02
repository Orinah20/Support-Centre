import Header from "./Header";
import {
    Accordion,
    Anchor,
    Breadcrumbs,
    Button,
    CloseButton,
    createStyles,
    Group,
    Modal,
    Textarea
} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import avatar from "./svg/Tickets/Avatar.svg"
import {useState} from "react";
import {RichTextEditor} from "@mantine/rte";

function TicketView() {
    const useStyles = createStyles((theme) => ({
        root: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            borderRadius: theme.radius.sm,
        },

        item: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            border: '1px solid transparent',
            position: 'relative',
            zIndex: 0,
            transition: 'transform 150ms ease',

            '&[data-active]': {
                transform: 'scale(1.03)',
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
                boxShadow: theme.shadows.md,
                borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
                borderRadius: theme.radius.md,
                zIndex: 1,
            },
        },

        chevron: {
            '&[data-rotate]': {
                transform: 'rotate(-90deg)',
            },
        },
    }));

    const onChange = () => {

    }

    const [opened, setOpened] = useState(false);

    const {classes} = useStyles();

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1)
    }

    const [value, setValue] = useState<string[]>([]);

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
                    <div className={"flex-row"}>
                        <CloseButton title="Close popover" size="sm" className={"createNew-close"} iconSize={18}
                                     onClick={handleClose}/>
                        <CloseButton title="Close popover" size="sm" className={"createNew-close"} iconSize={18}
                                     onClick={handleClose}/>
                    </div>

                    <Modal
                        size="lg"
                        styles={{
                            modal: {
                                backgroundColor: "#FAFBFC",
                            },
                            header: {
                                font: "inherit",
                                fontSize: "1.5rem",
                            },
                            close: {
                                height: "40px",
                                width: "40px",
                            }
                        }}
                        centered
                        overlayOpacity={0.55}
                        overlayBlur={2}
                        opened={opened}
                        onClose={() => setOpened(false)}
                        title="Close Issue"
                    >
                        <Textarea
                            styles={{
                                input: {
                                    height: "15rem"
                                }
                            }}
                            placeholder="Comment"
                            label="Your comment"
                            size="md"
                        />
                        <Group
                            position="right"
                            pr="md"
                            mt={"xs"}
                        >
                            <Button
                                color="red"
                                size="xs"
                            >
                                Close
                            </Button>
                        </Group>
                    </Modal>

                    <Button
                        mr={"sm"}
                        type="submit"
                        styles={{
                            root: {
                                height: "1.5rem",
                                backgroundColor: "#003051",
                                font: "inherit",
                            }
                        }}
                        onClick={() => setOpened(true)}
                    >
                        Close Issue
                    </Button>
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
                            <div className={"ticket-chat_header"}>
                                <div>Unauthorised Access</div>
                                <div className={"chat-header_left"}>
                                    <span>Created on : 31st January 2020 - 14:15:06</span>
                                    <span className={"chat-header_status"}>Open</span>
                                </div>
                            </div>
                            <div className={"ticket-chat_content"}>
                                <div className={"ticket-richText"}>
                                    <RichTextEditor
                                        readOnly
                                        controls={[]}
                                        value={"number"}
                                        styles={{
                                            toolbar: {
                                                display: "none"
                                            },
                                            root: {
                                                maxHeight: "95%",
                                                backgroundColor: "#E7EEF5",
                                                padding: "0.5rem",
                                                overflow: "auto"
                                            }
                                        }}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={"ticket-chats"}>
                                    <div>5</div>
                                </div>
                                <div className={"ticket-newChat"}>
                                    <RichTextEditor
                                        styles={{
                                            root: {
                                                height: "100%",
                                                overflow: "auto",
                                            }
                                        }}
                                        placeholder="Write your description here"
                                        value={"number"}
                                        onChange={onChange}/>
                                    <div>
                                        <Group
                                            position="right"
                                            pr="md"
                                            mt={"xs"}
                                        >
                                            <Button
                                                size="xs"
                                                type="submit"
                                                styles={{
                                                    root: {
                                                        backgroundColor: "#003051",
                                                        font: "inherit",
                                                        fontSize: "0.8rem",
                                                    }
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Group>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className={"ticket-right"}>
                            <Accordion
                                multiple value={value}
                                radius="xs"
                                styles={{
                                    control: {
                                        height: "2.5rem",
                                        backgroundColor: '#C8E0E9',
                                        borderRadius: "0.2rem",

                                        '&[data-active]': {
                                            backgroundColor: '#9bafb6'
                                        },
                                    },

                                    item: {
                                        borderRadius: "0.25rem",
                                        backgroundColor: '#C8E0E9',

                                        '&[data-active]': {
                                            backgroundColor: '#939393',
                                        },

                                    },
                                    content: {
                                        backgroundColor: '#ffffff',
                                    }
                                }}
                                chevronPosition="right"
                                variant={"separated"}
                                onChange={setValue}
                                defaultValue={["customizations1"]}
                                classNames={classes}
                                className={classes.root}>

                                <Accordion.Item value="customizations1">
                                    <Accordion.Control>Ticket Information</Accordion.Control>
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
