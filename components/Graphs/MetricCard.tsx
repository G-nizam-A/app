import EChartsReact from "echarts-for-react";
import { FaArrowUp, FaEllipsisVertical } from "react-icons/fa6";
import Button from "components/atoms/Button/button";
import Card from "components/atoms/Card/card";
import { StatsType } from "lib/hooks/api/useFetchMetricStats";

type MetricCardProps = {
  stats: StatsType[] | undefined;
  variant: "stars" | "forks";
};

export default function MetricCard({ stats, variant }: MetricCardProps) {
  const seriesData = stats?.map((stat) => (variant === "stars" ? stat.star_count : stat.forks_count));
  const bucketData = stats?.map((stat) => new Date(stat.bucket).toDateString());

  const option = {
    xAxis: {
      type: "category",
      data: bucketData,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    series: [
      {
        data: seriesData,
        symbol: "none",
        type: variant === "stars" ? "line" : "bar",
      },
    ],
    color: "hsla(19, 100%, 50%, 1)",
  };

  return (
    <Card className="w-full max-w-sm h-fit p-5 pl-6">
      <section className="flex justify-between items-center">
        <p className="text-xl font-semibold capitalize">{variant} per day</p>
        <Button variant="default" className="!p-1 rounded-full">
          <FaEllipsisVertical />
        </Button>
      </section>

      <section className="flex justify-between items-center">
        <div className="basis-1/2 w-full">
          <p className="text-5xl font-bold">1000</p>
        </div>
        <div className="h-fit w-full max-w-[12rem]">
          <EChartsReact option={option} style={{ height: "100%", width: "100%" }} />
        </div>
      </section>

      <section className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-0.5 border-green-300 border-2 rounded-full bg-green-200">
          <FaArrowUp className="text-green-500" />
          <p className="text-green-700">10%</p>
        </div>
        <p>vs. last period</p>
      </section>
    </Card>
  );
}
