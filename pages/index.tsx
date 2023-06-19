import * as React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from "next/head";
import REGIONS from "../data/regions";
import BarChart from "components/BarChart";
import { RegionType, WeatherDataType } from "types";
import { displayMonthAndYear, groupByMonths } from "helpers";

const getDataForEachChart = (data: WeatherDataType, region: RegionType) => {
  let goodWeather: {
    temperature_2m_mean: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    precipitation_sum: number[];
  } = {
    temperature_2m_mean: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    time: [],
    precipitation_sum: [],
  };

  let groupedData: {
    temperature_2m_max: number;
    time: string;
  }[] = [];

  if (data?.daily.precipitation_sum) {
    data.daily.temperature_2m_max.forEach((temp, id) => {
      if (temp > 25 && temp < 33) {
        groupedData.push({
          temperature_2m_max: temp,
          time: data.daily.time[id],
        });

        goodWeather = {
          temperature_2m_max: [...goodWeather.temperature_2m_max, temp],
          temperature_2m_mean: [
            ...goodWeather.temperature_2m_mean,
            data.daily.temperature_2m_mean[id],
          ],
          temperature_2m_min: [
            ...goodWeather.temperature_2m_min,
            data.daily.temperature_2m_min[id],
          ],
          time: [...goodWeather.time, data.daily.time[id]],
          precipitation_sum: [
            ...goodWeather.precipitation_sum,
            data.daily.precipitation_sum[id],
          ],
        };
      }
    });
  }

  const grouped = groupByMonths(groupedData);

  return {
    chartLabel: `${region.name}, ${region.state}`,
    values: Object.values(grouped).map((i) => i.length),
    labels: Object.keys(grouped).map((time) => displayMonthAndYear(time)),
  };
};

export default function Home({
  historicData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const chartData = historicData.map((i, index) =>
    getDataForEachChart(i, REGIONS[index])
  );

  return (
    <>
      <Head>
        <title>Choose your winery</title>
        <meta name="description" content="Choose your winery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "relative min-h-screen sm:flex-row sm:px-6 sm:py-12 items-center sm:items-start"
        }
      >
        {chartData && <BarChart data={chartData} />}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  historicData: WeatherDataType[];
}> = async () => {
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
