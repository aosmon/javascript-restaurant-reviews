Restaurant Reviews App
===============================

## Project Overview: Stage 1

**Restaurant Reviews** project is a part of the Udacity Front-End Web Developer nanodegree program. 
Goal of the project was to incrementally convert a static webpage to a mobile-ready web application. In stage one, a static design page was provided that lacked accessibility and required its design to be responsive on different sized displays and accessible for screen reader use. It alse lacked a service worker to begin the process of creating a seamless offline experience for users. The goal was to update the code to resolve these issues while still maintaining the included functionality.
Starter code and files can be cloned or downloaded from this repository https://github.com/udacity/mws-restaurant-stage-1.

## Project Requirements

**Make the provided site fully responsive.** All of the page elements should be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when the viewport is too small to display them side by side.

**Make the site accessible.** Using what you've learned about web accessibility, ensure that alt attributes are present and descriptive for images. Add screen-reader-only attributes when appropriate to add useful supplementary text. Use semantic markup where possible, and aria attributes when semantic markup is not feasible.

**Cache the static site for offline use.** Using Cache API and a ServiceWorker, cache the data for the website so that any page (including images) that has been visited is accessible offline.

## How to run

1. Fork and clone this repository

2. Navigate to the downloaded directory, launch a local client server using Python from your terminal:

- Check the version of Python you have: `python -V`.  
- For Python 2.x: `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.)  
- For Python 3.x: `python3 -m http.server 8000`.  
- If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With python server running, open any browser and visit the site: `http://localhost:8000`.

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. 



