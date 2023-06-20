# What is this?

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with Typescript, Tailwind and ChartJS.

## Setup

- Install all dependencies: `npm install`

- Build the app: `npm run build`

- Run the app: `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## StoryBook

- Build: `npm run build-storybook`

- Run Storybook: `npm run storybook`

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## DONE

✅ Set up a new project using NextJS, Typescript, Tailwind, Storybook

✅ Fetch weather data on build time for the last year for each region using open-meteo API

✅ Pre-render page at build time using getStaticProps

✅ Build reusable, accessible, mobile friendly charts using ChartJs

✅ Transform data into filtered and grouped datasets

✅ Display optimal months for growing grapes with 25 to 32 degrees C

✅ Display precipitation summary for each month

## TO-DO

- fetch all data at once and handle errors

- fetch data for past 10 years using current date to work with average/per year data

- fetch climate change data for more accurate weather prediction for each region:
  https://climate-api.open-meteo.com/v1/climate?latitude=52.52&longitude=13.41&start_date=2023-01-01&end_date=2050-12-31&daily=temperature_2m_max&models=CMCC_CM2_VHR4,FGOALS_f3_H,HiRAM_SIT_HR,MRI_AGCM3_2_S,EC_Earth3P_HR,MPI_ESM1_2_XR,NICAM16_8S

- test data fetching

- build separate tabs that show all data for each region

- find strongest wind/worst humidity/coldest summer, etc. stat for each region. Rank them and display in a table

- build the table to display the features of each region

- snapshot testing

- test all components/pages/helpers
