# 1:1 매칭 서비스 소개 페이지

Vite + React + TypeScript

## 실행
```bash
npm install
npm run dev      # 개발 서버
npm run build    # 배포 빌드 (dist/)
```

## Vercel 배포
Vercel에서 이 폴더(`matching-site`)를 Root Directory로 지정해 Import 하면 Vite로 자동 인식됩니다. 추가 설정은 없습니다.

## 자주 수정하는 곳
| 내용 | 파일 |
|---|---|
| 하단 사업자 정보 | `src/config/company.ts` |
| 채권신고 공고 팝업 문구 | `src/config/notice.ts` |
| 멘토 보드 목록 | `src/data/mentors.ts` |
| 강사 POOL 목업 목록 | `src/data/pool.ts` |
| 흐르는 띠 배너 문구 | `src/data/marquee.ts` |

## 구조
```
src/
  config/      사업자 정보·공고문 (데이터)
  data/        섹션별 콘텐츠 데이터
  hooks/       스크롤·등장 애니메이션·스크롤 잠금
  components/
    common/    Icon, Modal, MockWindow, SolRow, SolTag (재사용 UI)
    layout/    Nav, Footer
    notice/    CreditorNoticeModal (공고 팝업)
  sections/    페이지 섹션 (Hero, Why, Tech, ...)
  styles/      global.css (원본 스타일), additions.css (푸터·모달 등 추가분)
```
