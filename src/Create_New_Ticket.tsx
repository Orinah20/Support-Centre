import Header from "./Header";
import {RichTextEditor} from '@mantine/rte';
import {Group, Select, Text, useMantineTheme} from '@mantine/core';
import {Dropzone, IMAGE_MIME_TYPE} from "@mantine/dropzone";
import {IconPhoto, IconUpload, IconX} from "@tabler/icons";
import {useState} from "react";

const initialValue =
    '<p>Write your descriptions here</p>';

function CreateNew() {

    const [value, onChange] = useState(initialValue);


    const theme = useMantineTheme();

    return (
        <div className={"create_tickets"}>
            <Header />
            <div className={"createNew-content"}>
                <div>
                    <div>Create New Ticket</div>
                    <div className={"line"}/>
                    <div>Breadcrumbs</div>
                </div>
                <div className={"createNew-main_content"}>
                    <div className={"createNew-left_content"}>
                        <div className={"createNew-dropdown"}>
                            <div className={"createNew-dropdown_left"}>
                                <Select
                                    styles={{
                                        item: {
                                            overflowX: "hidden",
                                        }
                                    }}
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

                        <div>
                            <RichTextEditor
                                styles={{
                                    root: {
                                        height: "100%"
                                    }
                                }}
                                value={value}
                                onChange={onChange}/>
                        </div>


                        <Dropzone
                            onDrop={(files) => console.log('accepted files', files)}
                            onReject={(files) => console.log('rejected files', files)}
                            maxSize={3 * 1024 ** 2}
                            accept={IMAGE_MIME_TYPE}
                        >
                            <Group position="center" spacing="xl" style={{minHeight: 220, pointerEvents: 'none'}}>
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

                    <div className={"createNew-right_content"}>
                        Knowledge Base
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNew
