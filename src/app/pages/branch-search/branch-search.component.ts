import { Component } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-branch-search',
  templateUrl: './branch-search.component.html',
  styleUrls: ['./branch-search.component.scss']
})
export class BranchSearchComponent {
  filters: string[] = ['Month To Date', 'Last Month'];

  states: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujrat',
    'MP',
    'Maharashtra',
  ];

  progressValue1: number = 60;
  progressValue2: number = 15;
  progressValue3: number = 25;
  minValue1: number = 80;
  maxValue1: number = 75;
  minValue2: number = 10;
  maxValue2: number = 12;
  minValue3: number = 6;
  maxValue3: number = 8;

  selectedState: string = 'Pan India';
  selectedFilter: string = 'Month To Date';

  ProductWiseChart!: echarts.ECharts;
  LoginApprovalsDisbursalChart!: echarts.ECharts;
  AvgTickedSizeChart!: echarts.ECharts;
  DistributionMixChart!: echarts.ECharts;
  ConversionRatioChart!: echarts.ECharts;
  irrPFInsChart!: echarts.ECharts;
  IMDChart!: echarts.ECharts;
  EDGNPANPAChart!: echarts.ECharts;

  AvgTickedSizeOption: any;
  DistributionMixOption: any;
  ConversionRatioOption: any;
  irrPFInsOption: any;
  EDGNPANPAOption: any;

  ProductWiseOption: any;
  LoginApprovalsDisbursalOption: any;
  IMDOption: any;
  showprogressChart: boolean = false;

  onFilterChange(selectedValue: string) {
    if (selectedValue === 'Last Month') {
      this.showprogressChart = true;
    } else {
      this.showprogressChart = false;
    }
  }

  onStateChange(selectedValue: string) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    this.ProductWiseChart = echarts.init(
      document.getElementById('product-wise-Chart') as HTMLDivElement
    );
    this.LoginApprovalsDisbursalChart = echarts.init(
      document.getElementById(
        'Login-Approvals-Disbursal-Chart'
      ) as HTMLDivElement
    );

    this.AvgTickedSizeChart = echarts.init(
      document.getElementById('Avg-ticked-size') as HTMLDivElement
    );

    this.DistributionMixChart = echarts.init(
      document.getElementById('distribution-mix') as HTMLDivElement
    );

    this.ConversionRatioChart = echarts.init(
      document.getElementById('conversion-ratio') as HTMLDivElement
    );

    this.irrPFInsChart = echarts.init(
      document.getElementById('Irr-pf-insurance') as HTMLDivElement
    );

    this.IMDChart = echarts.init(
      document.getElementById('IMD-chart') as HTMLDivElement
    );

    this.EDGNPANPAChart = echarts.init(
      document.getElementById('ED-GNPA-NPA-chart') as HTMLDivElement
    );

    this.ProductWiseOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#07A14E',
          },
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const files = [34, 45, 60,70,80];
          const randomFiles = files[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `No of Files:${randomFiles} <br> Days: ${barValue}`;
        },

      },
      responsive: true,

      grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          axisLabel: {
            interval: 0,
            rotate: -70,
            overflow: 'break',
          },
          type: 'category',
          boundaryGap: false,
          data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          min: 5,
          max: 30,
          interval: 5,
          name: 'Days ',
          nameLocation: 'middle',
          nameGap: 25,
        },
      ],
      series: [
        {
          name: 'All Products',
          type: 'line',
          color: '#EF9595',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [14, 17, 15, 16, 13],
        },

      ],
    };

    this.LoginApprovalsDisbursalOption = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          let tooltipText = '';
          if (params.name === '500Files') {
            tooltipText = 'Amount in Cr: 34';
          } else if (params.name === '30Crs') {
            tooltipText = 'No. of files: 400 ';
          } else if (params.name === '25Crs') {
            tooltipText = 'No. of files: 300';
          }
          return tooltipText;
        },
      },

      legend: {
        top: 25,
        data: ['Login', 'Approval', 'Disbursal'],
      },
      series: [
        {
          name: '',
          type: 'funnel',
          left: '-25%',
          top: 60,
          bottom: 60,
          width: '150%',
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside',
          },
          labelLine: {
            length: 10,

            lineStyle: {
              width: 1,
              type: 'solid',
            },
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 15,
          },
          emphasis: {
            label: {
              fontSize: 10,
              color: 'white',
            },
          },
          data: [
            { value: 60, name: '500Files', itemStyle: { color: '#F99B00' } },
            { value: 40, name: '30Crs', itemStyle: { color: '#342D2D' } },
            { value: 20, name: '25Crs', itemStyle: { color: '#7460EE' } },
          ],
        },
      ],
    };

    this.AvgTickedSizeOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;

          // Create the tooltip content with the actual value and random amount
          return `Amount: ${barValue}`;
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',

        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 8,
        max: 15,
        interval: 1,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Amount ( in Rs. Lacs ) ',
        nameLocation: 'middle',
        nameGap: 25,
      },
      series: [
        {
          barWidth: 20,
          data: [10.5, 9, 8.5, 7.5, 5],
          type: 'bar',
          itemStyle: {
            color: '#0747A6',
          },
        },
      ],
    };

    this.DistributionMixOption = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          console.log(params);

          let tooltipText = '';

          if (params.name === 'Home Loan') {
            tooltipText = 'No. of files: 500 <br/> Amount in Cr: 45';
          } else if (params.name === 'LAP') {
            tooltipText = 'No. of files: 300 <br/> Amount in Cr: 27';
          } else if (params.name === 'BL') {
            tooltipText = 'No. of files: 200 <br/> Amount in Cr: 26';
          } else if (params.name === 'SBL') {
            tooltipText = 'No. of files: 600 <br/> Amount in Cr: 28';
          } else if (params.name === 'All Products') {
            tooltipText = 'No. of files: 300 <br/> Amount in Cr: 36';
          }

          return tooltipText;
        },
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          top: '5%',
          radius: ['30%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              formatter: '{c}%',
              fontSize: 16,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 25,
              name: 'All Products',
              itemStyle: { color: '#7C41DA' },
            },
            { value: 34, name: 'Home Loan', itemStyle: { color: '#F99B00' } },
            { value: 20, name: 'LAP', itemStyle: { color: '#07A14E' } },
            { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
            { value: 15, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
          ],
        },
      ],
    };

    this.ConversionRatioOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;

          const randomAmounts = [35, 14, 16,34,23];
          const randomAmount = randomAmounts[dataIndex];

          const files = [34, 45, 67,77,89];
          const randomFiles = files[dataIndex];
          return `No.of Files:${randomFiles}<br> Amount in Cr:${randomAmount}<br> ${barValue}% <br>  `;
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },

        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',

        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 70,
        max: 10,
        interval: 10,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 25,
      },
      series: [
        {
          barWidth: 20,
          data: [50, 35, 25, 20, 33],
          type: 'bar',
          itemStyle: {
            color: '#5D5BCC',
          },
        },
      ],
    };

    this.irrPFInsOption = {
      legend: {},
      tooltip: {
        formatter: function (params:any) {
          return `
          
            Product: ${params.data.product}<br/>
            IRR: ${params.data.IRR}%<br/>
            PF: ${params.data.PF}%<br/>
            Insurance: ${params.data.Insurance}%
          `;
        },
      },
      dataset: {
        dimensions: ['product', 'IRR', 'PF', 'Insurance'],
        source: [
          { product: 'All Products', IRR: 8, PF: 3.5, Insurance: 3 },
          { product: 'Home loan', IRR: 10.5, PF: 3, Insurance: 2.7 },
          { product: 'LAP', IRR: 7, PF: 4, Insurance: 2.4 },
          { product: 'BL', IRR: 8.9, PF: 3.7, Insurance: 2.4 },
          { product: 'SBL', IRR: 6, PF: 3.7, Insurance: 3 },
        ],
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        min: 2,
        max: 16,
        interval: 2,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 25,
      },
     
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#636363', 
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#F99B00', 
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#4FC3F7', 
          },
        },
      ],
    };

    this.IMDOption = {
      tooltip: {
        trigger: 'item',
        formatter: 'No of files: {c} <br>({d}%)',
      },
      legend: {
        top: '5%',
        left: 'center',

        selectedMode: false,
      },
      series: [
        {
          
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],

          startAngle: 180,
          labelLine:{
            show:false,
          },
          label:{
            show:false,
          },
          data: [
            { value: 104, name: 'Online', itemStyle: { color: '#7C41DA' } },
            { value: 235, name: 'Cheque', itemStyle: { color: '#FB8C00' } },
            { value: 380, name: 'Cash', itemStyle: { color: '#07A14E' } },
            { value: 484, name: 'UPI', itemStyle: { color: '#636363' } },

            {
            
              value: 104 + 235 + 380 + 484 + 300,
              itemStyle: {
               
                color: 'none',
                decal: {
                  symbol: 'none',
                },
              },
              label: {
                show: false,
              },
            },
          ],
        },
      ],
    };

    this.EDGNPANPAOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;

          const randomAmounts = [35, 14, 16];
          const randomAmount = randomAmounts[dataIndex];

          const customers = [34, 45, 67];
          const randomCustomers = customers[dataIndex];
          return `No.of Customer:${randomCustomers}<br> Amount in Cr:${randomAmount}<br> ${barValue}% <br>  `;
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        type: 'category',

        data: ['ED', 'GNPA', 'NPA'],
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
      },
      yAxis: {
        type: 'value',
        min: 0.5,
        max: 3.5,
        interval: 0.5,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 25,
      },
      series: [
        {
          barWidth: 40,
          data: [1.2, 1.3, 1],
          type: 'bar',
          itemStyle: {
            color: '#F0997D',
          },
        },
      ],
    };

    this.ProductWiseChart.setOption(this.ProductWiseOption);
    this.LoginApprovalsDisbursalChart.setOption(
      this.LoginApprovalsDisbursalOption
    );
    this.AvgTickedSizeChart.setOption(this.AvgTickedSizeOption);
    this.DistributionMixChart.setOption(this.DistributionMixOption);
    this.ConversionRatioChart.setOption(this.ConversionRatioOption);
    this.irrPFInsChart.setOption(this.irrPFInsOption);
    this.IMDChart.setOption(this.IMDOption);
    this.EDGNPANPAChart.setOption(this.EDGNPANPAOption);
  }
}
