/** 강사 POOL 목업 리스트 */
export interface PoolMentor {
  initial: string;
  name: string;
  gradient: string;
  meta: [string, string, string];
  tags: { label: string; highlight?: boolean }[];
  featured?: boolean;
}

export const POOL_MENTORS: PoolMentor[] = [
  {
    initial: 'K', name: '김OO 멘토', gradient: 'g3', featured: true,
    meta: ['간호 국가고시', '출제 5년', '★ 4.9'],
    tags: [{ label: '국시 막판점검', highlight: true }, { label: '모의고사' }, { label: '오답분석' }],
  },
  {
    initial: 'J', name: '정OO 멘토', gradient: 'g1',
    meta: ['응급의료 임상', '경력 12년', '★ 4.9'],
    tags: [{ label: '트라우마' }, { label: '소생술' }],
  },
  {
    initial: 'M', name: '민OO 멘토', gradient: 'g2',
    meta: ['의사 이직 컨설팅', '경력 9년', '★ 4.8'],
    tags: [{ label: '봉직→개원' }, { label: '커리어' }],
  },
  {
    initial: 'P', name: '박OO 멘토', gradient: 'g5',
    meta: ['물리치료 센터창업', '운영 12년', '★ 4.8'],
    tags: [{ label: '개원' }, { label: '운영' }],
  },
];
