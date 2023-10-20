import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TreeTableModule } from 'primeng/treetable';
import { OrganizationChartModule } from 'primeng/organizationchart';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FinancialApprovalsComponent } from './pages/financial-approvals/financial-approvals.component';
import { DisbursalComponent } from './pages/disbursal/disbursal.component';
import { TatAnalysisComponent } from './pages/tat-analysis/tat-analysis.component';
import { TatAnalysisTablesComponent } from './pages/tat-analysis-tables/tat-analysis-tables.component';

import { RejectionAnalysisComponent } from './pages/rejection-analysis/rejection-analysis.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { BusinessInsightsComponent } from './pages/business-insights/business-insights.component';
import { ThreeSixtyComponent } from './pages/three-sixty/three-sixty.component';
import { ProductivitySalesComponent } from './pages/productivity-sales/productivity-sales.component';
import { ChannelPartnersComponent } from './pages/channel-partners/channel-partners.component';
import { CreditComponent } from './pages/credit/credit.component';

import { WorkInProgressComponent } from './pages/work-in-progress/work-in-progress.component';

import { TechnicalComponent } from './pages/technical/technical.component';
import { LegalComponent } from './pages/legal/legal.component';
import { BusinessRMComponent } from './pages/business-rm/business-rm.component';
import { ChequesSummaryComponent } from './pages/cheques-summary/cheques-summary.component';
import { OtcPddComponent } from './pages/otc-pdd/otc-pdd.component';
import { BusinessSupervisorComponent } from './pages/business-supervisor/business-supervisor.component';
import { CreditCmComponent } from './pages/credit-cm/credit-cm.component';
import { CreditSupervisorComponent } from './pages/credit-supervisor/credit-supervisor.component';
import { WorkInProgressTablesComponent } from './pages/work-in-progress-tables/work-in-progress-tables.component';
import { OutOfTatComponent } from './pages/out-of-tat/out-of-tat.component';
import { PortfolioHealthComponent } from './pages/portfolio-health/portfolio-health.component';
import { FinalApprovalComponent } from './pages/final-approval/final-approval.component';
import { TeamHierarchyComponent } from './pages/team-hierarchy/team-hierarchy.component';

import { SearchingBasisComponent } from './pages/searching-basis/searching-basis.component';

import { BranchSearchComponent } from './pages/branch-search/branch-search.component';
import { TatLoginTableComponent } from './pages/tat-login-table/tat-login-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    FinancialApprovalsComponent,
    DisbursalComponent,
    TatAnalysisComponent,
    TatAnalysisTablesComponent,
    RejectionAnalysisComponent,
    InsightsComponent,
    BusinessInsightsComponent,
    ThreeSixtyComponent,
    ProductivitySalesComponent,
    ChannelPartnersComponent,
    CreditComponent,
    WorkInProgressComponent,
    TechnicalComponent,
    LegalComponent,
    BusinessRMComponent,
    ChequesSummaryComponent,
    OtcPddComponent,
    BusinessSupervisorComponent,
    CreditCmComponent,
    CreditSupervisorComponent,
    WorkInProgressTablesComponent,
    OutOfTatComponent,
    PortfolioHealthComponent,
    FinalApprovalComponent,
    TeamHierarchyComponent,
    SearchingBasisComponent,
    BranchSearchComponent,
    TatLoginTableComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TreeTableModule,
    OrganizationChartModule,
  ],
  providers: [SidebarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
