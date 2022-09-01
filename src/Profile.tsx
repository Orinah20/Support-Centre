import Header from "./Header";
import {Breadcrumbs, Anchor} from '@mantine/core';
import avatar from "./svg/Profile/tabler_user-circle.svg"
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import back from "./svg/Profile/eva_arrow-back-fill.svg"

function Profile() {

    let activeStyle = {
        backgroundColor: "#AFCAD6",
        textDecoration: "none",
        color: "black",
    };

    let inactive = {
        textDecoration: "none",
        color: "black",
    };

    const items = [
        {title: 'Home', href: '/landing'},
        {title: 'Profile', href: '/profile/personal-info'},
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const navigate = useNavigate();


    const handleBack = () =>{
        navigate(-1)
    }


    return (
        <div>
            <Header/>
            <div className={"profile_page-content"}>
                <div className={"profile_header-description"}>
                    <img alt="" className={"profile-back_arrow"} onClick={handleBack} src={back}></img>
                    <span>Profile Page</span>
                </div>
                <div className={"line"}></div>
                <div className={"profile_page-breadcrumbs"}>
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
                <div className={"profile_page-containers"}>
                    <div className={"profile-page_left"}>
                        <img className={"profile-avatar"} alt={""} src={avatar}/>
                        <div>Busta Mabena</div>
                        <div>+254712345678</div>
                        <div>bustamabena@gmail.com</div>
                        <br/>
                        <div className={"line"}/>
                        <div className={"profile-buttons"}>
                            <NavLink
                                to={"personal_info"}
                                className={"profile-personal_information--link"}
                                style={({isActive}) =>
                                    isActive ? activeStyle : inactive
                                }
                            >
                                <div className={"profile-personal_information"}>Personal Information</div>
                            </NavLink>

                            <NavLink
                                to={"change_password"}
                                className={"profile-change_password--link"}
                                style={({isActive}) =>
                                    isActive ? activeStyle : inactive
                                }
                            >
                                <div className={"profile-change_password"}>Change Password</div>
                            </NavLink>

                        </div>

                    </div>
                    <div className={"profile-page_right"}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
