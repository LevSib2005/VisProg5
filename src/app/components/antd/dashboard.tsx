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
  { month: 'Янв', value: 120, category: 'Продажи' },
  { month: 'Фев', value: 200, category: 'Продажи' },
  { month: 'Мар', value: 150, category: 'Продажи' },
  { month: 'Апр', value: 180, category: 'Продажи' },
  { month: 'Май', value: 220, category: 'Продажи' },
  { month: 'Июн', value: 190, category: 'Продажи' },
];

const pieData: PieChartData[] = [
  { type: 'Категория A', value: 27 },
  { type: 'Категория B', value: 25 },
  { type: 'Категория C', value: 18 },
  { type: 'Категория D', value: 15 },
  { type: 'Категория E', value: 10 },
  { type: 'Категория F', value: 5 },
];

const columnData: ColumnChartData[] = [
  { category: 'Пн', value: 120 },
  { category: 'Вт', value: 200 },
  { category: 'Ср', value: 150 },
  { category: 'Чт', value: 80 },
  { category: 'Пт', value: 70 },
  { category: 'Сб', value: 110 },
  { category: 'Вс', value: 130 },
];

const lineConfig = {
  data: lineData,
  xField: 'month',
  yField: 'value',
  seriesField: 'category',
  point: {
    size: 5,
    shape: 'diamond',
  },
  interactions: [
    {
      type: 'marker-active',
    },
  ],
  height: 300,
  autoFit: true,
  theme: 'dark',
  color: ['#1890ff', '#722ed1', '#13c2c2', '#52c41a', '#faad14', '#f5222d'],
  xAxis: {
    line: {
      style: {
        stroke: '#434343',
      },
    },
    tickLine: {
      style: {
        stroke: '#434343',
      },
    },
    label: {
      style: {
        fill: '#ffffff',
      },
    },
  },
  yAxis: {
    line: {
      style: {
        stroke: '#434343',
      },
    },
    tickLine: {
      style: {
        stroke: '#434343',
      },
    },
    label: {
      style: {
        fill: '#ffffff',
      },
    },
    grid: {
      line: {
        style: {
          stroke: '#434343',
        },
      },
    },
  },
  tooltip: {
    domStyles: {
      'g2-tooltip': {
        backgroundColor: '#2d2d2d',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        color: '#ffffff',
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
  color: ['#1890ff', '#722ed1', '#13c2c2', '#52c41a', '#faad14', '#f5222d'],
  legend: {
    position: 'bottom',
  },
  interactions: [
    {
      type: 'element-active',
    },
  ],
};

const columnConfig = {
  data: columnData,
  xField: 'category',
  yField: 'value',
  label: {
    position: 'top',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  meta: {
    category: {
      alias: 'День недели',
    },
    value: {
      alias: 'Активность',
    },
  },
  height: 300,
  autoFit: true,
  theme: 'dark',
  color: ['#1890ff'],
  xAxis: {
    label: {
      autoHide: false,
      autoRotate: false,
      style: {
        fill: '#ffffff',
      },
    },
    title: {
      text: 'День недели',
      style: {
        fontSize: 14,
        fill: '#ffffff',
      },
    },
    line: {
      style: {
        stroke: '#434343',
      },
    },
    tickLine: {
      style: {
        stroke: '#434343',
      },
    },
  },
  yAxis: {
    title: {
      text: 'Активность',
      style: {
        fontSize: 14,
        fill: '#ffffff',
      },
    },
    label: {
      style: {
        fill: '#ffffff',
      },
    },
    line: {
      style: {
        stroke: '#434343',
      },
    },
    tickLine: {
      style: {
        stroke: '#434343',
      },
    },
    grid: {
      line: {
        style: {
          stroke: '#434343',
        },
      },
    },
  },
  tooltip: {
    domStyles: {
      'g2-tooltip': {
        backgroundColor: '#2d2d2d',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        color: '#ffffff',
      },
    },
    formatter: (datum: any) => {
      return { name: 'Активность', value: datum.value };
    },
  },
};

export default function Dashboard() {
  return (
    <div style={{ padding: '24px', backgroundColor: 'transparent' }}>
      <Title level={2} style={{ color: '#ffffff', textAlign: 'center', marginBottom: '32px' }}>
        Статистический дашборд
      </Title>

      <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Общий доход"
              value={112893}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Новые пользователи"
              value={1128}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Завершенные задачи"
              value={93}
              valueStyle={{ color: '#cf1322' }}
              suffix="/ 100"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Коэффициент конверсии"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#722ed1' }}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card
            title="Динамика продаж по месяцам"
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
            title="Распределение по категориям"
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
            title="Активность по дням недели"
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