import type { SectionId, Skill } from '@/types/platform';

export const BLUEPRINT_YEAR = 2026;
export const BLUEPRINT_SOURCE =
  'https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam';
export const BLUEPRINT_PDF =
  'https://assets.ctfassets.net/rb9cdnjh59cm/5d2r66sSSE8wJRZTqAshlE/f97ec39c394eeb61b20a5824784306df/CPA_Exam_Blueprints_2026.pdf';
export const BLUEPRINT_CHANGES =
  'https://assets.ctfassets.net/rb9cdnjh59cm/5CsrSRU2mFGsmWEo9FqwLy/83e5ec97beab5daff376dba518589e75/Summary_of_Changes_to_the_Exam_Blueprints_effective_01012027.pdf';
export interface ExamSection {
  id: SectionId;
  title: string;
  type: 'core' | 'discipline';
  description: string;
  testlets: [number, number, number, number, number];
  mcqWeight: number;
  areas: { id: string; title: string; range: [number, number]; target: number }[];
  skills: Record<Skill, number>;
}
const area = (
  section: string,
  number: number,
  title: string,
  range: [number, number],
  target: number,
) => ({ id: `${section}-${['I', 'II', 'III', 'IV', 'V'][number - 1]}`, title, range, target });
export const examSections: ExamSection[] = [
  {
    id: 'far',
    title: 'Financial Accounting & Reporting',
    type: 'core',
    description: 'Recognition, measurement, presentation, and financial reporting.',
    testlets: [25, 25, 2, 3, 2],
    mcqWeight: 0.5,
    areas: [
      area('far', 1, 'Financial Reporting', [30, 40], 35),
      area('far', 2, 'Select Balance Sheet Accounts', [30, 40], 35),
      area('far', 3, 'Select Transactions', [25, 35], 30),
    ],
    skills: { remembering: 10, application: 50, analysis: 40, evaluation: 0 },
  },
  {
    id: 'aud',
    title: 'Auditing & Attestation',
    type: 'core',
    description: 'Professional judgment, audit risk, evidence, and engagement reporting.',
    testlets: [39, 39, 2, 3, 2],
    mcqWeight: 0.5,
    areas: [
      area('aud', 1, 'Ethics, Professional Responsibilities and General Principles', [15, 25], 20),
      area('aud', 2, 'Assessing Risk and Developing a Planned Response', [25, 35], 30),
      area('aud', 3, 'Performing Further Procedures and Obtaining Evidence', [30, 40], 35),
      area('aud', 4, 'Forming Conclusions and Reporting', [10, 20], 15),
    ],
    skills: { remembering: 35, application: 35, analysis: 20, evaluation: 10 },
  },
  {
    id: 'reg',
    title: 'Taxation & Regulation',
    type: 'core',
    description: 'Federal tax compliance, professional responsibilities, and business law.',
    testlets: [36, 36, 2, 3, 3],
    mcqWeight: 0.5,
    areas: [
      area(
        'reg',
        1,
        'Ethics, Professional Responsibilities and Federal Tax Procedures',
        [10, 20],
        15,
      ),
      area('reg', 2, 'Business Law', [15, 25], 20),
      area('reg', 3, 'Federal Taxation of Property Transactions', [5, 15], 10),
      area('reg', 4, 'Federal Taxation of Individuals', [22, 32], 27),
      area('reg', 5, 'Federal Taxation of Entities', [23, 33], 28),
    ],
    skills: { remembering: 30, application: 40, analysis: 30, evaluation: 0 },
  },
  {
    id: 'bar',
    title: 'Business Analysis & Reporting',
    type: 'discipline',
    description: 'Business analysis, complex accounting, and governmental reporting.',
    testlets: [25, 25, 2, 3, 2],
    mcqWeight: 0.5,
    areas: [
      area('bar', 1, 'Business Analysis', [40, 50], 45),
      area('bar', 2, 'Technical Accounting and Reporting', [35, 45], 40),
      area('bar', 3, 'State and Local Governments', [10, 20], 15),
    ],
    skills: { remembering: 15, application: 50, analysis: 35, evaluation: 0 },
  },
  {
    id: 'isc',
    title: 'Information Systems & Controls',
    type: 'discipline',
    description: 'Information systems, security, privacy, data, and SOC engagements.',
    testlets: [41, 41, 1, 3, 2],
    mcqWeight: 0.6,
    areas: [
      area('isc', 1, 'Information Systems and Data Management', [35, 45], 40),
      area('isc', 2, 'Security, Confidentiality and Privacy', [35, 45], 40),
      area('isc', 3, 'Considerations for SOC Engagements', [15, 25], 20),
    ],
    skills: { remembering: 60, application: 25, analysis: 15, evaluation: 0 },
  },
  {
    id: 'tcp',
    title: 'Tax Compliance & Planning',
    type: 'discipline',
    description: 'Advanced individual and entity taxation, planning, and property transactions.',
    testlets: [34, 34, 2, 3, 2],
    mcqWeight: 0.5,
    areas: [
      area(
        'tcp',
        1,
        'Individual Tax Compliance, Planning and Personal Financial Planning',
        [30, 40],
        35,
      ),
      area('tcp', 2, 'Entity Tax Compliance', [30, 40], 35),
      area('tcp', 3, 'Entity Tax Planning', [10, 20], 15),
      area('tcp', 4, 'Property Transactions', [10, 20], 15),
    ],
    skills: { remembering: 10, application: 60, analysis: 30, evaluation: 0 },
  },
];
export const sectionById = (id: string) => examSections.find((s) => s.id === id);
export const blueprintEditions = [
  { year: 2026, effectiveFrom: '2026-01-01', source: BLUEPRINT_PDF, status: 'active' },
  { year: 2027, effectiveFrom: '2027-01-01', source: BLUEPRINT_CHANGES, status: 'review-required' },
] as const;
export const blueprintChangeList = [
  {
    id: '2027-aud-evidence',
    edition: 2027,
    section: 'aud',
    topics: ['audit-evidence', 'audit-data', 'audit-sampling', 'audit-investments'],
    description:
      'Review reliability of technology/AI-generated data, sources of evidence, sampling methods, and investment audit considerations.',
  },
  {
    id: '2027-far-government-reference',
    edition: 2027,
    section: 'far',
    topics: ['governmental-foundations'],
    description:
      'Add the NCGA statements and interpretations reference to the governmental reporting sources.',
  },
  {
    id: '2027-reg-digital-assets',
    edition: 2027,
    section: 'reg',
    topics: ['individual-income', 'capital-gains'],
    description:
      'Clarify digital assets, gifts, inherited investments, and long/short-term capital-gain classification.',
  },
  {
    id: '2027-bar-opeb',
    edition: 2027,
    section: 'bar',
    topics: ['government-liabilities'],
    description: 'Review OPEB plans both with and without qualifying trusts.',
  },
  {
    id: '2027-isc-blockchain',
    edition: 2027,
    section: 'isc',
    topics: ['enterprise-systems'],
    description:
      'Narrow blockchain scope to ERP/accounting-system interaction and remove the superseded COSO blockchain task/reference.',
  },
];
