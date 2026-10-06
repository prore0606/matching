import { Icon } from '../components/common/Icon';
import { MockWindow } from '../components/common/MockWindow';
import { SolRow } from '../components/common/SolRow';

const SUMMARY = [
  '국시 출제 경향 분석: 최근 3년간 약리·간호관리 영역 비중이 늘어남.',
  "막판 점검은 '문제풀이 → 오답 → 개념 회귀' 순서가 가장 효과적.",
  'D-7부터는 새로운 자료 추가 금지. 기존 자료 회독으로 안정감 확보.',
  '시험 당일 컨디션 관리: 수면 6시간 + 가벼운 아침식사 권장.',
];

function SttMock() {
  return (
    <MockWindow variant="mock-stt" style={{ background: '#fff', color: 'var(--ink-0)' }} bar={{ icon: 'file', url: '요약 노트' }}>
      <div className="stt-tabs">
        <span>신청정보</span>
        <span className="on">멘토링 기록</span>
        <span>만족도 조사</span>
      </div>
      <div className="stt-content">
        <div className="stt-title">
          <Icon name="file" round={false} />
          멘토링 전체 요약 노트
        </div>
        <div className="stt-date">2026.05.13 (수) 14:00–15:00</div>
        <div className="stt-list">
          {SUMMARY.map((s) => (
            <div key={s} className="stt-li">
              {s}
            </div>
          ))}
        </div>
        <div className="stt-note">
          <Icon name="info" round={false} />
          녹음 내용을 기반으로 자동 요약된 노트입니다.
        </div>
      </div>
    </MockWindow>
  );
}

export function SttNote() {
  return (
    <section className="sol sol-dark">
      <div className="container">
        <SolRow
          num="06 · 07"
          tag="사라지지 않는 강의"
          title={
            <>
              한 번 듣고 끝?
              <br />
              <span className="serif">아닙니다.</span>
            </>
          }
          body={
            <>
              모든 강의는 음성으로 녹음되고, <b>핵심 내용은 요약 노트</b>로 정리됩니다. 듣고 흘려보내지 마세요. 강의가
              끝난 후에도 <b>언제든 다시 펼쳐</b>볼 수 있습니다.
            </>
          }
          points={[
            "강의 핵심을 자동 요약한 '요약 노트' 제공",
            '전체 텍스트 확인 가능 · 검색도 가능',
            '월별 수요 데이터로 교육 설계에 활용',
          ]}
          visual={<SttMock />}
        />
      </div>
    </section>
  );
}
