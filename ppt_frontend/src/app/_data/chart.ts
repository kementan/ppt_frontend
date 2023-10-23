import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexNonAxisChartSeries, ApexOptions, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#006600";
let secondary_color = localStorage.getItem("secondary_color") || "#f73164";

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis | ApexXAxis[];
  stroke?: ApexStroke;
  tooltip?: any;
  dataLabels?: ApexDataLabels;
  yaxis?: ApexYAxis | ApexYAxis[];
  legend?: ApexLegend;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  responsive?: ApexResponsive[];
  pieseries?: ApexNonAxisChartSeries;
  title?: ApexTitleSubtitle;
  theme?: ApexTheme;
  colors?: string[];
  markers?: ApexMarkers;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
  options?: ApexOptions;
  subtitle?: ApexTitleSubtitle;
};

export let perbenihan: any = {
  series: [
    {
      name: "Padi",
      data: [100, 50, 25, 50, 30, 50, 70, 100, 50, 25, 50, 30, 50, 70, 100, 50, 25, 50, 30, 50, 70, 100, 50, 25, 50, 30, 50, 70, 100, 50, 25, 50, 30, 50],
    },
    {
      name: "Kedelai",
      data: [96, 121, 73, 104, 27, 60, 59, 129, 37, 124, 91, 77, 110, 84, 23, 122, 129, 75, 58, 32, 118, 30, 83, 115, 109, 59, 25, 78, 124, 94, 107, 128, 121, 48],
    },
    {
      name: "Kacang Tanah",
      data: [40, 111, 91, 56, 85, 117, 62, 29, 123, 102, 41, 126, 69, 33, 58, 128, 121, 72, 122, 88, 66, 79, 95, 104, 30, 65, 76, 48, 37, 64, 24, 109, 57],
    },
  ],
  chart: {
    type: "bar",
    height: 380,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
    curve: "smooth",
    lineCap: "butt",
  },
  xaxis: {
    categories: [
      "ACEH",
      "BALI",
      "BANTEN",
      "BENGKULU",
      "DI YOGYAKARTA",
      "DKI JAKARTA",
      "GORONTALO",
      "JAMBI",
      "JAWA BARAT",
      "JAWA TENGAH",
      "JAWA TIMUR",
      "KALIMANTAN BARAT",
      "KALIMANTAN SELATAN",
      "KALIMANTAN TENGAH",
      "KALIMANTAN TIMUR",
      "KALIMANTAN UTARA",
      "KEPULAUAN BANGKA BELITUNG",
      "KEPULAUAN RIAU",
      "LAMPUNG",
      "MALUKU",
      "MALUKU UTARA",
      "NUSA TENGGARA BARAT",
      "NUSA TENGGARA TIMUR",
      "PAPUA",
      "PAPUA BARAT",
      "RIAU",
      "SULAWESI BARAT",
      "SULAWESI SELATAN",
      "SULAWESI TENGAH",
      "SULAWESI TENGGARA",
      "SULAWESI UTARA",
      "SUMATERA BARAT",
      "SUMATERA SELATAN",
      "SUMATERA UTARA"

    ],
    floating: false,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      color: "#C4C4C4",
    },
  },
  colors: [secondary_color, "#51bb25", primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " ";
      },
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
      },
    },
  ],
};

export let production: any = {
  chart: {
    height: 320,
    width: '85%',
    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 0,
  },
  series: [
    {
      name: "Data 1",
      data: [50, 120, 90, 100, 70, 95, 40, 55, 30, 0],
    },
    {
      name: "Data 2",
      data: [35, 60, 40, 90, 70, 110, 90, 120, 60, 0],
    },
  ],
  fill: {
    colors: [primary_color, secondary_color],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "rgba(196,196,196, 0.3)",
    padding: {
      top: 0,
      right: -120,
      bottom: 10,
    },
  },
  colors: [primary_color, secondary_color],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  markers: {
    size: 0,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      color: "rgba(196,196,196, 0.3)",
    },
  },
  yaxis: [
    {
      title: {
        text: "Coming Soon",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
};


export let consumption: any = {
  series: [
    {
      name: "Data 1",
      data: [100, 50, 25, 50, 30, 50, 70],
    },
    {
      name: "Data 2",
      data: [70, 20, 55, 45, 35, 110, 85],
    },
    {
      name: "Data 3",
      data: [85, 55, 100, 35, 90, 60, 80],
    },
  ],
  chart: {
    type: "bar",
    height: 380,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
    curve: "smooth",
    lineCap: "butt",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    floating: false,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      color: "#C4C4C4",
    },
  },
  yaxis: {
    title: {
      text: "Coming Soon",
      style: {
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 500,
      },
    },
  },
  colors: [secondary_color, "#51bb25", primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " data";
      },
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
      },
    },
  ],
};
