# JC Golend

# NOTES

## Setup

1. Navigate to root folder yarn
2. Run yarn run server
3. Open another terminal and navigate to root folder, then run yarn run dev
4. For production build run yarn run prod:compressed
5. For tests open another terminal navigate to root folder, then run yarn run test

## Assumptions and key points

- Tests using react-testing-library, I started but then I saw I was moving too slow because I am more familiar with enzyme as you can see from this repo of another project I did https://gitlab.com/jan.basson/clearpoint-assessment
- I did not use redux because I felt it was over kill for the scale of this app, but if you want me to hook it up to redux please let me know. Also you can see from the project at this link https://gitlab.com/jan.basson/clearpoint-assessment that I know how to use redux.
- I did not want to go overboard with the responsive design so stuck to a few break points
- I adapted the design as I saw fit for various screen sizes, but definitely needs more fine tuning and web designers input.
- The build stole a lot of time as I don't do webpack often and had to work through things.
- I used cloudinary to try provided optimized images, but I need to play around with the settings for various screen sizes, so for now I just set some basics.
