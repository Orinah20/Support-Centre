import {Button, Group, PasswordInput, ScrollArea} from "@mantine/core";

function changePassword() {
    return (
        <div>
            <div className={"profile-outlet_header"}>Change Password</div>
            <div className={"line"}/>
            <div className={"upper-profile_outlet"}>
                <div className={"password-profile"}>
                    <PasswordInput
                        required
                        mt="md"
                        label="Old Password"
                        placeholder="Old Password"/>


                    <PasswordInput
                        required
                        mt="md"
                        label="New Password"
                        placeholder="New Password"
                    />

                    <PasswordInput
                        required
                        mt="md"
                        label="Confirm New Password"
                        placeholder="Confirm New Password"
                    />

                    <Group
                        position="right"
                        mt="xl"
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

                <div className={"password-change_guidelines"}>
                    <div className={"guideline-header"}> New Password Requirements</div>
                    <div className={"line-dark"}/>
                    <div className={"guidelines-list"}>
                        <ScrollArea style={{height: "inherit", width: "inherit"}}>
                            <ul>
                                <li>Must contain at least 8 characters</li>
                                <li>Must contain at least 1 lower case letter (a-z)</li>
                                <li>Must contain at least 1 upper case letter (A-Z)</li>
                                <li>Must contain at least 1 number (0-9)</li>
                                <li>Must contain at least 1 special character (!,@,# ...)</li>
                            </ul>
                        </ScrollArea>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default changePassword
