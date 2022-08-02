import sky_header from "./svg/sky_header.svg";
import tabler_user_circle from "./svg/tabler_user-circle.svg";


function Header() {
    return (
        <div>
           <span className={"header"}>
               <img className={"header_logo"} alt={""} src={sky_header}/>
               <div className={"header_information"}>
                   <div>Busta</div>
                   <img className={"header_avatar"} alt={""} src={tabler_user_circle}/>
               </div>
               <div></div>
           </span>
        </div>
)
}

export default Header