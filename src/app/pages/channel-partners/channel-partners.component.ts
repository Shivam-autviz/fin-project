import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;
@Component({
  selector: 'app-channel-partners',
  templateUrl: './channel-partners.component.html',
  styleUrls: ['./channel-partners.component.scss'],
})
export class ChannelPartnersComponent {
  states: string[] = [
    'Pan India',
    'Punjab',
    'Haryana',
    'NCR',
    'Rajasthan',
    'Gujarat',
    'MP',
    'Maharashtra',
  ];
  filters: string[] = [
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    // 'Select custom'
  ];

  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  isActiveButton: string = 'button1';

  CPLoginsChart!: echarts.ECharts;
  CPDisbursalChart!: echarts.ECharts;
  CPOfDelinquencyChart!: echarts.ECharts;
  CPDetailsChart!: echarts.ECharts;

  CPLoginsOption: any;
  CPDisbursalOption: any;
  CPOfDelinquencyOption: any;
  CPDetailsOption: any;

  data = [
    {
      SNo: 1,
      CpName: 'Nikhil Rana',
      CpCode: '0122',
      Area: 'Nikhil Rana',
      Branch: 'CHANDIGARH',
      TotalLogins: '140',
      TotalDisbursal: '1200',
      State: 'Nikhil Rana',
      Delinquency: '68',
    },
    {
      SNo: 2,
      CpName: 'Manjeet Kaur',
      CpCode: '0123',
      Area: 'Manjeet Kaur',
      Branch: 'Rohtak',
      TotalLogins: '102',
      TotalDisbursal: '1400',
      State: 'Manjeet Kaur',
      Delinquency: '40',
    },
    {
      SNo: 3,
      CpName: 'Randeep hodda',
      CpCode: '0124',
      Area: 'Randeep hodda',
      Branch: 'Indore',
      TotalLogins: '140',
      TotalDisbursal: '1200',
      State: 'Randeep hodda',
      Delinquency: '65',
    },
    {
      SNo: 4,
      CpName: 'Kishor Kumar',
      CpCode: '0125',
      Area: 'Kishor Kumar',
      Branch: 'Mumbai',
      TotalLogins: '114',
      TotalDisbursal: '1400',
      State: 'Kishor Kumar',
      Delinquency: '55',
    },
    {
      SNo: 5,
      CpName: 'Amarjeet',
      CpCode: '0126',
      Area: 'Amarjeet',
      Branch: 'Jaipur',
      TotalLogins: '110',
      TotalDisbursal: '1100',
      State: 'Amarjeet',
      Delinquency: '52',
    },
    {
      SNo: 6,
      CpName: 'Vivek Gupta',
      CpCode: '0128',
      Area: 'Vivek Gupta',
      Branch: 'CLUSTER',
      TotalLogins: '130',
      TotalDisbursal: '1500',
      State: 'Vivek Gupta',
      Delinquency: '54',
    },
    {
      SNo: 7,
      CpName: 'Rashmika Sen',
      CpCode: '0129',
      Area: 'Rashmika Sen',
      Branch: 'Chandigarh',
      TotalLogins: '100',
      TotalDisbursal: '1500',
      State: 'Rashmika Sen',
      Delinquency: '63',
    },
    {
      SNo: 8,
      CpName: 'Rahul Saini',
      CpCode: '0130',
      Area: 'Rahul Saini',
      Branch: 'Ambala',
      TotalLogins: '125',
      TotalDisbursal: '1600',
      State: 'Rahul Saini',
      Delinquency: '55',
    },
    {
      SNo: 9,
      CpName: 'Kiran Sen',
      CpCode: '0131',
      Area: 'Kiran Sen',
      Branch: 'Jaipur',
      TotalLogins: '120',
      TotalDisbursal: '1520',
      State: 'Kiran Sen',
      Delinquency: '65',
    },
    {
      SNo: 10,
      CpName: 'Anushaka Sen',
      CpCode: '0132',
      Area: 'Anushaka Sen',
      Branch: 'Indore',
      TotalLogins: '125',
      TotalDisbursal: '1250',
      State: 'Anushaka Sen',
      Delinquency: '25',
    },
    // Add more data as needed
  ];

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {}

  onFilterChange(selectedValue: string) {}

  onStateChange(selectedValue: string) {}

  setActiveButton(button: string) {
    setTimeout(() => {
      this.initializeChart();
    }, 0);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        $(this.elementRef.nativeElement.querySelector('#table')).DataTable({
          lengthChange: false,
          searching: false,
          ordering: false,
        });
      }, 0);
    });
    this.cdRef.detectChanges();
    this.isActiveButton = button;
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        $(this.elementRef.nativeElement.querySelector('#table')).DataTable({
          lengthChange: false,
          searching: false,
          ordering: false,
        });
      }, 0);
    });

    this.initializeChart();
  }

  ngOnDestroy() {
    const table = $(
      this.elementRef.nativeElement.querySelector('#table')
    ).DataTable();
    table.destroy();
  }
  initializeChart() {
    this.CPLoginsChart = echarts.init(
      document.getElementById('CP-Logins-Chart') as HTMLDivElement
    );

    this.CPDisbursalChart = echarts.init(
      document.getElementById('CP-Disbursal-Chart') as HTMLDivElement
    );
    this.CPOfDelinquencyChart = echarts.init(
      document.getElementById('Delinquency-of-CPs') as HTMLDivElement
    );

    this.CPDetailsChart = echarts.init(
      document.getElementById('CP-Detail-Chart') as HTMLDivElement
    );

    this.CPDetailsOption = {
      legend: {
        textStyle: {
          color: '#333',
        },
        itemWidth: 20, // Adjust the width of legend items
        itemHeight: 20,
        borderRadius: 10,
      },
      tooltip: {},
      dataset: {
        dimensions: ['state', 'Total Number of CP’s', 'Active CP’s'],

        source: [
          {
            state: 'Pan India',
            'Total Number of CP’s': 1410,
            'Active CP’s': 1250,
          },
          {
            state: 'Punjab',
            'Total Number of CP’s': 1400,
            'Active CP’s': 1230,
          },
          {
            state: 'Haryana',
            'Total Number of CP’s': 1450,
            'Active CP’s': 1370,
          },
          { state: 'NCR', 'Total Number of CP’s': 1400, 'Active CP’s': 1190 },
          {
            state: 'Rajasthan',
            'Total Number of CP’s': 1480,
            'Active CP’s': 1350,
          },
          {
            state: 'Gujarat',
            'Total Number of CP’s': 1400,
            'Active CP’s': 1190,
          },
          { state: 'MP', 'Total Number of CP’s': 1430, 'Active CP’s': 1340 },
          {
            state: 'Maharashtra',
            'Total Number of CP’s': 1400,
            'Active CP’s': 1260,
          },
        ],
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: -45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        min: 1000,
        max: 1500,
        interval: 100,
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
        name: 'Number of CPs',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
      },

      series: [
        {
          type: 'bar',
          itemStyle: {
            color: '#3282B8',
          },
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#3FC1C9',
          },
        },
      ],
    };

    this.CPLoginsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const totalLogin = 340;
          const dataIndex = params[0].dataIndex;
          const percentage = [40, 45, 70, 77, 89, 67, 45];
          const randomPerc = percentage[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `CP login: ${barValue} <br>Total Login:${totalLogin} <br>  ${randomPerc}% `;
        },
      },
      xAxis: {
        type: 'category',

        data: [
          'Pan India',
          'PCH',
          'NCR',
          'Rajasthan',
          'Gujarat',
          'MP',
          'Maharashtra',
        ],
        axisLabel: {
          interval: 0,
          rotate: 45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 20,
        max: 35,
        interval: 2,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Number of CPs',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [26, 31, 28, 31, 31, 27, 31],
          type: 'bar',
          itemStyle: {
            color: '#DBA39A',
          },
        },
      ],
    };

    this.CPDisbursalOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const total = 340;
          const dataIndex = params[0].dataIndex;
          const amount = [140, 145, 170, 177, 189, 167, 245];
          const disbursalAmount = amount[dataIndex];

          return `Total disbursal (amount in Cr): ${total} <br>CP disbursal (amount in Cr) :${disbursalAmount} <br>  ${barValue}% `;
        },
      },
      xAxis: {
        type: 'category',

        data: [
          'Pan India',
          'PCH',
          'NCR',
          'Rajasthan',
          'Gujarat',
          'MP',
          'Maharashtra',
        ],
        axisLabel: {
          interval: 0,
          rotate: 45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 15,
        max: 22,
        interval: 1,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: '% of Total Disbursal',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          barWidth: 20,
          data: [18, 20.5, 19, 18.5, 20.5, 18.5, 20.5],
          type: 'bar',
          itemStyle: {
            color: '#0747A6',
          },
        },
      ],
    };

    this.CPOfDelinquencyOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          return ` ${barValue}%`;
        },
      },
      legend: {
        data: ['Overall', 'CP'],
        textStyle: {
          color: '#333',
        },
        itemWidth: 20,
        itemHeight: 20,
        borderRadius: 10,
      },
      xAxis: {
        type: 'category',

        data: [
          'Pan India',
          'PCH',
          'NCR',
          'Rajasthan',
          'Gujarat',
          'MP',
          'Maharashtra',
        ],
        axisLabel: {
          interval: 0,
          rotate: 45,
          overflow: 'break',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0.75,
        max: 1.25,
        interval: 0.1,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Delinquency in %',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
        axisLabel: {
          formatter: '{value}',
          margin: 1,
        },
      },
      series: [
        {
          name: 'Overall',
          barWidth: 20,
          data: [0.95, 1.15, 1.05, 1.15, 1.03, 1.15, 1.03],
          type: 'bar',
          itemStyle: {
            color: '#8675A9',
          },
        },
        {
          name: 'CP',
          barWidth: 20,
          data: [0.9, 1.17, 1.01, 1.18, 1.0, 1.17, 1.0],
          type: 'bar',
          itemStyle: {
            color: '#D2BEFB',
          },
        },
      ],
    };

    this.CPDetailsChart.setOption(this.CPDetailsOption);
    this.CPLoginsChart.setOption(this.CPLoginsOption);
    this.CPDisbursalChart.setOption(this.CPDisbursalOption);
    this.CPOfDelinquencyChart.setOption(this.CPOfDelinquencyOption);
  }
}
