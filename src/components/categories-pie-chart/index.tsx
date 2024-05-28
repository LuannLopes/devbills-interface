import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { FormatCurrency } from '../../utils/format-currency';

const apiData = [
  {
    _id: '1',
    title: 'Alimentção',
    amount: 3000,
    color: '#ff33bb',
  },
  {
    _id: '2',
    title: 'Transporte',
    amount: 2000,
    color: '#ff0000',
  },
  {
    _id: '3',
    title: 'Lazer',
    amount: 1000,
    color: '#00ff00',
  },
];

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export function CategoriesPieChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color,
    }));

    return chartData;
  }, []);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 24, right: 10, bottom: 24, left: -35 }}
      valueFormat={FormatCurrency}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={6}
      borderWidth={1}
      activeOuterRadiusOffset={3}
      // colors={customColors}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      theme={{
        text: {
          fontSize: 12,
          fontFamily: 'Lexend',
        },
        tooltip: {
          container: {
            // backgroundColor: color.colors.white,
            padding: 16,
            // color: color.colors.black,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      arcLinkLabelsTextColor="#ffffff"
      arcLinkLabelsThickness={1}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 4]],
      }}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 0,
          itemWidth: 120,
          itemHeight: 30,
          itemTextColor: '#C1C7C6',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#fff',
              },
            },
          ],
        },
      ]}
    />
  );
}
