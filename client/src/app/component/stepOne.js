import React, { useState, useEffect } from "react";
import styles from "../../app/style/stepOne.module.css";
import HttpService from "../utils/httpServices";
import axios from "axios"; 
import {  useDispatch, useSelector } from 'react-redux';
import { stepFormFail, stepFormRequest, stepFormSuccess } from "../redux/Slice/stepformSlice";

const StepOne = ({ formData, setFormData, nextStep, restaurantData }) => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const [initialFormData, setInitialFormData] = useState({}); 

  useEffect(() => {
    if (restaurantData?.data?.dishes) {
      const allMeals = restaurantData?.data?.dishes.flatMap(dish => dish.availableMeals);
      const uniqueMeals = Array.from(new Set(allMeals));
      setAvailableMeals(uniqueMeals);
    }
  }, [restaurantData]);

  useEffect(() => {
    setInitialFormData({
      mealCategory: formData.mealCategory,
      numberOfPeople:formData.numberOfPeople
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newError = {};

    if (!formData.mealCategory) newError.mealCategory = 'meal category is required';
    if (!formData.numberOfPeople || formData.numberOfPeople < 1 || formData.numberOfPeople > 10) {
      newError.numberOfPeople = 'enter a number of people between 1 to 10';
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    if (
      formData.mealCategory === initialFormData.mealCategory &&
      formData.numberOfPeople === initialFormData.numberOfPeople
    ) {
      nextStep(); 
      return;
    }

    const payload = {
      meal_category: formData.mealCategory,
      no_of_people: Number(formData.numberOfPeople),
      step: 1,
    };

    try {
      dispatch(stepFormRequest());
      const response = await axios.post(HttpService.StepFormData, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response?.status === 200) {
        dispatch(stepFormSuccess(response));
        nextStep();
      } else {
        console.error("API error:", response.data);
        dispatch(stepFormFail(response.data.errMsg));
      }
    } catch (err) {
      console.error("Request failed:", err); 
      dispatch(stepFormFail(err?.response?.data?.errMsg));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className="ui form">
          <label htmlFor="mealCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select a category
          </label>
          <select
            id="mealCategory"
            name="mealCategory"  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.mealCategory}
            onChange={handleChange} 
          >
            <option value="" disabled>
              Select a Meal
            </option>
            {availableMeals.map((meal, index) => (
              <option key={index} value={meal}>
                {meal}
              </option>
            ))}
          </select>
          {error.mealCategory && <p className="text-sm text-red-600">{error.mealCategory}</p>}

          <div>
            <label htmlFor="numberOfPeople" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-8">
              Enter number of people
            </label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              className="bg-gray-30 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
              value={formData.numberOfPeople}
              onChange={handleChange} 
            />
            {error.numberOfPeople && <p className="text-sm text-red-600">{error.numberOfPeople}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-lightgrey-700 text-white font-bold py-2 px-4 rounded mt-10"
          >
            Next
          </button>
        </div>

  
      </form>
    </div>
  );
};

export default StepOne;
