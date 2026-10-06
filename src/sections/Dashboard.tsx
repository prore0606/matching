import { MockWindow } from '../components/common/MockWindow';
import { SolRow } from '../components/common/SolRow';

interface DonutCardProps {
  title: string;
  total: string;
  /** 멘토링 비율(%) — 나머지는 프로그램 */
  mentoring: number;
}

function DonutCard({ title, total, mentoring }: DonutCardProps) {
  const program = 100 - mentoring;
  return (
    <div className="dash-card">
      <h5>{title}</h5>
      <div className="donut">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#E4E4E9" strokeWidth="5" />
          <circle
            cx="18" cy="18" r="15" fill="none" stroke="#26DE81" strokeWidth="5"
            strokeDasharray={`${program} 100`} strokeDashoffset={-(program - 1)} transform="rotate(-90 18 18)"
          />
          <circle
            cx="18" cy="18" r="15" fill="none" stroke="#646FDE" strokeWidth="5"
            strokeDasharray={`${mentoring} 100`} transform="rotate(-90 18 18)"
          />
        </svg>
        <div className="donut-stats">
          <b>{total}</b>
          <div className="key">
            <span className="sw" style={{ background: '#646FDE' }} />
            멘토링 {mentoring}%
          </div>
          <div className="key">
            <span className="sw" style={{ background: '#26DE81' }} />
            프로그램 {program}%
          </div>
        </div>
      </div>
    </div>
  );
}

function ListCard({ title, rows, tag, tagClass }: { title: string; rows: string[]; tag: string; tagClass: string }) {
  return (
    <div className="dash-card">
      <h5>{title}</h5>
      {rows.map((r) => (
        <div key={r} className="dash-list-row">
          <span>{r}</span>
          <span className={`tag ${tagClass}`}>{tag}</span>
        </div>
      ))}
    </div>
  );
}

function DashboardMock() {
  return (
    <MockWindow variant="mock-dash" bar={{ icon: 'grid', url: '대시보드' }}>
      <div className="dash-greet">
        기관님, <b>환영합니다</b>.
      </div>
      <div className="dash-row">
        <ListCard
          title="기관 승인대기" tag="승인대기" tagClass="wait"
          rows={['메드링커 멘토링 · 신청', '임상실무 프로그램 · 신청', '국가고시 멘토링 · 신청']}
        />
        <ListCard
          title="보고서 및 정산" tag="보고서 정산" tagClass="done"
          rows={['5월 13일 멘토링', '5월 11일 멘토링', '5월 09일 프로그램']}
        />
      </div>
      <div className="dash-row" style={{ paddingTop: 0 }}>
        <DonutCard title="누적 멘토링 세션 수" total="172" mentoring={74} />
        <DonutCard title="누적 정산금액" total="15.7M원" mentoring={80} />
      </div>
    </MockWindow>
  );
}

export function Dashboard() {
  return (
    <section className="sol">
      <div className="container">
        <SolRow
          num="01"
          tag="운영 대시보드"
          title={
            <>
              모든 게 <span className="serif">한 화면</span>에
              <br />
              모입니다.
            </>
          }
          body={
            <>
              신청 · 승인 · 진행 · 보고 · 정산. 교육 운영의 모든 흐름이 하나의 대시보드에서 통합 관리됩니다. 기관
              담당자에게도, 강사에게도.
            </>
          }
          points={[
            '실시간 교육 진행 현황 한눈에',
            '누적 멘토링 세션 · 정산 금액 자동 집계',
            '예정된 세션 캘린더 · 단계별 진행률',
          ]}
          visual={<DashboardMock />}
        />
      </div>
    </section>
  );
}
