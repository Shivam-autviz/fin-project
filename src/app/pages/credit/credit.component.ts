import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent {
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

  AvgCMFilesChart!: echarts.ECharts;
  SCMWorkloadChart!: echarts.ECharts;
  ConversionRatioChart!: echarts.ECharts;
  ActicityTatReportChart!: echarts.ECharts;
  EDChart!: echarts.ECharts;
  FTRFilesChart!: echarts.ECharts;

  AvgCMFilesOption: any;
  SCMWorkloadOption: any;
  ConversionRatioOption: any;
  ActicityTatReportOption: any;
  EDOption: any;
  FTRFilesOption: any;

  data = [
    {
      SNo: 1,
      CmName: 'Nikhil Rana',
      EmpCode: '0123',
      Area: 'Nikhil Rana',
      Branch: 'Chandigarh',
      TotalPd: '1200',
      TotalApproval: '120',
      State: 'Nikhil Rana',
      Disbursal: '45',
      ED: '68',
    },
    {
      SNo: 2,
      CmName: 'Manjeet Kaur',
      EmpCode: '0124',
      Area: 'Manjeet Kaur',
      Branch: 'Rohtak',
      TotalPd: '1400',
      TotalApproval: '140',
      State: 'Manjeet Kaur',
      Disbursal: '56',
      ED: '40',
    },
    {
      SNo: 3,
      CmName: 'Randeep hodda',
      EmpCode: '0124',
      Area: 'Randeep hodda',
      Branch: 'Indore',
      TotalPd: '1450',
      TotalApproval: '95',
      State: 'Randeep hodda',
      Disbursal: '55',
      ED: '65',
    },
    {
      SNo: 4,
      CmName: 'Kishor Kumar',
      EmpCode: '0125',
      Area: 'Kishor Kumar',
      Branch: 'Mumbai',
      TotalPd: '1290',
      TotalApproval: '90',
      State: 'Kishor Kumar',
      Disbursal: '65',
      ED: '55',
    },
    {
      SNo: 5,
      CmName: 'Amarjeet',
      EmpCode: '0126',
      Area: 'Amarjeet',
      Branch: 'Jaipur',
      TotalPd: '1000',
      TotalApproval: '100',
      State: 'Amarjeet',
      Disbursal: '55',
      ED: '52',
    },
    {
      SNo: 6,
      CmName: 'Vivek Gupta',
      EmpCode: '0127',
      Area: 'Vivek Gupta',
      Branch: 'Ambala',
      TotalPd: '1400',
      TotalApproval: '110',
      State: 'Vivek Gupta',
      Disbursal: '65',
      ED: '54',
    },
    {
      SNo: 7,
      CmName: 'Rashmika Sen',
      EmpCode: '0128',
      Area: 'Rashmika Sen',
      Branch: 'Chandigarh',
      TotalPd: '1200',
      TotalApproval: '135',
      State: 'Rashmika Sen',
      Disbursal: '70',
      ED: '63',
    },
    {
      SNo: 8,
      CmName: 'Rahul Saini',
      EmpCode: '0129',
      Area: 'Rahul Saini',
      Branch: 'Ambala',
      TotalPd: '1400',
      TotalApproval: '150',
      State: 'Rahul Saini',
      Disbursal: '75',
      ED: '55',
    },
    {
      SNo: 9,
      CmName: 'Kiran Sen',
      EmpCode: '0130',
      Area: 'Kiran Sen',
      Branch: 'Jaipur',
      TotalPd: '1000',
      TotalApproval: '125',
      State: 'Kiran Sen',
      Disbursal: '95',
      ED: '65',
    },
    {
      SNo: 10,
      CmName: 'Anushaka Sen',
      EmpCode: '0131',
      Area: 'Anushaka Sen',
      Branch: 'Indore',
      TotalPd: '1400',
      TotalApproval: '120',
      State: 'Anushaka Sen',
      Disbursal: '44',
      ED: '25',
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
    this.AvgCMFilesChart = echarts.init(
      document.getElementById('Avg-CM-Files-Chart') as HTMLDivElement
    );

    this.SCMWorkloadChart = echarts.init(
      document.getElementById('SCM-work-load-Chart') as HTMLDivElement
    );

    this.ConversionRatioChart = echarts.init(
      document.getElementById('Conversion-Chart') as HTMLDivElement
    );

    this.ActicityTatReportChart = echarts.init(
      document.getElementById('Activity-TAT-report') as HTMLDivElement
    );
    this.EDChart = echarts.init(
      document.getElementById('ED-Chart') as HTMLDivElement
    );

    this.FTRFilesChart = echarts.init(
      document.getElementById('FTR-Files-Chart') as HTMLDivElement
    );

    this.AvgCMFilesOption = {
      legend: {
        data: ['PD', 'Approval', 'Disbursal'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },

        boundaryGap: [0, 0.01],
        axisLabel: {
          show: false, // Set this to false to hide x-axis labels
        },
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: [
          'Maharashtra',
          'MP',
          'Gujarat',
          'Rajasthan',
          'NCR',
          'PCH',
          'Pan India',
        ],
      },

      series: [
        {
          name: 'PD',
          type: 'bar',
          data: [25, 28, 15, 14, 8, 18, 25],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          },
          itemStyle: {
            color: '#AD8B73',
            borderRadius: 10,
          },
        },
        {
          name: 'Approval',
          type: 'bar',
          data: [14, 13, 13, 13, 10, 20, 14],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          },
          itemStyle: {
            color: '#CEAB93',
            borderRadius: 10,
          },
        },
        {
          name: 'Disbursal',
          type: 'bar',
          data: [12, 26, 27, 27, 12, 11, 12],
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
          },
          itemStyle: {
            color: '#EEE3CB',
            borderRadius: 10,
          },
        },
      ],
    };

    this.SCMWorkloadOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%',
      },
      legend: {
        top: '3%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['25%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
              formatter: '{c}%',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 40,
              name: 'Manoj Rana',
              itemStyle: {
                color: '#7D6E83',
              },
            },
            {
              value: 10,
              name: 'Vikram Singh',
              itemStyle: {
                color: '#A75D5D',
              },
            },
            {
              value: 15,
              name: 'Vivek Singh',
              itemStyle: {
                color: '#DBA39A',
              },
            },
            {
              value: 20,
              name: 'Riya Sen',
              itemStyle: {
                color: '#DF7861',
              },
            },
            {
              value: 25,
              name: 'Vishal Singh',
              itemStyle: {
                color: '#ECB390',
              },
            },
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
          const login = [405, 456, 707, 770, 489, 675, 459];
          const randomLogin = login[dataIndex];
          const approved = [205, 256, 307, 370, 389, 475, 459];
          const randomapproved = approved[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `Login: ${randomLogin}<br>Approved: ${randomapproved}<br>${barValue}%`;
        },
      },
      xAxis: {
        type: 'category',

        data: ['All Products', 'Home Loan', 'LAP', 'BL', 'SBL'],
        axisLabel: {
          interval: 0,
          rotate: 45,
          overflow: 'break',
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
      },
      yAxis: {
        type: 'value',
        min: 10,
        max: 70,
        interval: 10,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false, // Hide tick lines
        },
        splitLine: {
          show: false,
        },
        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 20,
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
          data: [50, 36, 44, 40, 45],
          type: 'bar',
          itemStyle: {
            color: '#7D6E83',
          },
        },
      ],
    };

    this.ActicityTatReportOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const files = [405, 456, 707, 770, 89, 675, 459];
          const randomFiles = files[dataIndex];
          // Create the tooltip content with the actual value and random amount
          return `No of Files: ${randomFiles} <br>Days:${barValue}  `;
        },
      },
      legend: {
        data: ['PD', 'Approval', 'Disbursal'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [
            'Pan India',
            'Punjab',
            'Haryana',
            'NCR',
            'Rajasthan',
            'Gujarat',
            'MP',
            'Maharashtra',
          ],
          axisLabel: {
            interval: 0,
            rotate: 75,
            overflow: 'break',
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          min: 1,
          max: 6,
          interval: 1,
          name: 'Days',
          nameLocation: 'middle',
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          nameGap: 7,
          axisLabel: {
            margin: 1,
          },
        },
      ],
      series: [
        {
          name: 'PD',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5,
            },
          },
          data: [3, 2.8, 3.2, 3.1, 2.8, 2.8, 3],
          itemStyle: {
            color: '#9D76C1',
          },
        },
        {
          name: 'Approval',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5,
            },
          },
          data: [2.3, 2.1, 2.2, 2, 2.3, 2.4, 2.1],
          itemStyle: {
            color: '#A2D5F2',
          },
        },
        {
          name: 'Disbursal',
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5,
            },
          },
          data: [1.8, 1.9, 1.7, 1.5, 1.9, 1.8, 1.7],
          itemStyle: {
            color: '#07689F',
          },
        },
      ],
    };

    this.EDOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: (params: any) => {
          const barValue = params[0].value;
          const dataIndex = params[0].dataIndex;
          const amount = [405, 456, 707, 770, 89, 675, 459];
          const randomAmount = amount[dataIndex];
          return `Amount in Crs: ${randomAmount} <br>${barValue}%  `;
        },
      },
      xAxis: {
        type: 'category',

        data: [
          'Pan India',
          'Punjab',
          'Haryana',
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
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 1.7,
        max: 2.5,
        interval: 0.1,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        name: 'Percentage %',
        nameLocation: 'middle',
        nameGap: 15,
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
          data: [2.4, 2.2, 2.2, 2.2, 2.2, 2.15, 2.1, 2.2],
          type: 'bar',
          itemStyle: {
            color: '#DF7861',
          },
        },
      ],
    };

    this.FTRFilesOption = {
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
        formatter: (params: any) => {
          const barValue = params[0].value;

          // Create the tooltip content with the actual value and random amount
          return `${barValue} % `;
        },
      },
      legend: {
        data: [],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
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
            rotate: 75,
            overflow: 'break',
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false, // Hide tick lines
          },
          splitLine: {
            show: false,
          },
          min: 60,
          max: 85,
          interval: 5,
          name: 'Days',
          nameLocation: 'middle',
          nameGap: 20,
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
          axisLabel: {
            margin: 1,
          },
        },
      ],
      series: [
        {
          type: 'line',

          areaStyle: {
            opacity: 0,
          },
          emphasis: {
            focus: 'series',
            areaStyle: {
              opacity: 0.5, // Reduce opacity on hover to make it semi-transparent
            },
          },
          data: [75, 77, 76, 79, 83, 80, 82],
          itemStyle: {
            color: '#F0B86E',
          },
        },
      ],
    };

    this.AvgCMFilesChart.setOption(this.AvgCMFilesOption);
    this.SCMWorkloadChart.setOption(this.SCMWorkloadOption);
    this.ConversionRatioChart.setOption(this.ConversionRatioOption);
    this.ActicityTatReportChart.setOption(this.ActicityTatReportOption);
    this.EDChart.setOption(this.EDOption);
    this.FTRFilesChart.setOption(this.FTRFilesOption);
  }
}
