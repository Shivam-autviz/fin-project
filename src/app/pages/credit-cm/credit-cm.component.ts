import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-credit-cm',
  templateUrl: './credit-cm.component.html',
  styleUrls: ['./credit-cm.component.scss'],
})
export class CreditCmComponent {
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
      this.PotentialLostBusinessChart = echarts.init(
        document.getElementById('Potential-lost-business') as HTMLDivElement
      );
      this.DistributionMixChart = echarts.init(
        document.getElementById('Distribution-mix') as HTMLDivElement
      );

      this.SourceLoginChart = echarts.init(
        document.getElementById('source-login-chart') as HTMLDivElement
      );

      this.IrrPfInsuranceChart = echarts.init(
        document.getElementById('Irr-pf-Insurance') as HTMLDivElement
      );

      this.PotentialLostBusinessOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['CNI', 'Cancellation'],
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
            'Haryana',
            'Punjab',
            'Pan India',
          ],
        },

        series: [
          {
            name: 'CNI',
            type: 'bar',
            data: [40, 40, 40, 40, 40, 40, 40, 80],
            label: {
              show: true,
              position: 'right',
              formatter: '{c}%',
            },
            itemStyle: {
              color: '#5281FF', // Set the color for the first bar series (IRR)
            },
          },
          {
            name: 'Cancellation',
            type: 'bar',
            data: [65, 65, 65, 65, 65, 65, 65, 225],
            label: {
              show: true,
              position: 'right',
              formatter: '{c} Cr',
            },
            itemStyle: {
              color: '#F49494', // Set the color for the first bar series (IRR)
            },
          },
        ],
      };

      this.DistributionMixOption = {
        tooltip: {
          trigger: 'item',
        },
        responsive: true,
        legend: {
          top: '2%',
          left: 'center',
        },
        series: [
          {
            type: 'pie',
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
              { value: 45, name: 'Home Loan', itemStyle: { color: '#7C41DA' } },
              { value: 20, name: 'LAP', itemStyle: { color: '#F99B00' } },
              { value: 10, name: 'BL', itemStyle: { color: '#636363' } },
              { value: 25, name: 'SBL', itemStyle: { color: '#0B9DE8' } },
            ],
          },
        ],
      };

      this.SourceLoginOption = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
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
                value: 35,
                name: 'Direct ',
                itemStyle: {
                  color: '#3ADA84',
                },
              },
              {
                value: 20,
                name: 'Power Partner',
                itemStyle: {
                  color: 'rgba(5, 83, 22, 0.65)',
                },
              },
              {
                value: 10,
                name: 'DSA',
                itemStyle: {
                  color: '#0B9DE8',
                },
              },
              {
                value: 20,
                name: 'Other',
                itemStyle: {
                  color: '#FF821C',
                },
              },
            ],
          },
        ],
      };

      this.IrrPfInsuranceOption = {
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: ['IRR', 'PF', 'Insurance'],
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
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'Jan',
              'Feb',
              'Mar',
            ],
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
            min: 10,
            max: 100,
            interval: 10,
            name: 'Percentage',
            nameLocation: 'middle',
            nameGap: 43,
            axisLabel: {
              formatter: '{value}%',
              margin: 1,
            },
          },
        ],
        series: [
          {
            name: 'IRR',
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
            data: [30, 34, 37, 40, 42, 45],
          },
          {
            name: 'PF',
            type: 'line',

            areaStyle: {
              opacity: 0,
            },
            emphasis: {
              focus: 'series',
              areaStyle: {
                opacity: 1, // Reduce opacity on hover to make it semi-transparent
              },
            },
            data: [45, 47, 49, 47, 50, 53],
          },
          {
            name: 'Insurance',
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
            data: [60, 65, 63, 67, 69, 68],
          },
        ],
      };

      this.PotentialLostBusinessChart.setOption(
        this.PotentialLostBusinessOption
      );

      this.DistributionMixChart.setOption(this.DistributionMixOption);
      this.SourceLoginChart.setOption(this.SourceLoginOption);
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
