import { ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import * as echarts from 'echarts';
declare var $: any;

@Component({
  selector: 'app-cheques-summary',
  templateUrl: './cheques-summary.component.html',
  styleUrls: ['./cheques-summary.component.scss'],
})
export class ChequesSummaryComponent {
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
  statusList :string[] = [
    'Financial Approved',
    'Final Approved',
    
  ];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedStatus:string = 'Financial Approved'

  FinancialApprovalChart!: echarts.ECharts;
  FinalApprovalChart!: echarts.ECharts;

  FinancialApprovalOption: any;
  FinalApprovalOption: any;

  data = [
    {
      SNo: 1,
      custName: 'Nikhil Rana',
      leadNo: '0123',
      product: 'Home Loan',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
      
    },
    {
      SNo: 2,
      custName: 'Manjeet Kaur',
      leadNo: '0124',
      product: 'Home Loan',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 3,
      custName: 'Randeep hodda',
      leadNo: '0125',
      product: 'Home Loan',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 4,
      custName: 'Kishor Kumar',
      leadNo: '0126',
      product: 'Home Loan',
      scheme: 'Top Up',
      loanAmount: 15,
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 5,
      custName: 'Amarjeet',
      leadNo: '0127',
      product: 'BL',
      scheme: 'BT',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 6,
      custName: 'Vivek Gupta',
      leadNo: '0128',
      product: 'BL',
      scheme: 'Fresh',
      loanAmount: '11',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 7,
      custName: 'Rashmika Sen',
      leadNo: '0129',
      product: 'Home Loan',
      scheme: 'Top Up',
      loanAmount: '15',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 8,
      custName: 'Rahul Saini',
      leadNo: '0130',
      product: 'Home Loan',
      scheme: 'Top Up',
      loanAmount: '13',
      technicalRecieved: 'N',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 9,
      custName: 'Kiran Sen',
      leadNo: '0131',
      product: 'LAP',
      scheme: 'Top Up',
      loanAmount: '12.5',
      technicalRecieved: 'Y',
      legalRecieved: 'N',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
    },
    {
      SNo: 10,
      custName: 'Anushaka Sen',
      leadNo: '0132',
      product: 'Home Loan',
      scheme: 'Fresh',
      loanAmount: '13',
      technicalRecieved: 'N',
      legalRecieved: 'Y',
      loginDate:'10/16/2023',
      rmName: 'Nikhil Rana',
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

  onStatusChange(selectedValue: string) {
    this.generateRandomData();
  }


  generateRandomData() {
    this.data.forEach(item => {
      item.SNo = Math.floor(Math.random() * 1000) + 1;
      item.leadNo = '0109';
      item.custName = 'Anita'; 
      item.product = 'BL';
      item.scheme = 'BT';
      item.loanAmount = 12.5;
      item.technicalRecieved = 'Y';
      item.legalRecieved = 'N';
      item.loginDate = '12/10/2023';
      item.rmName = 'Kishore Kumar';
    });
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

  initializeChart() {
    this.FinancialApprovalChart = echarts.init(
      document.getElementById('fianancial-approval-chart') as HTMLDivElement
    );
    this.FinalApprovalChart = echarts.init(
      document.getElementById('final-approval-chart') as HTMLDivElement
    );

    this.FinancialApprovalOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      toolbox: {
        feature: {
          saveAsImage: { show: true },
        },
      },
      legend: {
       data: ['Financial approval no.', 'Financial approval amount'],
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: false,
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
          data: ['Maharashtra', 'MP', 'Gujarat', 'Rajasthan', 'NCR', 'PCH'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'No of Files',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
          min: 10,
          max: 100,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
        {
          type: 'value',
          name: 'Amount ( in Rs.. Lacs)',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
          min: 10,
          max: 90,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
      ],
      series: [
        {
          name:"Financial approval no.",
          barWidth: 20,
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#FB8C00',
          },
        },

        {
          name:"Financial approval amount",
          type: 'line',
         
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#10C563',
          },
        },
      ],
    };

    this.FinalApprovalOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      toolbox: {
        feature: {
          saveAsImage: { show: true },
        },
      },
      legend: {
       data: ['Financial approval no.', 'Financial approval amount'],
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: false,
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            rotate: -45,
            overflow: 'break',
          },
          data: ['Maharashtra', 'MP', 'Gujarat', 'Rajasthan', 'NCR', 'PCH'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'No of Files',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
          min: 10,
          max: 100,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
        {
          type: 'value',
          name: 'Amount ( in Rs.. Lacs)',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight: 600,
            fontSize:14,
          },
          min: 10,
          max: 90,
          interval: 10,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ',
          },
        },
      ],
      series: [
        {
          name:"Financial approval no.",
          barWidth: 20,
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#F0997D',
          },
        },

        {
          name:"Financial approval amount",
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            },
          },
          data: [50, 55, 40, 55, 60, 40],
          itemStyle: {
            color: '#7460EE',
          },
        },
      ],
    };

    this.FinancialApprovalChart.setOption(this.FinancialApprovalOption);

    this.FinalApprovalChart.setOption(this.FinalApprovalOption);
  }
}
