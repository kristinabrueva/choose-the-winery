import * as React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import REGIONS from "../constants/regions";
import BarChart from "components/BarChart";
import { RegionType, WeatherDataType } from "types";
import { displayMonthAndYear, groupByMonths } from "helpers";
import LineChart from "components/LineChart";

const getTempData = (data: WeatherDataType, region: RegionType) => {
  let filteredData: {
    temperature_2m_max: number;
    precipitation_sum: number;
    time: string;
  }[] = [];

  data.daily.temperature_2m_max.forEach((temp, id) => {
    if (temp > 25 && temp < 33) {
      filteredData.push({
        temperature_2m_max: temp,
        time: data.daily.time[id],
        precipitation_sum: data.daily.precipitation_sum[id],
      });
    }
  });

  const groupedByMonths = groupByMonths(filteredData);

  return {
    chartLabel: `${region.name}, ${region.state}`,
    values: Object.values(groupedByMonths).map((i) => i.length),
    labels: Object.keys(groupedByMonths).map(displayMonthAndYear),
  };
};

const getPrecipitationSumData = (data: WeatherDataType, region: RegionType) => {
  const { temperature_2m_max, temperature_2m_min, precipitation_sum } =
    data.daily;

  const updatedData = data.daily.time.map((time, id) => ({
    time: time,
    temperature_2m_max: temperature_2m_max[id],
    temperature_2m_min: temperature_2m_min[id],
    precipitation_sum: precipitation_sum[id],
  }));

  const groupedByMonths = groupByMonths(updatedData);

  const precipitationSumByMonths = {};
  for (const key in groupedByMonths) {
    const arr = groupedByMonths[key];
    const sum = arr.reduce((acc, num) => acc + num.precipitation_sum, 0);
    precipitationSumByMonths[key] = Math.round(sum);
  }
  return {
    chartLabel: `${region.name}, ${region.state}`,
    values: Object.values(precipitationSumByMonths),
    labels: Object.keys(groupedByMonths).map(displayMonthAndYear),
  };
};

export default function Home({
  historicData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const perfectTempData = historicData.map((i, index) =>
    getTempData(i, REGIONS[index])
  );
  const averageTempData = historicData.map((i, index) =>
    getPrecipitationSumData(i, REGIONS[index])
  );

  return (
    <>
      <Head>
        <title>Choose your winery</title>
        <meta name="description" content="Choose your winery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col gap-5">
        <BarChart
          header="Good Days to grow grapes"
          data={perfectTempData}
          xScale="Months"
          yScale="Days"
        />
        <LineChart
          header="Precipitation summary per month"
          data={averageTempData}
          xScale="Months"
          yScale="Precipitation, mm"
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  historicData: WeatherDataType[];
}> = async () => {
  // TODO Fetch all data at once and handle errors
  const fetchOne = async (region: RegionType): Promise<WeatherDataType> => {
    const fetchUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${region.latitude}&longitude=${region.longtitude}&start_date=2022-05-28&end_date=2023-05-27&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,precipitation_sum&timezone=Australia%2FSydney`;
    const response = await fetch(fetchUrl);
    const historicData: WeatherDataType = await response.json();
    return historicData;
  };

  return {
    props: {
      historicData: [
        await fetchOne(REGIONS[0]),
        await fetchOne(REGIONS[1]),
        await fetchOne(REGIONS[2]),
        await fetchOne(REGIONS[3]),
        await fetchOne(REGIONS[4]),
      ],
    },
  };
};
