/** 접속 시 항상 띄우는 공고문. 문구 변경 시 이 파일만 수정합니다. */
export interface NoticeItem {
  label: string;
  value: string;
}

export interface Notice {
  title: string;
  intro: string;
  items: NoticeItem[];
  warning: string;
  date: string;
  issuer: string;
  signer: string;
}

export const CREDITOR_NOTICE: Notice = {
  title: '채권자 이의 및 채권신고 공고',
  intro:
    '주식회사 메드링커는 2026년 7월 20일 주주총회의 결의로 해산하고 청산절차에 들어갔으므로, 당 회사에 대하여 채권이 있는 분께서는 아래 기간 내에 그 채권의 내용을 신고하여 주시기 바랍니다.',
  items: [
    { label: '회사의 상호', value: '주식회사 메드링커' },
    { label: '본점 소재지', value: '서울특별시 서초구 서초중앙로18길 31, 용원빌딩 4층 436호(서초동, 용원빌딩)' },
    { label: '해산일', value: '2026년 7월 20일' },
    { label: '채권신고기간', value: '공고일로부터 2개월 이내' },
    { label: '신고장소', value: '서울특별시 서초구 서초중앙로18길 31, 용원빌딩 4층 436호' },
    { label: '신고방법', value: '채권의 종류, 금액 및 발생 원인 등을 기재한 서면을 위 신고장소로 제출하여 주시기 바랍니다.' },
  ],
  warning: '위 기간 내에 채권신고를 하지 아니한 채권자는 청산절차에서 제외될 수 있으므로 유의하시기 바랍니다.',
  date: '2026년 10월 6일',
  issuer: '주식회사 메드링커',
  signer: '청산인 이희선',
};
