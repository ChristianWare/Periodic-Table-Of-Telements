# Telements

## Demo Link:

[telements.co](telements.co)

---

## Description:

The Periodic Table of Telements (televion + elements = "tele"ments) is a reference chart showing the most up to date movie data from each major streaming platform. It is organized so that you can quickly get information on individual telements such as their title, a breif overview, the movie runtime, its' release date, and the average viewer rating. The fist table on the page represents some of the most popular movies from Amazon Prime, Hulu, Netflix, and HBO max. All of the data is be pulled form th TMDB API. Originally I wanted to use the "streaming options" API from RapidAPI, but I decided not to, since they limited the number of API calls you can make on a monthly basis, without having to pay a premium. There is a Home page with a header and footer, an About Page describing what the site is, and a move details page for each individual movie telement.

---

## Screen Shots:

Here are a few images from Telements:

![Home Page](https://telements.co/images/img1.png)
![Movie Details Page](https://telements.co/images/img4.png)
![404 Page](https://telements.co/images/404.png)

---

## Technologies:

This project was built with Next JS and React. The Data is being pulled from the TMDB API on the server with the "getServerSideProps" function in NextJs. It is styled using CSS Modules. The only dependecy used was react-icons.

---

## How to Install :

First, download or clone the repository. Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Credits:

Christian Ware
