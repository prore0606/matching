import { Icon } from '../components/common/Icon';

export function Cta() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <span className="cta-eyebrow reveal">
          <span className="ico" />
          1:1 매칭 · 곧 출시
        </span>
        <h2 className="reveal d1">
          <span className="serif">당신의</span> 다음 한 걸음,
          <br />
          우리가 함께합니다.
        </h2>
        <p className="cta-sub reveal d2">
          분야가 무엇이든, 직역이 무엇이든. <br />
          1:1이면 무엇이든 가능합니다.
        </p>
        <div className="cta-action reveal d3">
          <a href="#" className="cta-big-btn">
            매칭 시작하기
            <Icon name="arrowRight" strokeWidth={2.4} />
          </a>
          <a href="#" className="cta-min">
            멘토로 등록하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
