import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../Hooks/UseMenu';
import SingleCard from './SingleCard';
import { useParams } from 'react-router-dom';

const MenuCard = () => {    
    let category= useParams();
    let title=  category.category;

    let arr = ['Salad', 'Pizza', 'Soup', 'Dessert']
    let initialIndex = arr.indexOf(title);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    let [menu] = UseMenu()

    let dessert = menu.filter(item => item.category == 'dessert')
    let pizza = menu.filter(item => item.category == 'pizza')
    let salad = menu.filter(item => item.category == 'salad')
    let soup = menu.filter(item => item.category == 'soup')
    let drinks = menu.filter(item => item.category == 'drinks')


    return (
        <div className='container mx-auto'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            salad.map(item=> <SingleCard title={'Salad'} food={item}></SingleCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            pizza.map(item=> <SingleCard food={item}></SingleCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            soup.map(item=> <SingleCard food={item}></SingleCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            dessert.map(item=> <SingleCard food={item}></SingleCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            drinks.map(item=> <SingleCard food={item}></SingleCard>)
                        }
                    </div>
                </TabPanel>
               
            </Tabs>

        </div>
    );
};

export default MenuCard;