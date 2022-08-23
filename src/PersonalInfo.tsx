import {TextInput} from "@mantine/core";

function PersonalInfo() {

    return (
        <div>
            <div className={"profile-outlet_header"}>Personal Information</div>
            <div className={"line"}/>
            <div className={"upper-profile_outlet"}>
                <div className={"profile-container_left"}>
                    <div>
                        <TextInput
                            mt="xs"
                            disabled
                            label="First Name"
                            placeholder="Busta"
                        />

                        <TextInput
                            mt="xs"
                            disabled
                            label="Email Address"
                            placeholder="bustamabena@gmail.com"
                        />

                        <TextInput
                            mt="xs"
                            disabled
                            label="Gender"
                            placeholder="Male"
                        />

                    </div>

                </div>

                <div className={"profile-container_right"}>
                    <div>
                        <TextInput
                            disabled
                            mt="xs"
                            label="Last Name"
                            placeholder="Mabena"
                        ></TextInput>

                        <TextInput
                            disabled
                            mt="xs"
                            label="Phone Number"
                            placeholder="+254712345678"
                        />
                    </div>
                </div>


            </div>
            <div className={"line"}/>
            <div className={"lower-profile_outlet"}>
                <div className={"profile-container_left"}>
                    <div>
                        <TextInput
                            disabled
                            mt="md"
                            label="Organisation"
                            placeholder="M-Cell Group"
                        />

                    </div>
                </div>

                <div className={"profile-container_right"}>
                    <div>
                        <TextInput
                            disabled
                            mt="md"
                            label="Organisation Email Address"
                            placeholder="mcellgroup@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
