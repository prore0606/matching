import type { ReactNode } from 'react';
import { Icon, type IconName } from '../components/common/Icon';

const CARDS: { icon: IconName; label: string; title: string; body: ReactNode; delay: string }[] = [
  {
    icon: 'monitor', label: 'SaaS', title: '서비스형 소프트웨어', delay: 'd2',
    body: <>여러 프로그램을 오가며 처리하던 복잡한 절차가 <b>하나의 화면</b>으로 모입니다.</>,
  },
  {
    icon: 'mic', label: 'STT', title: '음성을 기록으로', delay: 'd3',
    body: <>한 번 듣고 사라지던 강의·멘토링 내용이 <b>텍스트로 저장</b>되어, 언제든 다시 활용됩니다.</>,
  },
  {
    icon: 'message', label: '생성형 AI · sLLM', title: '요약하고 정리합니다', delay: 'd4',
    body: <>대화의 요지를 이해해서 <b>리포트를 자동으로 만들어 드려요</b>. 일일이 정리할 필요 없어요.</>,
  },
];

export function Tech() {
  return (
    <section className="tech">
      <div className="container">
        <div className="tech-center">
          <span className="sec-eyebrow reveal">Our technology</span>
          <h2 className="sec-h2 reveal d1">
            보건의료 교육에
            <br />
            <span className="ink">기술</span>을 더했습니다
          </h2>
          <p className="sec-sub reveal d2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            흩어진 도구를 하나로. 사라지는 강의를 기록으로. 반복되는 행정을 자동으로.
          </p>
        </div>

        <div className="tech-grid">
          {CARDS.map((c) => (
            <div key={c.label} className={`tcard reveal ${c.delay}`}>
              <div className="tcard-ico">
                <Icon name={c.icon} strokeWidth={1.8} />
              </div>
              <h3>
                <span className="label">{c.label}</span>
                {c.title}
              </h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
