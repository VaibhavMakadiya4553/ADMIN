import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { MyContext } from '../../App';
import UserAvatarImgComponet from '../userAvatarImg';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpennotificationsDrop, setisOpennotificationDrop] = React.useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationsDrop);

    // const [isLogin, setIsLogin] = React.useState(false);

    const Context = useContext(MyContext)


    const handleopenMyAccDrop = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
      setAnchorEl(null);
    };

    const handleOpenotificationsDrop=()=>{
        setisOpennotificationDrop(true)
    }

    const handleClosenotificationsDrop=()=>{
        setisOpennotificationDrop(false)
    }

    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wraooer */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} alt="" />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>


                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className="rounded-circle mr-3" style={{marginRight:10}} onClick={()=>Context.setIsToggleSideber(!Context.isToggleSideber)}>
                            {
                                Context.isToggleSideber===false ? <MdMenuOpen/> :
                                <MdOutlineMenu/>
                            }

                            </Button>
                            <SearchBox/>
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3 " onClick={()=>Context.setThemeMode(!Context.themeMode)} style={{marginRight:10}}>
                                <MdOutlineLightMode/>
                            </Button>

                            <Button className="rounded-circle"style={{marginRight:10}}><IoCartOutline/></Button>
                            <Button className="rounded-circle"style={{marginRight:10}}><MdOutlineMailOutline/></Button>
                            
                            <div className='dropdownWrapper position-relative'>
                                <Button className="rounded-circle mr-4"
                                    onClick={handleOpenotificationsDrop}><FaRegBell/></Button>

                            <Menu
                                anchorEl={isOpennotificationsDrop}
                                className='notifications dropdown_list'
                                id="notifications"
                                open={openNotifications}
                                onClose={handleClosenotificationsDrop}
                                onClick={handleClosenotificationsDrop}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className='head pl-3 pd-2'>
                                    <h4>Orders (12) </h4>
                                </div>

                                <Divider className="mb-1" />

                                <div className='scroll'>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <div className='d-flex '>
                                            <div>
                                               <UserAvatarImgComponet img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'} alt=''/> 
                                            </div>

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> 
                                                         added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                    <p className='text-sky mb-2'>few seconds ago</p>
                                                </h4>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <div className='d-flex '>
                                            <div>
                                                    <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt=''/>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> 
                                                         added to his favorite list
                                                        <b>  Leather belt steve madden</b>
                                                    </span>
                                                    <p className='text-sky mb-2'>few seconds ago</p>
                                                </h4>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <div className='d-flex '>
                                            <div>
                                                    <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt=''/>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> 
                                                         added to his favorite list
                                                        <b>  Leather belt steve madden</b>
                                                    </span>
                                                    <p className='text-sky mb-2'>few seconds ago</p>
                                                </h4>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <div className='d-flex '>
                                            <div>
                                                    <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt=''/>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> 
                                                         added to his favorite list
                                                        <b>  Leather belt steve madden</b>
                                                    </span>
                                                    <p className='text-sky mb-2'>few seconds ago</p>
                                                </h4>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <div className='d-flex '>
                                            <div>
                                                    <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt=''/>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> 
                                                         added to his favorite list
                                                        <b>  Leather belt steve madden</b>
                                                    </span>
                                                    <p className='text-sky mb-2'>few seconds ago</p>
                                                </h4>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <div className='d-flex '>
                                            <div>
                                                    <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt=''/>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Mahmudul</b> 
                                                         added to his favorite list
                                                        <b>  Leather belt steve madden</b>
                                                    </span>
                                                    <p className='text-sky mb-2'>few seconds ago</p>
                                                </h4>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>        

                                <div className='pl-3 pr-3 w-100 pt-2 pb-01'>
                                 <Button className='btn-blue w-100'>View all notifications</Button>
                                </div>

                             </Menu>
                            </div>

                            {
                                Context.isLogin!==true ? 
                                <Link to={'/login'}><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link>
                                    :
                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center "
                                 onClick={handleopenMyAccDrop}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt=""/>
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>Vaibhav Makadiya</h4>
                                        <p className="mb-0">@vaibhav4553</p>
                                    </div>

                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <IoShieldHalfSharp />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                            }
                            

                            
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;