import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
       <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><b>F</b><small>D.</small> </a>
          <div className="itemContainer">
           <PersonIcon className="icon"/>
           <span >+90 535 4554</span>
          </div>
          <div className="itemContainer">
          <MailOutlineIcon className="icon"/> 
           <span>ipek@fd.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
       </div>
      
    </div>
  )
}
