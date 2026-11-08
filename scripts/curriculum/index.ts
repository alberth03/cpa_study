import { audEthics } from './aud-ethics.ts';
import { audRisk } from './aud-risk.ts';
import { audEvidence } from './aud-evidence.ts';
import { audReporting } from './aud-reporting.ts';
import { regEthics } from './reg-ethics.ts';
import { regBusiness } from './reg-business.ts';
import { regProperty } from './reg-property.ts';
import { regIndividuals } from './reg-individuals.ts';
import { regEntities } from './reg-entities.ts';
import { barAnalysis } from './bar-analysis.ts';
import { barTechnical } from './bar-technical.ts';
import { barGovernment } from './bar-government.ts';
import { iscSystems } from './isc-systems.ts';
import { iscSecurity } from './isc-security.ts';
import { iscSoc } from './isc-soc.ts';
import { tcpIndividuals } from './tcp-individuals.ts';
import { tcpEntities } from './tcp-entities.ts';
import { tcpPlanning } from './tcp-planning.ts';
import { tcpProperty } from './tcp-property.ts';
import { giftPlanning, entityDistributions } from './tcp-additional.ts';
import type { Curriculum } from './types.ts';
export const curricula: Curriculum[] = [
  { id: 'aud', modules: [audEthics, audRisk, audEvidence, audReporting] },
  { id: 'reg', modules: [regEthics, regBusiness, regProperty, regIndividuals, regEntities] },
  { id: 'bar', modules: [barAnalysis, barTechnical, barGovernment] },
  { id: 'isc', modules: [iscSystems, iscSecurity, iscSoc] },
  {
    id: 'tcp',
    modules: [
      { ...tcpIndividuals, lessons: [...tcpIndividuals.lessons, giftPlanning] },
      { ...tcpEntities, lessons: [...tcpEntities.lessons, entityDistributions] },
      tcpPlanning,
      tcpProperty,
    ],
  },
];
