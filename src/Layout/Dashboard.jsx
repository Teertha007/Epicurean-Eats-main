import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaCommentAlt, FaCalendar, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    let checkLevel = useAdmin();
    
    
    let level = checkLevel?.isAdmin?.admin
    let isAdmin = level
    
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                     
                       {isAdmin == true ? <>
                        <div className='flex items-center gap-3'><FaHome></FaHome>Admin Home</div>
                        <NavLink to={'addItem'}><div className='flex items-center gap-3'><FaUtensils></FaUtensils> Add Item</div></NavLink>
                        <div className='flex items-center gap-3'><FaWallet></FaWallet>Manage Item</div>
                        <NavLink to={'myCart'}><div className='flex items-center gap-3'><FaBook></FaBook> Manage Book</div></NavLink>

                        <NavLink to={'users'}><div className='flex items-center gap-3'><FaUsers></FaUsers> Manage User</div></NavLink>
                       </>: <>
                       <div className='flex items-center gap-3'><FaHome></FaHome>User Home</div>
                        <div className='flex items-center gap-3'><FaCalendar></FaCalendar>Reservation</div>
                        <div className='flex items-center gap-3'><FaWallet></FaWallet>Payment History</div>
                        <NavLink to={'myCart'}><div className='flex items-center gap-3'><FaShoppingCart></FaShoppingCart>My Cart</div></NavLink>
                        <div className='flex items-center gap-3'><FaCommentAlt></FaCommentAlt>Add Review</div>
                        <div className='flex items-center gap-3'><FaCalendarAlt></FaCalendarAlt>My Booking</div>
                       </>}

                        <div className="divider"></div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;