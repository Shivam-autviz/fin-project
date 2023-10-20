import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-business-supervisor',
  templateUrl: './business-supervisor.component.html',
  styleUrls: ['./business-supervisor.component.scss'],
})
export class BusinessSupervisorComponent {
  PotentialLostBusinessChart!: echarts.ECharts;
  DistributionMixChart!: echarts.ECharts;
  SourceLoginChart!: echarts.ECharts;
  IrrPfInsuranceChart!: echarts.ECharts;

  PotentialLostBusinessOption: any;
  DistributionMixOption: any;
  SourceLoginOption: any;
  IrrPfInsuranceOption: any;

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
  monthFilters: string[] = ['Month to Date', 'Three month'];
  selectedState: string = 'Pan India';
  selectedFilter: string = 'September';
  selectedTrendFilter: string = 'Month to Date';
  showContent!: boolean;

  stateApprovalOption: any;

  progressValue1: number = 60;
  progressValue2: number = 15;
  progressValue3: number = 25;
  minValue1: number = 80;
  maxValue1: number = 75;
  minValue2: number = 10;
  maxValue2: number = 12;
  minValue3: number = 6;
  maxValue3: number = 8;

  public isToggled = false;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  toggle(): void {
    this.isToggled = !this.isToggled;
    setTimeout(() => {
      this.initializeChart();
    }, 0);
    this.cdRef.detectChanges();
  }

  initializeChart() {
    if (!this.isToggled) {
      this.IrrPfInsuranceChart = echarts.init(
        document.getElementById('Irr-pf-Insurance') as HTMLDivElement
      );

      this.IrrPfInsuranceOption = {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', 'Branch target', 'Achievement'],
          source: [
            { product: 'Chandigarh', 'Branch target': 100, Achievement: 82 },
            { product: 'Rohtak', 'Branch target': 95, Achievement: 90 },
            { product: 'Karnal', 'Branch target': 85, Achievement: 110 },
            { product: 'Sonipat', 'Branch target': 85, Achievement: 100 },
            { product: 'Ambala', 'Branch target': 70, Achievement: 70 },
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

            overflow: 'break',
          },
        },
        yAxis: {
          min: 20,
          max: 120,
          interval: 20,
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
          nameTextStyle: {
            fontWeight: 600,
            fontSize: 14,
          },
        },
        series: [
          {
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              color: '#F0997D', // Set the color for the first bar series (IRR)
            },
          },
          {
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              color: '#F0B86E', // Set the color for the first bar series (IRR)
            },
          },
        ],
      };

      this.IrrPfInsuranceChart.setOption(this.IrrPfInsuranceOption);
    } else {
    }
  }

  onFilterChange(selectedValue: string) {
    console.log(selectedValue);
  }

  onStateChange(selectedValue: string) {
    console.log(selectedValue);
  }

  generateRandomAmount(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ontrendStateChange(selectedValue: string) {}

  onTrendFilterChange(selectedValue: string) {}
}
