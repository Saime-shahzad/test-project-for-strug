import React, { useEffect, useState } from 'react'
// import AppRoutes from '../routes'
import TabsComp from '../../components/tabsComp/TabsComp'
import { useDispatch, useSelector } from 'react-redux'
import { getMeals } from '../../redux-store/boards/mealSlice'
import pizzaImage from "../../assets/images/pizzaImage.webp"
import  "./Dashboard.css"

export const Dashboard = () => {
    const [isMealData, setIsMealData]=useState([])
    const dispatch=useDispatch()
const getAllMealsData = useSelector(
    (state) => state.meals?.meals
  );
  console.log("isMealData>>>", isMealData);
  
  useEffect(() => {
    // Dispatch the action to fetch meals only once on component mount
    dispatch(getMeals());
  }, [dispatch]);

  useEffect(() => {
    // Update local state only when `getAllMealsData` changes and is valid
    if (getAllMealsData) {
      setIsMealData(getAllMealsData);
    }
  }, [getAllMealsData]);

  return (
    <div className='dashboard-parent '>
       <div class="banner child-1">
  <div class="banner-content">
    <h1>Optimized Your Meal</h1>
    <p>Select Meal to Add in Week. You will be able to edit, modify and change the Meal Weeks.</p>
  </div>
</div>

        <div className=' chaild-2 '>
        <div className='sub-Header'>
            <div className='container'>

            <h3 className='p-3 fw-bolder'>


Week Orders
            </h3>
            </div>
</div>
    {isMealData?.length && 
        <TabsComp mealsData={isMealData} />
    
    }
        </div>
{/* <AppRoutes /> */}

    </div>
  )
}
