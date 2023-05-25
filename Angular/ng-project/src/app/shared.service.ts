import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private CardInfo: CardDetails[] = [{
    Src: "https://www.betterplace.co.in/blog/wp-content/uploads/2020/02/Blog-articles-staffing-and-recruitment_1-1-1.jpg",
    Header: "IT Staff Augmentation",
    Content: "Global Insights can improve the competitiveness of clients through a set of consulting practices that result in knowledge-intensive business solutions.. "
  }, {
    Src: "https://www.transperfect.com/sites/default/files/styles/responsive_image_2000/public/media/image/Learning%20About%20Quality%20The%20Difference%20Between%20QA%20%26%20QC.jpg?itok=y3_PRKlh",
    Header: "Software Quality Assurance",
    Content: "All companies have already realized the benefits of Software Quality Assurance (SQA). However, concerns over quality, cost and project management can make this a difficult decision.."
  },
  {
    Src: "https://thumbs.dreamstime.com/b/project-management-ideas-development-graph-concept-project-management-ideas-development-graph-concept-doodle-city-background-110344299.jpg",
    Header: "Business Analysis",
    Content: "Global Insights Business Analysis takes a pragmatic, face-to-face approach, performing research and analysis through observation, interviews, design workshops and focus groups.  "
  },
  {
    Src: "../../assets/developement.png",
    Header: "Application Development",
    Content: "In contrast with most systems integrators, Global Insights develops most of the technology it sells. "
  },
  {
    Src: "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/e/3/e3cfb857be4758d828bf2c6a60c310954d64532f37ec381655bcffbc7c1a348e/computer-system-validation-slide1_1.png",
    Header: "Computer System Validation",
    Content: "Global Insights has become a recognized leader in providing a variety of compliance services to the Life Sciences/Pharmaceutical/Biotech Industry.. "
  },
  {
    Src: "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/07/16152747/project-management.png",
    Header: "Project Management",
    Content: "When deadlines are pressing and resources are tight, but the stakes are high, you will need highly experienced project management professionals that serve as an extension of your staff to help support and manage your project initiatives.."
  },
  {
    Src: "https://ahaapps.com/wp-content/uploads/2019/12/CRM-Implementation-AhaApps.jpg",
    Header: "CRM Implementation",
    Content: "Choosing the right CRM for your needs is the first step, the second step is to implement the new solution in a proper method. Implementation is one of the most complex, and often neglected aspect of a successful CRM launch.. "
  }];

  private HomeCardInfo: CardDetails[] = [{ Header: "DATA ANALYTICS", Src: "../../assets/data_analytics.jpg", Content: "Optimizing decision support through enterprise-wide business management platforms" },
  { Header: "CONSULTING", Src: "../../assets/consulting-services.png", Content: "High quality, cost-effective solutions in technology and business consulting" },
  { Header: "STRATEGIC CONSULTING", Src: "../../assets/strategy-consulting.png", Content: "Aligning IT strategy with business-driven priorities" }];
  constructor() { }

  getWhereWeare(): Observable<CardDetails[]> {
    return of(this.CardInfo);
  }
  getHomeCardInfo(): Observable<CardDetails[]> {
    return of(this.HomeCardInfo);
  }
}
export interface CardDetails {
  Src: string,
  Header: string,
  Content: String
}