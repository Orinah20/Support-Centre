import Header from "./Header";
import {RichTextEditor} from '@mantine/rte';
import {Accordion, Anchor, Breadcrumbs, Button, Group, Select, Text, ScrollArea, useMantineTheme} from '@mantine/core';
import {Dropzone, IMAGE_MIME_TYPE} from "@mantine/dropzone";
import {IconPhoto, IconUpload, IconX} from "@tabler/icons";
import {useState} from "react";
import close from "./svg/Create_New/bi_x.svg"
import {useNavigate} from "react-router-dom";

function CreateNew() {
    const items = [
        {title: 'Home', href: '/landing'},
        {title: 'Create New Ticket'},
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const initialValue = " ";

    const [value, onChange] = useState(initialValue);

    const theme = useMantineTheme();

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1)
    }

    return (
        <div>
            <Header/>
            <div>
                <div className={"createNew-header"}>
                    <div className={"createNew-header_title"}>
                        <span>Create New Ticket</span>
                        <img alt={""} className={"createNew-close"} src={close} onClick={handleClose}/>
                    </div>
                    <div className={"line"}/>
                </div>

                <div className={"create_tickets"}>
                    <div className={"createNew-breadcrumbs"}>
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
                        >{items}</Breadcrumbs>
                    </div>
                    <div className={"createNew-content"}>
                        <div className={"createNew-main_content"}>
                            <div className={"createNew-left_content"}>
                                <div className={"createNew-dropdown"}>
                                    <div className={"createNew-dropdown_left"}>
                                        <Select
                                            required
                                            label="Types"
                                            placeholder="Pick one"
                                            data={[
                                                {value: 'react', label: 'React'},
                                                {value: 'ng', label: 'Angular'},
                                                {value: 'svelte', label: 'Svelte'},
                                                {value: 'vue', label: 'Vue'},
                                            ]}
                                        />
                                        <Select
                                            required
                                            label="Subject"
                                            placeholder="Select One"
                                            data={[
                                                {value: 'react', label: 'React'},
                                                {value: 'ng', label: 'Angular'},
                                                {value: 'svelte', label: 'Svelte'},
                                                {value: 'vue', label: 'Vue'},
                                            ]}
                                        />

                                    </div>
                                    <div className={"createNew-dropdown_right"}>
                                        <Select
                                            required
                                            label="Subtype"
                                            placeholder="Select one"
                                            data={[
                                                {value: 'react', label: 'React'},
                                                {value: 'ng', label: 'Angular'},
                                                {value: 'svelte', label: 'Svelte'},
                                                {value: 'vue', label: 'Vue'},
                                            ]}
                                        />

                                    </div>
                                </div>

                                <div className={"textEditor"}>
                                    <span className={"textEditor-label"}>Message </span>
                                    <span style={{color: "#fa5252"}}>*</span>
                                    <RichTextEditor
                                        styles={{
                                            root: {
                                                height: "100%"
                                            }
                                        }}
                                        placeholder="Write your description here"
                                        value={value}
                                        onChange={onChange}/>
                                </div>

                                <div className={"dropzone"}>

                                    <Dropzone
                                        onDrop={(files) => console.log('accepted files', files)}
                                        onReject={(files) => console.log('rejected files', files)}
                                        maxSize={3 * 1024 ** 2}
                                        accept={IMAGE_MIME_TYPE}
                                    >
                                        <Group position="center" spacing="xl"
                                               style={{minHeight: 110, pointerEvents: 'none'}}>
                                            <Dropzone.Accept>
                                                <IconUpload
                                                    size={50}
                                                    stroke={1.5}
                                                    color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                                                />
                                            </Dropzone.Accept>

                                            <Dropzone.Reject>
                                                <IconX
                                                    size={50}
                                                    stroke={1.5}
                                                    color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                                                />
                                            </Dropzone.Reject>
                                            <Dropzone.Idle>
                                                <IconPhoto size={50} stroke={1.5}/>
                                            </Dropzone.Idle>

                                            <div>
                                                <Text size="xl" inline>
                                                    Drag images here or click to select files
                                                </Text>
                                                <Text size="sm" color="dimmed" inline mt={7}>
                                                    Attach as many files as you like, each file should not exceed 5mb
                                                </Text>
                                            </div>
                                        </Group>
                                    </Dropzone>

                                </div>

                                <div className={"createNew-submit"}>
                                    <Group
                                        position="right"
                                        pr="xl"
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

                            <div className={"createNew-right_content"}>
                                <div className={"createNew-knowledgeBase"}>
                                    <div className={"createNew-knowledgeBase_header"}>Knowledge Base</div>
                                    <div className={"line"}/>
                                    <ScrollArea
                                        style={
                                            {
                                                height: "72vh",
                                                width: "35vw"
                                            }}
                                        offsetScrollbars
                                        scrollbarSize={6}
                                    >
                                        <div className={"createNew-accordion"}>
                                            <Accordion
                                                chevronPosition="left"
                                                radius="xs"
                                                styles={{
                                                    label:{
                                                        fontSize: "0.9rem",
                                                    },

                                                    item: {
                                                        backgroundColor: '#C8E0E9',
                                                        borderRadius: "0.25rem",
                                                        fontSize: "0.875rem"
                                                    },
                                                    content: {
                                                        backgroundColor: '#ffffff',
                                                    }
                                                }}
                                                variant={"default"}>

                                                <Accordion.Item value="customizations1">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>

                                                <Accordion.Item value="customizations2">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>

                                                <Accordion.Item value="customizations3">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>


                                                <Accordion.Item value="customizations4">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>

                                                <Accordion.Item value="customizations10">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>


                                                <Accordion.Item value="customizations11">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>

                                                <Accordion.Item value="customizations12">
                                                    <Accordion.Control>Customization</Accordion.Control>
                                                    <Accordion.Panel>Colors, fonts, shadows and many other parts are
                                                        customizable to fit
                                                        your design needs. Colors, fonts, shadows and many other parts
                                                        are customizable
                                                        to fit your design needs</Accordion.Panel>
                                                </Accordion.Item>

                                            </Accordion>

                                        </div>
                                    </ScrollArea>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNew
