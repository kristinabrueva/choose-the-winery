
# What is this?

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with Typescript, Tailwind and ChartJS.

You have made the decision that you'd like to start your own Vineyard in one of the 5 regions. However there are some questions that you'd like to answer first before you can decide on which region is best.

- For each region, when is the best time of the year to grow grapes for wine production?

- Over the past 10 years, which region has historically had the worst climate for growing grapes for wine production?

- For each region over a 30 year period, what percentage of that period can we expect to have good grapes for wine production?

Use climate data from the Open Mateo Climate API (https://open-meteo.com/en/docs/climate-api) as the data source for your dashboard.

## Screenshots

### Desktop

<img width="1289" alt="Screen Shot 2023-06-22 at 09 35 08" src="https://github.com/kristinabrueva/choose-the-winery/assets/2128531/5b66f731-7c22-40a2-b055-5e3d6fa860e8">
<img width="1272" alt="Screen Shot 2023-06-22 at 09 35 29" src="https://github.com/kristinabrueva/choose-the-winery/assets/2128531/eb7976b4-51b4-46aa-87ff-f55b34f72c99">
<img width="1226" alt="Screen Shot 2023-06-22 at 09 35 39" src="https://github.com/kristinabrueva/choose-the-winery/assets/2128531/4e0b632c-48ca-4310-ab71-ee0c5917cd06">



### Tablet
<img width="366" alt="Screen Shot 2023-06-22 at 09 39 05" src="https://github.com/kristinabrueva/choose-the-winery/assets/2128531/7ad6bc12-ce2e-4b49-ac3f-f5eef884d221">

### Mobile
<img width="205" alt="Screen Shot 2023-06-22 at 09 37 47" src="https://github.com/kristinabrueva/choose-the-winery/assets/2128531/8cfb4b31-696d-4bc0-ac77-bc52873fd438">

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
