import sky_header from "./svg/Header/sky_header.svg";
import {Menu, Avatar} from '@mantine/core';
import {IconUser, IconLogout} from '@tabler/icons';
import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/")
    }

    const profile =() => {
        navigate("/profile/personal_info")
    }

    return (
        <div>
            <div className={"header"}>
                <img className={"header_logo"} alt={""} src={sky_header}/>
                <div className={"header_information"}>
                    <div>Busta</div>
                    <div className={"avatar "}>
                        <Menu width={250} position="bottom-end" offset={-5}>
                            <Menu.Target>
                                <Avatar
                                    radius="xl"
                                    styles={{
                                        placeholder: {
                                            backgroundColor: 'inherit',
                                        },
                                        placeholderIcon: {
                                            color: 'white'
                                        }

                                    }}/>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Label>Application</Menu.Label>
                                <Menu.Item icon={<IconUser size={20}/>} onClick={profile}>Profile</Menu.Item>
                                <Menu.Divider/>
                                <Menu.Item color="red" icon={<IconLogout size={20}/>} onClick={logout}>Log
                                    Out</Menu.Item>
                            </Menu.Dropdown>

                        </Menu>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Header
