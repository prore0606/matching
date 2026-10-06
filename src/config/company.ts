/** 하단 푸터에 노출되는 사업자 정보. 변경 시 이 파일만 수정합니다. */
export interface CompanyInfo {
  name: string;
  ceo: string;
  businessNumber: string;
  address: string;
}

export const COMPANY: CompanyInfo = {
  name: '주식회사 메드링커',
  ceo: '이희선',
  businessNumber: '487-86-03630',
  address: '서울특별시 서초구 서초중앙로 18길31, 4층 436호(서초동, 용원빌딩)',
};
