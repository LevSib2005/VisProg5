'use client';

import { Card, Row, Col, Statistic } from 'antd';
import { Line, Pie, Column } from '@ant-design/charts';
import { Typography } from 'antd';

const { Title } = Typography;

interface LineChartData {
  month: string;
  value: number;
  category: string;
}

interface PieChartData {
  type: string;
  value: number;
}

interface ColumnChartData {
  category: string;
  value: number;
}

const lineData: LineChartData[] = [
  { month: 'Янв', value: 0, category: 'Лаб' },
  { month: 'Фев', value: 14, category: 'Лаб' },
  { month: 'Мар', value: 88, category: 'Лаб' },
  { month: 'Апр', value: 0, category: 'Лаб' },
  { month: 'Май', value: 52, category: 'Лаб' },
  { month: 'Июн', value: 0, category: 'Лаб' },
];

const pieData: PieChartData[] = [
  { type: 'Трофимов', value: 10 },
  { type: 'Малков', value: 20 },
];

const columnData: ColumnChartData[] = [
  { category: 'Студенты ИП316-315', value: 100 },
  { category: 'Наиль', value: -20 },
];

const lineConfig = {
  data: lineData,
  xField: 'month',
  yField: 'value',
  seriesField: 'category',
  point: {
    size: 4,
    shape: 'circle',
  },
  interactions: [
    {
      type: 'marker-active',
    },
  ],
  height: 300,
  autoFit: true,
  color: ['#1890ff'],
  xAxis: {
    line: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    tickLine: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    label: {
      style: {
        fill: '#000000',
      },
    },
  },
  yAxis: {
    line: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    tickLine: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    label: {
      style: {
        fill: '#000000',
      },
    },
    grid: {
      line: {
        style: {
          stroke: '#f0f0f0',
        },
      },
    },
  },
  tooltip: {
    domStyles: {
      'g2-tooltip': {
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        color: '#000000',
        border: '1px solid #d9d9d9',
      },
    },
  },
};

const pieConfig = {
  data: pieData,
  angleField: 'value',
  colorField: 'type',
  radius: 0.8,
  height: 300,
  autoFit: true,
  color: ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'],
  legend: {
    position: 'bottom',
    itemName: {
      style: {
        fill: '#000000',
      },
    },
  },
  interactions: [
    {
      type: 'element-active',
    },
  ],
  label: false, 
};

const columnConfig = {
  data: columnData,
  xField: 'category',
  yField: 'value',
  label: false, 
  meta: {
    category: {
      alias: 'День недели',
    },
    value: {
      alias: 'Задачи',
    },
  },
  height: 300,
  autoFit: true,
  color: ['#52c41a'],
  xAxis: {
    label: {
      autoHide: false,
      autoRotate: false,
      style: {
        fill: '#000000',
      },
    },
    title: {
      text: 'День недели',
      style: {
        fontSize: 14,
        fill: '#000000',
      },
    },
    line: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    tickLine: {
      style: {
        stroke: '#d9d9d9',
      },
    },
  },
  yAxis: {
    title: {
      text: 'Количество задач',
      style: {
        fontSize: 14,
        fill: '#000000',
      },
    },
    label: {
      style: {
        fill: '#000000',
      },
    },
    line: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    tickLine: {
      style: {
        stroke: '#d9d9d9',
      },
    },
    grid: {
      line: {
        style: {
          stroke: '#f0f0f0',
        },
      },
    },
  },
  tooltip: {
    domStyles: {
      'g2-tooltip': {
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        color: '#000000',
        border: '1px solid #d9d9d9',
      },
    },
    formatter: (datum: any) => {
      return { name: 'Задачи', value: datum.value };
    },
  },
};

export default function Dashboard() {
  return (
    <div style={{ padding: '24px', backgroundColor: 'transparent' }}>
      <Title level={2} style={{ color: '#000000', textAlign: 'center', marginBottom: '32px' }}>
        Аналитика группы ИП-316
      </Title>

      <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Всего студентов"
              value={21}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Ходят на пары, где за пропуски казнят"
              value={21}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Ходят на другие пары"
              value={0}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Средняя оценка"
              value={14.88}
              precision={1}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card
            title="Динамика сдачи лаб"
            style={{ height: '450px' }}
            styles={{
              body: {
                height: '380px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <Line {...lineConfig} />
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title="Диаграмма, хз, не придумал"
            style={{ height: '450px' }}
            styles={{
              body: {
                height: '380px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Pie {...pieConfig} />
            </div>
          </Card>
        </Col>

        <Col xs={24}>
          <Card
            title="Среднее количество баллов по визуальному программированию"
            style={{ height: '450px' }}
            styles={{
              body: {
                height: '380px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <Column {...columnConfig} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}