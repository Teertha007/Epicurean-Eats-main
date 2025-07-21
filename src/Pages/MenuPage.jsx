import React from 'react';
import dessertBg from '../../public/assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../public/assets/menu/pizza-bg.jpg'
import saladBg from '../../public/assets/menu/salad-bg.jpg'
import soupBg from '../../public/assets/menu/soup-bg.jpg'
import { Helmet } from 'react-helmet';
import Cover from '../Components/Cover';
import menuBg from '../../public/assets/menu/banner3.jpg'
import SectionTitle from '../Components/SectionTitle';
import MenuAny from '../Components/MenuAny';
import UseMenu from '../Hooks/UseMenu';

const MenuPage = () => {

    let [menu] = UseMenu()

    let dessert = menu.filter(item => item.category == 'dessert')
    let pizza = menu.filter(item => item.category == 'pizza')
    let salad = menu.filter(item => item.category == 'salad')
    let soup = menu.filter(item => item.category == 'soup')
    let offered = menu.filter(item => item.category == 'offered')


    return (
        <div>
            <Helmet>
                <title>Menu | Epicurean Eats</title>
            </Helmet>
            <Cover img={menuBg} title={'Our Menu'} subTitle={'would you like to try a dish?'}></Cover>
            <SectionTitle title={'Todays Offer'} subTitle={"Don't Miss"}></SectionTitle>
            <MenuAny title={'Offer'} item={offered}></MenuAny>
            <Cover img={dessertBg} title={'desserts'} subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex alias cupiditate distinctio pariatur itaque inventore aperiam, assumenda reiciendis molestiae?'}></Cover>
            <MenuAny title={'Desserts'} item={dessert}></MenuAny>
            <Cover img={pizzaBg} title={'Pizza'} subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex alias cupiditate distinctio pariatur itaque inventore aperiam, assumenda reiciendis molestiae?'}></Cover>
            <MenuAny title={'Pizza'} item={pizza}></MenuAny>
            <Cover img={saladBg} title={'salad'} subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex alias cupiditate distinctio pariatur itaque inventore aperiam, assumenda reiciendis molestiae?'}></Cover>
            <MenuAny  title={'Salad'} item={salad}></MenuAny>
            <Cover img={soupBg} title={'soup'} subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex alias cupiditate distinctio pariatur itaque inventore aperiam, assumenda reiciendis molestiae?'}></Cover>
            <MenuAny title={'Soup'} item={soup}></MenuAny>

        </div>
    );
};

export default MenuPage;



