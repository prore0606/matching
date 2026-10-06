import { MARQUEE_ITEMS } from '../data/marquee';

export function Marquee() {
  // 무한 루프 애니메이션(-50% 이동)을 위해 목록을 두 번 렌더링
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {loop.flatMap((item, i) => [
          <div key={`t${i}`} className="mq-item">
            {item.serif ? <span className="serif">{item.label}</span> : item.label}
          </div>,
          <div key={`s${i}`} className="mq-item">
            <span className="star">✦</span>
          </div>,
        ])}
      </div>
    </div>
  );
}
