# FitApp
## Demo
<p align="center"> 
<img src="https://github.com/gabrielrangel95/FitApp/blob/master/src/assets/gif/FitAppEdited.gif" height="500" />
</p>

## About
This is a project using React Native and Expo, inspired on 8fit App.
<br/>
The user will see a Landing Screen, where he can choose which is his goal: 'Lose weight', 'Get fitter' or 'Gain muscle'.
Then, he will input his age and height (Feet an Inches or Centimetres).
In the final, he will see all the information he had input.

## Instructions for run the app:
On terminal, run 
```
git clone https://github.com/gabrielrangel95/FitApp.git
cd FitApp
yarn install
yarn start
```
Then, for run on IOS:
```
i
```
For run on Android, start your simulator and:
```
a
```

## Packages Used:
* Expo
* Eslint
* Prop-Types
* React Navigation
* Reactotron
* Redux
* Redux Saga
* Styled Components

## Specs:
* :alarm_clock: Time for do it: Arround 2 days and a half
* :computer: How hard was it ? The hardest was do one screen for the steps, instead of creating multiple screens, for each one of the steps. This is better for the app, that won't need to render many times different screens. For control better the state, I used Redux, saving which was the current step, and using actions to control it. Also, the animations took a little bit of time.
