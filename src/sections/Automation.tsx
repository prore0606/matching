import { Icon, type IconName } from '../components/common/Icon';
import { MockWindow } from '../components/common/MockWindow';
import { SolRow } from '../components/common/SolRow';
import { SolTag } from '../components/common/SolTag';

function ReportMock() {
  return (
    <MockWindow variant="mock-report">
      <div className="rep-form">
        <span className="ai-tag">
          <Icon name="layers" strokeWidth={2.4} />
          자동 작성
        </span>
        <div className="lbl">보고서</div>
        <div className="typing">
          국가고시 막판 점검 멘토링을 진행하였으며, 최근 3년간 출제 경향을 분석하고 약리·간호관리 영역에 대한 집중 학습
          전략을 안내함. D-30 학습 플랜과 회독 방법을 제시했고, 시험 당일 컨디션 관리 방안까지 다룸. 멘티는 적극적으로
          참여했으며 추가 자료를 요청함
        </div>
      </div>
      <div className="rep-actions">
        <span className="meta">2026.05.13 자동 생성 · 검토 대기</span>
        <button>검토 후 제출</button>
      </div>
    </MockWindow>
  );
}

const DOCS: { icon: IconName; name: string; sub: string }[] = [
  { icon: 'creditCard', name: '통장 사본', sub: '○○은행 · 1234-56-78****' },
  { icon: 'idCard', name: '신분증', sub: '주민등록번호 마스킹 처리' },
  { icon: 'mapPin', name: '주소', sub: '서울특별시 · 마포구' },
];

function DocsMock() {
  return (
    <MockWindow variant="mock-docs" bar={{ icon: 'file', url: '정산 서류' }}>
      <div style={{ padding: 20 }}>
        {DOCS.map((d) => (
          <div key={d.name} className="docs-row">
            <div className="docs-ic">
              <Icon name={d.icon} round={false} />
            </div>
            <div className="docs-info">
              <div className="docs-name">{d.name}</div>
              <div className="docs-sub">{d.sub}</div>
            </div>
            <div className="docs-status">
              <Icon name="check" strokeWidth={3} round={false} />
              등록됨
            </div>
          </div>
        ))}
        <div className="docs-hint">
          <Icon name="shield" strokeWidth={2.2} round={false} />
          정산 요청 시 자동으로 첨부되어 제출됩니다.
        </div>
      </div>
    </MockWindow>
  );
}

function FormCard() {
  return (
    <div className="feat-card reveal d2">
      <SolTag num="10" label="양식 자동 맞춤" />
      <h3 className="feat-h3">
        기관별 양식,
        <br />
        자동으로 맞춰드려요
      </h3>
      <p className="feat-p">
        매번 양식을 새로 만들지 마세요. 내용만 확인하면 <b>기관에 맞춰 서류가 자동으로 생성</b>됩니다.
      </p>

      <div className="feat-demo" style={{ position: 'relative' }}>
        <div className="form-demo-head">
          <span>활동내역서</span>
          <span className="form-demo-org">A기관 · 2026</span>
        </div>
        <div className="form-demo-grid">
          <div><b>활동일</b>2026.05.13</div>
          <div><b>시간</b>14:00–15:00</div>
          <div className="full"><b>활동 내용</b>국가고시 막판 점검…</div>
        </div>
        <div className="form-demo-badge">A기관</div>
      </div>
    </div>
  );
}

function SurveyCard() {
  const scale = [1, 2, 3, 4, 5];
  const selected = 5;
  return (
    <div className="feat-card reveal d3">
      <SolTag num="11" label="만족도 평가 자동화" />
      <h3 className="feat-h3">
        조사 항목까지
        <br />
        기관별 맞춤으로
      </h3>
      <p className="feat-p">
        이용자·강사 만족도 조사가 <b>자동화 시스템</b>으로 진행됩니다. 기관별 조사 항목 변경도 가능해요.
      </p>

      <div className="feat-demo">
        <div className="survey-q">
          <span className="survey-qn">Q1</span>
          멘토가 멘토링에 잘 준비되어 있었나요?
        </div>
        <div className="survey-dots">
          {scale.map((n) => (
            <div key={n} className={`survey-dot${n === selected ? ' sel' : ''}`}>
              {n === selected && <span />}
            </div>
          ))}
        </div>
        <div className="survey-nums">
          {scale.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Automation() {
  return (
    <section className="sol">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <span className="sec-eyebrow reveal">Solution 08 · 09 · 10 · 11</span>
          <h2 className="sec-h2 reveal d1">
            강의에만 <span className="serif">집중하세요.</span>
            <br />
            나머지는 <span className="ink">자동으로</span>.
          </h2>
          <p className="sec-sub reveal d2">
            보고서 작성, 정산 서류, 양식 맞춤, 만족도 평가까지. 반복되던 행정 업무는 시스템이, 사람은 교육에 집중합니다.
          </p>
        </div>

        <SolRow
          style={{ marginTop: 80 }}
          num="08"
          tag="자동 보고서"
          title={
            <>
              보고서가 <span className="serif">먼저</span>
              <br />
              작성되어 있습니다.
            </>
          }
          body={
            <>
              멘토링이 끝나면 보고서가 <b>자동으로 생성</b>됩니다. 멘토는 내용을 검토·수정하고 제출만 하면 끝.
            </>
          }
          points={['강의 녹음·요약 노트 기반 자동 생성', '멘토가 검토·수정 가능', '제출까지 한 화면에서']}
          visual={<ReportMock />}
        />

        <SolRow
          reverse
          style={{ marginTop: 120 }}
          num="09"
          tag="정산 서류 자동 첨부"
          title={
            <>
              통장사본 · 신분증,
              <br />
              매번 보내지 않아도 돼요.
            </>
          }
          body={
            <>
              개인 프로필에 한 번만 등록해두면, 정산 시 <b>자동으로 첨부·제출</b>됩니다. 매번 다시 보내는 번거로움은 끝.
            </>
          }
          points={['통장사본, 신분증 미리 등록', '정산 시 자동 첨부 · 자동 제출', '주민번호 등 민감 정보 마스킹 처리']}
          visual={<DocsMock />}
        />

        <div className="two-up">
          <FormCard />
          <SurveyCard />
        </div>
      </div>
    </section>
  );
}
