import { Icon } from '../components/common/Icon';
import { MockBar, MockWindow } from '../components/common/MockWindow';
import { SolRow } from '../components/common/SolRow';
import { FEATURED_MENTORS, type FeaturedMentor } from '../data/mentors';
import { POOL_MENTORS } from '../data/pool';

function PoolMock() {
  return (
    <MockWindow variant="mock-pool" bar={{ icon: 'lock', url: 'proreon.kr / pool' }}>
      <div className="mp-search">
        <div className="mp-search-input">
          <Icon name="search" strokeWidth={2.2} />
          간호 국가고시 멘토
        </div>
        <button className="mp-filter">필터</button>
      </div>
      <div className="mp-list">
        {POOL_MENTORS.map((m) => (
          <div key={m.name} className={`mp-item${m.featured ? ' featured' : ''}`}>
            <div className={`mp-ava ${m.gradient}`}>{m.initial}</div>
            <div className="mp-info">
              <div className="mp-name">
                {m.name} {m.featured && <span className="pro-badge">추천</span>}
              </div>
              <div className="mp-meta">
                <span>{m.meta[0]}</span>
                <span className="dot" />
                <span>{m.meta[1]}</span>
                <span className="dot" />
                <span>{m.meta[2]}</span>
              </div>
              <div className="mp-tags">
                {m.tags.map((t) => (
                  <span key={t.label} className={`mp-tag${t.highlight ? ' hl' : ''}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
            <button className={`mp-action${m.featured ? ' live' : ''}`}>{m.featured ? '매칭' : '프로필'}</button>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

function MentorRow({ mentor }: { mentor: FeaturedMentor }) {
  return (
    <div className="mb-row">
      <div className="mb-left">
        <div className={`mb-ava-big ${mentor.gradient}`}>{mentor.initial}</div>
        <div>
          <div className="mb-name">
            {mentor.name} <span className="lbl">멘토</span>
          </div>
          <div className="mb-role">{mentor.role}</div>
          <div className="mb-org">{mentor.org}</div>
        </div>
      </div>
      <div className="mb-right">
        <div className="mb-intro">{mentor.intro}</div>
        <div className="mb-topics-label">
          멘토링 가능한 주제 {mentor.more !== undefined && <span className="more">+{mentor.more}</span>}
        </div>
        {mentor.topics.map((t) => (
          <div key={t.tag} className="mb-topic">
            <span className="mb-topic-tag">{t.tag}</span>
            <span className="mb-topic-desc">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MentorBoard() {
  return (
    <>
      <div className="mb-wrap-head reveal" style={{ marginTop: 140 }}>
        <span className="sec-eyebrow">Featured Mentors</span>
        <h2 className="sec-h2">
          실제로 <span className="serif">이런 분들이</span>
          <br />
          모여있어요.
        </h2>
        <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          의사·간호사·치료사·약사부터 <br />
          의료법·의료소송·의료법인·의료IP까지. <br />
          보건의료의 <b>모든 영역</b>에서 활동 중인 전문 멘토와 연결됩니다.
        </p>
      </div>

      <div className="mentor-board reveal d2">
        <MockBar icon="lock" url="proreon.kr / mentors" />
        {FEATURED_MENTORS.map((m) => (
          <MentorRow key={m.name} mentor={m} />
        ))}
      </div>
    </>
  );
}

const RADAR_POINTS: [number, number][] = [
  [180, 40], [270, 80], [290, 150], [220, 210], [130, 210], [70, 140], [100, 75],
];

const RADAR_LABELS: { x: number; y: number; label: string }[] = [
  { x: 180, y: 20, label: '전공' },
  { x: 308, y: 65, label: '경력' },
  { x: 320, y: 152, label: '평점' },
  { x: 234, y: 232, label: '일정' },
  { x: 116, y: 232, label: '스타일' },
  { x: 40, y: 142, label: '지역' },
  { x: 78, y: 60, label: '실무' },
];

const CRITERIA = [
  { label: '전공 적합도', value: 98 },
  { label: '경력 · 평점', value: 95 },
  { label: '일정 일치', value: 100 },
  { label: '학습 스타일', value: 92 },
];

function MatchMock() {
  return (
    <MockWindow variant="mock-match">
      <div className="match-radar">
        <svg className="radar-svg" viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#C7C7C9" strokeWidth="0.8" strokeDasharray="2,3">
            {[40, 70, 100, 125].map((r) => (
              <circle key={r} cx="180" cy="130" r={r} />
            ))}
          </g>
          <g stroke="#8B95EC" strokeWidth="0.6">
            <line x1="180" y1="5" x2="180" y2="255" />
            <line x1="55" y1="130" x2="305" y2="130" />
            <line x1="92" y1="42" x2="268" y2="218" />
            <line x1="268" y1="42" x2="92" y2="218" />
          </g>
          <polygon
            points={RADAR_POINTS.map((p) => p.join(',')).join(' ')}
            fill="rgba(100,111,222,0.18)"
            stroke="#646FDE"
            strokeWidth="1.5"
          />
          <g fill="#646FDE">
            {RADAR_POINTS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
            ))}
          </g>
          <g fontFamily="Pretendard" fontSize="9" fontWeight="600" fill="#52525B">
            {RADAR_LABELS.map((l) => (
              <text key={l.label} x={l.x} y={l.y} textAnchor="middle">
                {l.label}
              </text>
            ))}
          </g>
        </svg>
        <div className="radar-center">
          <span className="sc">98.4</span>
          <small>MATCH</small>
        </div>
      </div>

      <div className="match-criteria">
        {CRITERIA.map((c) => (
          <div key={c.label} className="mcrit">
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="lbl">{c.label}</span>
                <span className="val">{c.value}%</span>
              </div>
              <div className="bar">
                <span style={{ width: `${c.value}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}

export function PoolMatching() {
  return (
    <section className="sol" id="sol-pool">
      <div className="container">
        <SolRow
          num="02 · 03"
          tag="매칭의 시작"
          title={
            <>
              전국의 보건의료 멘토,
              <br />
              <span className="serif">한곳에서</span> 만납니다.
            </>
          }
          body={
            <>
              기관마다 흩어져 있던 강사 정보가 <b>통합 강사 POOL</b>로 모입니다. 다른 기관의 강사 풀도 확인할 수 있고,
              분야와 직역에 가장 적합한 멘토를 <b>자동으로 추천</b>해 드립니다.
            </>
          }
          points={[
            '전국의 보건의료 전문가가 모인 통합 POOL',
            '분야·경력·평점·일정까지 함께 분석해 추천',
            '익숙한 강사에게만 의존하지 않아도 됩니다',
          ]}
          visual={<PoolMock />}
        />

        <MentorBoard />

        <SolRow
          reverse
          style={{ marginTop: 120 }}
          num="03"
          tag="전문성 기반 매칭"
          title={
            <>
              전공·일정·성향까지,
              <br />
              <span className="ink">꼼꼼히</span> 살펴서 <span className="serif">추천</span>합니다.
            </>
          }
          body={
            <>
              분야별 강사 정보를 한곳에 모아, <b>역량에 최적화된 멘토</b>를 자동으로 추천합니다. 전공 적합도부터 학습
              스타일, 일정까지 빠짐없이 살펴봐요.
            </>
          }
          points={[
            '전공 적합도 · 경력 · 평점 · 일정 종합 매칭',
            '의사·간호사·치료사·약사 모든 직역 대응',
            '리스트 스크롤 그만, 가장 잘 맞는 한 명만',
          ]}
          visual={<MatchMock />}
        />
      </div>
    </section>
  );
}
