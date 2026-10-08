import { Icon } from '../components/common/Icon';
import { MockWindow } from '../components/common/MockWindow';
import { SolRow } from '../components/common/SolRow';

type DayState = 'muted' | 'has' | 'sel' | undefined;

const CAL_DAYS: [string, DayState][] = [
  ['27', 'muted'], ['28', 'muted'], ['29', 'muted'], ['30', 'muted'], ['1', undefined], ['2', undefined], ['3', undefined],
  ['4', undefined], ['5', undefined], ['6', 'has'], ['7', undefined], ['8', 'has'], ['9', undefined], ['10', undefined],
  ['11', undefined], ['12', 'has'], ['13', 'sel'], ['14', 'has'], ['15', undefined], ['16', undefined], ['17', undefined],
  ['18', undefined], ['19', undefined], ['20', undefined], ['21', undefined], ['22', undefined], ['23', undefined], ['24', undefined],
];

const SLOTS: [string, 'dis' | 'sel' | undefined][] = [
  ['10:00', 'dis'], ['11:00', undefined], ['14:00', 'sel'], ['15:00', undefined], ['16:00', undefined], ['17:00', undefined],
];

function CalendarMock() {
  return (
    <MockWindow variant="mock-cal" bar={{ icon: 'calendar', url: '멘토링 일정 조율' }}>
      <div className="cal-head">
        <h4>김OO 멘토와 일정 조율</h4>
        <span className="badge">대면 · 1시간</span>
      </div>
      <div className="cal-body">
        <div className="cal-mini">
          <div className="cal-month">
            <Icon name="chevronLeft" round={false} />
            <span>2026년 5월</span>
            <Icon name="chevronRight" round={false} />
          </div>
          <div className="cal-week">
            {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="cal-days">
            {CAL_DAYS.map(([d, s], i) => (
              <span key={i} className={s}>
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="cal-slots">
          <div className="slot-h">5월 13일 (수)</div>
          <div className="slot-row">
            {SLOTS.map(([t, s]) => (
              <span key={t} className={`slot${s ? ` ${s}` : ''}`}>
                {t}
              </span>
            ))}
          </div>
          <div className="cal-alert">
            <Icon name="clock" />
            전날 18시 · 당일 1시간 전 자동 알림
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

function LiveMock() {
  return (
    <MockWindow
      variant="mock-live"
      style={{ background: 'var(--dark)', borderColor: 'rgba(255,255,255,0.08)' }}
      bar={{
        icon: 'lock',
        url: 'live · 멘토링 세션',
        style: { background: '#0f0f12', borderBottomColor: 'rgba(255,255,255,0.08)' },
        urlStyle: {
          background: 'rgba(255,255,255,0.04)',
          color: 'rgba(255,255,255,0.5)',
          borderColor: 'rgba(255,255,255,0.06)',
        },
      }}
    >
      <div className="live-head">
        <span className="l-tag">LIVE · 멘토링</span>
        <span className="l-time">00:32:14</span>
      </div>
      <div className="live-body">
        <div className="live-video">
          <span className="live-name">김OO 멘토</span>
          <div className="live-mini">나</div>
        </div>
        <div className="live-side">
          <h5>실시간 채팅</h5>
          <div className="msg">국시 출제 패턴 자료, 공유 부탁드려요!</div>
          <div className="msg me">네, 곧 화면 공유할게요 🙌</div>
          <div className="msg">감사합니다!</div>
          <div className="live-rec">REC · 자동 녹화 중</div>
        </div>
      </div>
    </MockWindow>
  );
}

export function SchedulingLive() {
  return (
    <section className="sol sol-alt">
      <div className="container">
        <SolRow
          num="04"
          tag="일정 조율 · 노쇼 방지"
          title={
            <>
              전화·문자 그만.
              <br />
              <span className="serif">탭 한 번</span>으로 일정이 잡힙니다.
            </>
          }
          body={
            <>
              멘티(수강생)가 가능한 시간을 제시하면, 멘토가 그중에서 선택합니다. 확정 후엔 <b>강력한 알람 정책</b>으로
              양쪽 모두에게 리마인드해 노쇼를 막아드려요.
            </>
          }
          points={[
            '대면·비대면 선택, 시간·비용까지 한 화면에',
            '일정이 안 맞으면 멘토에게 다른 시간 요청',
            '24시간 전·1시간 전 자동 알림으로 노쇼 방지',
          ]}
          visual={<CalendarMock />}
        />

        <SolRow
          reverse
          spacing="xl"
          num="05"
          tag="오프라인 · 온라인 모두"
          title={
            <>
              어떻게 만나든 <br />
              <span className="serif">기록은 남깁니다.</span>
            </>
          }
          body={
            <>
              오프라인으로 만나도, 줌으로 만나도. <b>PC 녹음·녹화 기능</b>으로 강의 내용이 빠짐없이 저장돼요.{' '}
              <b>Zoom 연동</b>으로 별도 다운로드도 없습니다.
            </>
          }
          points={[
            '오프라인 진행 시 PC 녹음 지원',
            '온라인 진행 시 Zoom Integration · PC 녹화/녹음',
            '모든 녹음 파일은 안전하게 저장됩니다',
          ]}
          visual={<LiveMock />}
        />
      </div>
    </section>
  );
}
