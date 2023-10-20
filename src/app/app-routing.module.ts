import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
import { ChequesSummaryComponent } from './pages/cheques-summary/cheques-summary.component';
import { OtcPddComponent } from './pages/otc-pdd/otc-pdd.component';
import { BusinessRMComponent } from './pages/business-rm/business-rm.component';
import { BusinessSupervisorComponent } from './pages/business-supervisor/business-supervisor.component';
import { CreditCmComponent } from './pages/credit-cm/credit-cm.component';
import { CreditSupervisorComponent } from './pages/credit-supervisor/credit-supervisor.component';
import { OutOfTatComponent } from './pages/out-of-tat/out-of-tat.component';
import { WorkInProgressTablesComponent } from './pages/work-in-progress-tables/work-in-progress-tables.component';
import { PortfolioHealthComponent } from './pages/portfolio-health/portfolio-health.component';
import { FinalApprovalComponent } from './pages/final-approval/final-approval.component';
import { TeamHierarchyComponent } from './pages/team-hierarchy/team-hierarchy.component';
import { SearchingBasisComponent } from './pages/searching-basis/searching-basis.component';
import { BranchSearchComponent } from './pages/branch-search/branch-search.component';
import { TatLoginTableComponent } from './pages/tat-login-table/tat-login-table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'financial-approvals', component: FinancialApprovalsComponent },
  { path: 'final-approvals', component: FinalApprovalComponent },
  { path: 'disbursal', component: DisbursalComponent },
  { path: 'tat-analysis', component: TatAnalysisComponent },
  { path: 'tat-table/:data', component: TatAnalysisTablesComponent },
  { path: 'rejection-ananlysis', component: RejectionAnalysisComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'business-insights', component: BusinessInsightsComponent },
  { path: '360', component: ThreeSixtyComponent },
  { path: 'productivity/sales', component: ProductivitySalesComponent },
  { path: 'productivity/channel-partner', component: ChannelPartnersComponent },
  { path: 'productivity/credit', component: CreditComponent },
  { path: 'work-in-progress', component: WorkInProgressComponent },
  { path: 'productivity/technical', component: TechnicalComponent },
  { path: 'productivity/legal', component: LegalComponent },
  { path: 'sanctioned-undisbursed-cases', component: ChequesSummaryComponent },
  { path: 'otc-pdd', component: OtcPddComponent },
  { path: 'business-rm', component: BusinessRMComponent },
  { path: 'business-supervisor', component: BusinessSupervisorComponent },
  { path: 'credit-cm', component: CreditCmComponent },
  { path: 'credit-supervisor', component: CreditSupervisorComponent },
  { path: 'out-of-tat', component: OutOfTatComponent },
  {
    path: 'work-in-progress-table/:data',
    component: WorkInProgressTablesComponent,
  },
  { path: 'portfolio-health', component: PortfolioHealthComponent },
  { path: 'team-hierarchy', component: TeamHierarchyComponent },
  { path: 'search', component: SearchingBasisComponent },
  { path: 'branch-search', component: BranchSearchComponent },
  { path: 'login-tat-table/:data', component: TatLoginTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
