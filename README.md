# COMP2004 - Project-1

## Groceries App V1

This project involves building a simple yet functional grocery shopping app that utilizes most of the core programming concepts covered. As part of the task, students will create an interactive app that allows users to select grocery items from an inventory, view their cart contents, and check out.

Due Oct. 17th, 2025 @ 11:59 p.m.

# Grocery Shopping App 
COMP2013 – Project 1

---
****Shubh Prajapati**  
Student ID: 4405778  

### Project Overview
This project about building a small grocery  web application  using **React**.  
The app allows users to find and search grocery items, add them to a shopping cart, and manage the cart contents.

This react  app includes the upcoming main parts:
- **NavBar** – shows my name(user's name), the title of the app, and a small cart icon with a red dot when items exist in the cart.
- **ProductsContainer** – will load and display all grocery items from file "products.js".
- **ProductCard** – each products showing image, name, price, description, quantity selector.
- **CartContainer** – shows cart list with all added items, total price, and buttons to clear cart or buy.
- **CartCard** – all individual cart itmes as above but with remove button and quantity selector.
- **QuantityCounter** – i tried different way,reusable component for selecting quantity of items.

As per fork git project,all styling is done in the "App.css" file i did not change anything however i added some custom styles as per project need in to specific funtions.

---

### Key Features Implemented
- **Dynamic Product Listing**: product will load from "products.js" and display dynamically.
- **Interactive Cart**: user can add,remove,edit quantity of items in the cart,which help more to merchants to sells products and help customer to select required quantity.
- **Responsive Design**: My app is Reponsive Desing,means it work on every device like mobile,tablet,desktop without glitches or error(i tested in my phone personally).
- **Reusable Components**: Components like "ProductCard" and "CartCard" are reusable and maintainable,so if i need to change something in the future, i can do it easily without affecting other parts of the app,also if other developers want to use them in their projects, they can use it.

---

### My Logic (in my own words)
I first created one main component(heart of project) called **GroceriesAppContainer**.This is where I made all the states and event functions.  
Inside it, I added data from "products.js" to "ProductsContainer".  
Every time the user clicks “Add to Cart,” the function updates the cart state.  
If the product already exists, its quantity increases.  
If not, it gets added as a new item.(one of the challenging part for me,however crucial for project logic). 

The cart section logic is straightforward.  
The user can remove a product, change the quantity, or clear the entire cart.  
The Buy button just shows the total price but does not do any real checkout since it was not required.

I mostly used the **onClick** function everywhere instead of any advanced hooks.  
This keeps it very simple.  
---

### 🧠 Extra Approaches I Tried 
Even though not all were required, I explored and tested a few different ways:
1. **LocalStorage Saving (not included in final)**  
   I first tried saving and loading the cart using localStorage, it worked but not perfectly.  
   Sometimes the data didn’t load correctly. 
2. **useEffect Hook (tested but not used)**  
   I also experimented with useEffect to load data automatically when the app opens.  
   It worked fine, but I found it a bit complex for this simple app. 

3. I also tried using a simple try and catch block while testing how to handle possible errors in the code.
It helped me understand how JavaScript deals with problems that can happen while running,
like when something doesn’t work as expected or a value is missing.
Even though it’s not deeply covered in our course yet,
using try and catch gave me an idea of how programmers prevent the app from breaking and show clear messages instead.

Those things helped me understand how state saving could work in real projects,  
even though it threw some errors at times.
---

---

### 🧾 Conclusion
This project was a great learning experience for me. It helped me understand how React works in real examples.

Here are some key takeaways from this project:
- JSX Props and Imported Data From Props: I learned how to pass data and functions between components using props,specifically in navbar and product card.
- Hooks and State Management: i found useState hook very useful for managing  data like cart contents. 
- Compound State management: I learned how to handle complex state updates, like adding items to the cart and updating quantities.


It was a good practice to think like a programmer and not just write code.

---

**Author:** Shubh Prajapati  
**Course:** Computer Programming – COMP2013  
**College:** St. Lawrence College, Kingston  




