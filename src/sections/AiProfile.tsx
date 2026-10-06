import { Icon } from '../components/common/Icon';
import { MockWindow } from '../components/common/MockWindow';
import { SolRow } from '../components/common/SolRow';

type StepState = 'done' | 'active' | 'todo';

const STEPS: { n: string; state: StepState; title: string; desc: string }[] = [
  { n: '01', state: 'done', title: 'STEP 01 · 주제 + 이력서 업로드', desc: '가능한 멘토링 주제 + 이력서 PDF' },
  { n: '02', state: 'active', title: 'STEP 02 · 분석 중', desc: '자료를 기반으로 프로필 생성 중…' },
  { n: '03', state: 'todo', title: 'STEP 03 · 완성', desc: '경력 · 산업 · 강의 실적 자동 작성' },
];

function ProfileMock() {
  return (
    <MockWindow variant="mock-profile" bar={{ icon: 'user', url: '멘토 프로필 작성' }}>
      <div style={{ padding: 24 }}>
        {STEPS.map((s, i) => (
          <div key={s.n} className={`pf-step${s.state === 'todo' ? '' : ` ${s.state}`}`}>
            <div className="pf-n">{s.state === 'done' ? <Icon name="check" strokeWidth={3} round={false} /> : s.n}</div>
            <div className="pf-info">
              <b>{s.title}</b>
              <small>{s.desc}</small>
            </div>
            {i < STEPS.length - 1 && <div className="pf-bar" />}
          </div>
        ))}

        <div className="pf-result">
          <div className="t">
            30초 만에 완성됩니다.
            <small>나머지는 검토만 하시면 됩니다.</small>
          </div>
          <div className="badge-30">00:30</div>
        </div>
      </div>
    </MockWindow>
  );
}

export function AiProfile() {
  return (
    <section className="sol sol-alt">
      <div className="container">
        <SolRow
          reverse
          num="12"
          tag="30초 강사 프로필"
          title={
            <>
              프로필 작성에 <br />
              한 시간 쓰지 마세요.
              <br />
              <span className="serif">30초면</span> 됩니다.
            </>
          }
          body={
            <>
              멘토링 가능한 주제와 이력서·경력기술서를 올리면, <b>30초 만에 프로필이 자동으로 작성</b>됩니다.
              경력·산업·멘토링/강의 실적까지 모두.
            </>
          }
          points={[
            '가능한 멘토링 주제 입력 + 이력서 PDF 업로드',
            '자료를 분석해 30초 만에 프로필 초안 생성',
            '경력 · 산업 · 강의 실적까지 자동 구성',
          ]}
          visual={<ProfileMock />}
        />
      </div>
    </section>
  );
}
