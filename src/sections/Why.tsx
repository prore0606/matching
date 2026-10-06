import { Icon } from '../components/common/Icon';

const TIMELINE = [
  '강사찾기 30분', '신청 20분', '장소확인 10분', '이동 60분', '보고서 30분', '정산 30분', '만족도 20분',
];

const NET_ORGS = [
  { x: 20, cx: 60, label: '의료기관 A' },
  { x: 110, cx: 150, label: '의료기관 B' },
  { x: 200, cx: 240, label: '의료기관 C' },
];

const NET_INSTRUCTORS = [
  { cx: 50, label: 'A', fill: '#646FDE', text: '#fff', opacity: undefined },
  { cx: 110, label: 'B', fill: '#646FDE', text: '#fff', opacity: 0.6 },
  { cx: 180, label: 'C', fill: '#E4E4E9', text: '#8A8A8A', opacity: undefined },
  { cx: 240, label: 'D', fill: '#E4E4E9', text: '#8A8A8A', opacity: undefined },
];

const NET_LINKS: [number, number][] = [
  [60, 50], [60, 110], [60, 180], [150, 110], [150, 180], [150, 240], [240, 180], [240, 240],
];

function InstructorNetwork() {
  return (
    <svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <g stroke="#C7C7C9" strokeWidth="1" strokeDasharray="3,3" fill="none">
        {NET_LINKS.map(([x1, x2]) => (
          <line key={`${x1}-${x2}`} x1={x1} y1="22" x2={x2} y2="100" />
        ))}
      </g>
      <g>
        {NET_ORGS.map((o) => (
          <g key={o.label}>
            <rect x={o.x} y="8" rx="14" ry="14" width="80" height="28" fill="#fff" stroke="#E4E4E9" />
            <text x={o.cx} y="26" textAnchor="middle" fontFamily="Pretendard" fontSize="10" fontWeight="600" fill="#0D0C0C">
              {o.label}
            </text>
          </g>
        ))}
      </g>
      <g>
        {NET_INSTRUCTORS.map((n) => (
          <g key={n.label}>
            <circle cx={n.cx} cy="105" r="14" fill={n.fill} opacity={n.opacity} />
            <text x={n.cx} y="109" textAnchor="middle" fontFamily="Pretendard" fontSize="9" fontWeight="700" fill={n.text}>
              {n.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Why() {
  return (
    <section className="sec why">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <span className="sec-eyebrow reveal">Why ProReOn</span>
          <h2 className="sec-h2 reveal d1">
            지금 교육 운영,
            <br />
            <span className="serif">정말 괜찮으신가요?</span>
          </h2>
          <p className="sec-sub reveal d2">
            본질은 '교육'인데, 시간 대부분이 행정에 쓰입니다. <br />
            강사 섭외부터 정산까지, 보건의료 교육의 세 가지 고질적인 문제.
          </p>
        </div>

        <div className="why-grid">
          <div className="pcard-why reveal d2">
            <div className="num">01</div>
            <h3>
              30분 교육을 위해 <br />
              3시간을 씁니다
            </h3>
            <p>강사 찾기, 신청서, 장소 확인, 이동, 보고서, 정산, 만족도. 본 수업보다 6배 긴 행정이 따라옵니다.</p>
            <div className="mini-tl">
              <div className="mini-tl-row">
                <span>강사찾기 · 신청 · 이동 · 보고 · 정산 ·</span>
                <b>3시간</b>
              </div>
              <div className="mini-tl-bar">
                {TIMELINE.map((t) => (
                  <span key={t} title={t} />
                ))}
              </div>
            </div>
            <div className="badge-result">
              <Icon name="clock" strokeWidth={2.4} />
              하루 평균 6시간 행정 손실
            </div>
          </div>

          <div className="pcard-why reveal d3">
            <div className="num">02</div>
            <h3>
              늘 같은 강사,
              <br />
              늘 부족한 풀
            </h3>
            <p>기관마다 강사 정보가 흩어져 있어요. 결국 익숙한 강사에게만 의존하고, 적합하지 않은 매칭이 반복됩니다.</p>
            <div className="net-mini">
              <InstructorNetwork />
            </div>
            <div className="badge-result">
              <Icon name="xCircle" strokeWidth={2.4} />
              교육 품질·안정성 저하
            </div>
          </div>

          <div className="pcard-why reveal d4">
            <div className="num">03</div>
            <h3>
              성과가 보이지 <br />
              않는 교육
            </h3>
            <p>측정 시스템도, 객관적 지표도 부족합니다. 결국 만족도 평가에만 의존하며 성과는 과소평가됩니다.</p>
            <div className="why-stat-list">
              {['측정 시스템 부재', '교육 과정 데이터 유실', '만족도 평가에만 의존'].map((s) => (
                <div key={s} className="why-stat">
                  <span className="ic">
                    <Icon name="x" strokeWidth={3} />
                  </span>
                  {s}
                </div>
              ))}
            </div>
            <div className="badge-result">
              <Icon name="moon" strokeWidth={2.4} />
              신뢰성·지속성 감소
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
