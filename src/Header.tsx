import sky_header from "./svg/Header/sky_header.svg";
import tabler_user_circle from "./svg/Header/tabler_user-circle.svg";


function Header() {
    return (
        <div>
           <div className={"header"}>
               <img className={"header_logo"} alt={""} src={sky_header}/>
               <div className={"header_information"}>
                   <div>Busta</div>
                   <img className={"header_avatar"} alt={""} src={tabler_user_circle}/>
               </div>
               <div></div>
           </div>
        </div>
)
}

export default Header