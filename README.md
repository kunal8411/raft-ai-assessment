This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Getting Started



First, run the development server:



```bash
1. git clone
2. npm install
3. npm run dev / yarn dev / npm dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Schema



```bash

- GET API(/api/items) : To get all the items from the database

```



## API

```bash

- GET API(/api/items) : To get all the items from the database

- POST API(/api/items) : To store any new Item in the database

- PUT API(/api/items) : To change the sequence of the items in the database

```

## Features



- Feature 1 : Drag and drop



```bash



1. Using the GET api call get all the items from the databse and store them in the UI in the grid structure,
   3 items on the first row and 2 items on the second

2. Using "react-sortable-hoc" library added the Drag and Drop feature.



3. In the UI I am calling API call after every 5 seconds and get data fron the database,
   and check on the UI if the sequence of items are matching with the database items, if sequence does not match then 
   update the sequence in the database using PUT API(/api/items) call .



4. Data will not update on each time user drag and drop, I have added the counter to validate the sequrnce after evry 5 seconds.



```



- Feature 2 :On click of card, display image and title in the middle of the screen, also on click of escape button, close the modal



```bash

1. To add the feature of showing the modal in the middle of the screen once click on the card, 
   added on click event on the card, once onClick event triggers then added the card data in one 
   of the state variable(selectedItem)

2. To show the modal, I am checking the condition if selectedItem have data then show the modal
   in the middle of the screen with card title and card image.

3. Also I have one useEffect hook which will check the keypress event, if the keypress event with keyCode 
   equald 27 then set the selectedItem to null. 
 


```
