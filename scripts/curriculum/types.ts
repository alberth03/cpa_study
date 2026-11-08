export interface CaseQuestion {
  prompt: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
  whyWrong?: [string, string, string];
  skill?: 'remembering' | 'application' | 'analysis' | 'evaluation';
  difficulty?: 'foundation' | 'application' | 'advanced';
}
export interface SimulationTask {
  label: string;
  correct: number | string;
  options?: string[];
  explanation: string;
  tolerance?: number;
  distractors?: [string | number, string | number, string | number];
}
export interface CurriculumLesson {
  html?: string;
  topic: string;
  title: string;
  group: string;
  references?: string[];
  objectives: string[];
  teaching: string[];
  workedExample: { title: string; facts: string; steps: string[] };
  pitfalls: string[];
  questions: CaseQuestion[];
  simulation: {
    title: string;
    scenario: string;
    html?: string;
    solutionHtml?: string;
    exhibits: { title: string; body: string }[];
    tasks: SimulationTask[];
  };
}
export interface CurriculumModule {
  title: string;
  area: number;
  lessons: CurriculumLesson[];
}
export interface Curriculum {
  id: 'aud' | 'reg' | 'bar' | 'isc' | 'tcp';
  modules: CurriculumModule[];
}
export function q(
  prompt: string,
  correct: string,
  distractors: [string, string, string],
  explanation: string,
  skill: CaseQuestion['skill'] = 'application',
): CaseQuestion {
  return {
    prompt,
    correct,
    distractors,
    explanation,
    skill,
    difficulty:
      skill === 'remembering' ? 'foundation' : skill === 'application' ? 'application' : 'advanced',
  };
}
export const money = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
