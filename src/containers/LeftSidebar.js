import routes from '../routes/sidebar'
import { NavLink,  Routes, Link , useLocation} from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu';
import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon'
import { useDispatch } from 'react-redux';

function LeftSidebar(){
    const location = useLocation();

    const dispatch = useDispatch()


    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return(
        <div className="drawer-side ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label> 
            <ul className="menu  pt-2 w-80 bg-[#4285F4] text-white ">
            <button className="btn btn-ghost bg-[#4285F4]  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
            <XMarkIcon className="h-5 inline-block w-5"/>
            </button>

                <li className="mb-2 font-semibold text-xl">
                    
                <Link to={'/app/welcome'} className="font-bold text-xl">Board.</Link> </li>
                {
                    routes.map((route, k) => {
                        return(
                            <li className="" key={k}>
                                {
                                    route.submenu ? 
                                        <SidebarSubmenu {...route}/> : 
                                    (<NavLink
                                        end
                                        to={route.path}
                                        className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`} >
                                           {route.icon} {route.name}
                                            {
                                                location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                aria-hidden="true"></span>) : null
                                            }
                                     </NavLink>
                )}
              </li>
            );
          })
        }
        {/* Help */}
        <li>
          <NavLink to="/help" className="font-normal pt-20 w-80">
            Help
          </NavLink>
        </li>
        {/* Contact Us */}
        <li>
          <NavLink to="/contact" className="font-normal  pt-50 w-80 ">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
