# JC Golend

## Setup

1. Navigate to root folder yarn
2. Run yarn run server
3. Open another terminal and navigate to root folder, then run yarn run dev
4. For production build run yarn run prod:compressed
5. For tests open another terminal navigate to root folder, then run yarn run test

## Assumptions and key points

- This project was meant to show case my use of webpack, folder structure, responsive design, as well as bundle and image optimizations
- I did not use redux because I felt it was over kill for the scale of this app
- I did not want to go overboard with the responsive design so stuck to a few break points
- I adapted the design as I saw fit for various screen sizes, but definitely needs more fine tuning and web designers input.
- I used cloudinary to try provided optimized images, but I need to play around with the settings for various screen sizes, so for now I just set some basics.
- I focused on optimization for the most part with route based bundle splitting, optimized bundles, using low quality image placeholders for all images except the logo, and loading the fonts asynchronously.
