
function personalInfo(){
    return(
        <div>
            <div className={"profile-page_right"}>
                <div className={"profile-outlet_header"}>Personal Information</div>
                <div className={"line"}/>
                <div className={"upper-profile_outlet"}>
                    <div className={"profile-container_left"}>
                        <div>
                            <div className={"profile-text_label"}>First Name</div>
                            <div className={"profile-text_view"}>Busta</div>
                        </div>

                        <div>
                            <div className={"profile-text_label"}>Email Address</div>
                            <div className={"profile-text_view"}>bustamabena@gmail.com</div>
                        </div>

                        <div>
                            <div className={"profile-text_label"}>Gender</div>
                            <div className={"profile-text_view"}>Male</div>
                        </div>
                    </div>

                    <div className={"profile-container_right"}>
                        <div>
                            <div className={"profile-text_label"}>Last Name</div>
                            <div className={"profile-text_view"}>Busta</div>
                        </div>

                        <div>
                            <div className={"profile-text_label"}>Phone Number</div>
                            <div className={"profile-text_view"}>+254712345678</div>
                        </div>

                    </div>


                </div>
                <div className={"line"}/>
                <div className={"lower-profile_outlet"}>
                    <div className={"profile-container_left"}>
                        <div>
                            <div className={"profile-text_label"}>First Name</div>
                            <div className={"profile-text_view"}>Busta</div>
                        </div>
                    </div>

                    <div className={"profile-container_right"}>
                        <div>
                            <div className={"profile-text_label"}>Last Name</div>
                            <div className={"profile-text_view"}>Busta</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default personalInfo()