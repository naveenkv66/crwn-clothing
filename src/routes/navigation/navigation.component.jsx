
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () =>
{
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                    <CrownLogo />
                </Link>
                <div className="nav-links-container">
                    <div className="nav-link">
                        <Link to='/shop'>SHOP</Link>
                    </div>
                    <div className="nav-link">
                        <Link to='/sign-in'>SIGN IN</Link>
                    </div>

                </div>
            </div>

            <div><Outlet></Outlet></div>
        </Fragment>)
}
export default Navigation;