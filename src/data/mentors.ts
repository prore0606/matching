/** "실제로 이런 분들이 모여있어요" 멘토 보드 */
export interface MentorTopic {
  tag: string;
  desc: string;
}

export interface FeaturedMentor {
  initial: string;
  name: string;
  /** mb-ava-big 그라데이션 클래스 (g1~g8) */
  gradient: string;
  role: string;
  org: string;
  intro: string;
  /** "+N" 배지. 없으면 표시하지 않음 */
  more?: number;
  topics: MentorTopic[];
}

export const FEATURED_MENTORS: FeaturedMentor[] = [
  {
    initial: '김', name: '김OO', gradient: 'g1',
    role: '응급의학과 전문의 / 디렉터', org: '권역응급의료센터 운영 노하우',
    intro: '응급의료 임상과 중증외상센터 운영에 도와드리고 싶습니다! 15년간 ECMO 및 외상소생술 경험을 공유합니다.',
    topics: [{ tag: '응급의료 임상', desc: '중증외상 환자 분류 및 ECMO 운영 노하우' }],
  },
  {
    initial: '정', name: '정OO', gradient: 'g3',
    role: '책임간호사 / 임상강사', org: '대학병원 간호부',
    intro: '간호국가고시 전문가, 임상 강사 정OO 멘토입니다.', more: 2,
    topics: [
      { tag: '간호국가고시', desc: '효과적인 막판 점검 및 회독 전략' },
      { tag: '임상 실무', desc: '신규 간호사 실무 적응 가이드' },
      { tag: '직무 역량', desc: '간호사 역량 강화 트레이닝' },
    ],
  },
  {
    initial: '박', name: '박OO', gradient: 'g2',
    role: '대표 / 물리치료사', org: '재활의학과 클리닉 운영',
    intro: '물리치료/재활 센터 운영 전문가, 박OO 멘토입니다.', more: 2,
    topics: [
      { tag: '센터 창업', desc: '물리치료센터 개원 및 초기 운영' },
      { tag: '운영 전략 및 마케팅', desc: '데이터 기반 환자 유치 전략 수립' },
      { tag: '직원 관리', desc: '치료사 채용 및 조직 운영 가이드' },
    ],
  },
  {
    initial: '이', name: '이OO', gradient: 'g4',
    role: '약제팀장 / 상무', org: '종합병원 약제팀 운영',
    intro: '병원 약무행정, 임상약리, 환자안전, 약제팀 운영 전문가입니다.', more: 2,
    topics: [
      { tag: '약무행정', desc: '병원 약제팀 운영 노하우' },
      { tag: '임상약리', desc: 'DUR 및 약물 상호작용 관리' },
      { tag: '환자 안전', desc: '의약품 안전사고 예방 및 관리' },
    ],
  },
  {
    initial: '윤', name: '윤OO', gradient: 'g5',
    role: '변호사 / 의료전문', org: '의료법 자문 전문',
    intro: '보건의료 법률 전문가, 의료분쟁 및 의료법 해결사', more: 1,
    topics: [
      { tag: '의료법 자문', desc: '의료법 해석 및 의료기관 운영 자문' },
      { tag: '개원 법무', desc: '클리닉 개원·이전·폐원 시 법무 지원' },
    ],
  },
  {
    initial: '한', name: '한OO', gradient: 'g1',
    role: '변호사 / 의료소송 전문', org: '의료과실·손해배상 소송',
    intro: '의료과실 소송 및 의료분쟁 해결 전문 변호사입니다.', more: 2,
    topics: [
      { tag: '의료소송', desc: '의료과실 소송 대응 전략' },
      { tag: '손해배상 청구', desc: '환자·의료진 양측 손해배상 대응' },
      { tag: '형사 의료사고', desc: '업무상과실치사상 사건 변호' },
    ],
  },
  {
    initial: '임', name: '임OO', gradient: 'g7',
    role: '변호사 / 의료법인 자문', org: '의료법인·컴플라이언스',
    intro: '의료법인 설립부터 컴플라이언스까지, 의료기관 운영 자문 전문가', more: 2,
    topics: [
      { tag: '의료법인 설립', desc: '의료기관 설립 및 운영 자문' },
      { tag: '컴플라이언스', desc: '의료법 준수 및 내부통제 시스템' },
      { tag: 'M&A', desc: '의료기관 인수·합병 자문' },
    ],
  },
  {
    initial: '장', name: '장OO', gradient: 'g5',
    role: '변리사 / 변호사', org: '의료 지식재산권 전문',
    intro: '의료기기·디지털 헬스 IP 전문, 기술이전까지 함께합니다.', more: 2,
    topics: [
      { tag: '의료기기 특허', desc: '특허 출원·등록 및 관리' },
      { tag: '디지털 헬스 IP', desc: '헬스케어 앱·SaaS 지식재산 보호' },
      { tag: '기술이전', desc: '의료기술 사업화 자문' },
    ],
  },
  {
    initial: '서', name: '서OO', gradient: 'g6',
    role: '작업치료사 / 임상강사', org: '소아 발달·작업치료',
    intro: '소아 발달 및 작업치료 전문, 보호자 코칭까지 함께 진행합니다.', more: 2,
    topics: [
      { tag: '소아 작업치료', desc: '발달장애 아동 평가 및 중재' },
      { tag: '감각통합', desc: '감각통합 치료 적용 가이드' },
      { tag: '가족 코칭', desc: '보호자 교육 및 가정 내 적용' },
    ],
  },
  {
    initial: '민', name: '민OO', gradient: 'g2',
    role: '정신건강의학과 전문의', org: '임상심리 / 정신건강',
    intro: '의료진 번아웃부터 청소년 상담까지, 정신건강 전반의 멘토.', more: 2,
    topics: [
      { tag: '트라우마 케어', desc: '의료진 번아웃 및 PTSD 케어' },
      { tag: 'CBT', desc: '인지행동치료 임상 적용' },
      { tag: '청소년 상담', desc: '아동·청소년 정신건강 상담' },
    ],
  },
  {
    initial: '유', name: '유OO', gradient: 'g8',
    role: '임상영양사', org: '종합병원 영양관리',
    intro: '환자 맞춤 영양 관리와 만성질환 식이 전문가입니다.', more: 1,
    topics: [
      { tag: '임상영양', desc: '환자 맞춤 영양 평가 및 관리' },
      { tag: '만성질환 식단', desc: '당뇨·신장·심혈관 식이 가이드' },
    ],
  },
  {
    initial: '최', name: '최OO', gradient: 'g7',
    role: '방사선사 / 영상의학', org: '영상검사 프로토콜',
    intro: 'CT·MRI 프로토콜 최적화와 영상의학실 운영 노하우', more: 1,
    topics: [
      { tag: '영상 검사 프로토콜', desc: 'CT/MRI 최적화 및 환자 안전' },
      { tag: '영상실 운영', desc: '검사 흐름 개선 및 환자 응대' },
    ],
  },
  {
    initial: '강', name: '강OO', gradient: 'g3',
    role: '임상병리사 / 검사팀장', org: '진단검사·검사실 운영',
    intro: '검체 분석부터 검사실 품질관리까지, 검사실 운영 전반의 멘토.', more: 1,
    topics: [
      { tag: '검사실 운영', desc: '검체 채취·분석 및 결과 보고' },
      { tag: '품질관리', desc: 'ISO 인증 및 정도관리 대응' },
    ],
  },
  {
    initial: '조', name: '조OO', gradient: 'g1',
    role: '응급구조사 / 교육 강사', org: '현장 응급처치 교육',
    intro: '현장 응급처치와 사내 응급 대응 교육 전문가입니다.', more: 1,
    topics: [
      { tag: '응급처치', desc: 'BLS/ALS 현장 실무' },
      { tag: '응급대응 교육', desc: '사업장·기관 응급 대응 교육' },
    ],
  },
  {
    initial: '권', name: '권OO', gradient: 'g4',
    role: '의사 / 개원 컨설턴트', org: '개원·이직 컨설팅',
    intro: '봉직의에서 개원의까지, 의사 커리어 전 단계를 함께합니다.', more: 2,
    topics: [
      { tag: '개원 컨설팅', desc: '클리닉 개원 가이드 및 입지 분석' },
      { tag: '이직 컨설팅', desc: '봉직의→개원의 전환 및 연봉 협상' },
      { tag: '운영 최적화', desc: '진료 수익 구조 및 인력 운영' },
    ],
  },
];
