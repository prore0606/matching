import { Icon } from '../components/common/Icon';

interface ProfileCardProps {
  variant: 'c1' | 'c2' | 'c3';
  avatar: string;
  avatarClass: string;
  name: string;
  spec: string;
  tags: { label: string; highlight?: boolean }[];
  rating: string;
  statLabel: string;
  statValue: string;
}

function ProfileCard({ variant, avatar, avatarClass, name, spec, tags, rating, statLabel, statValue }: ProfileCardProps) {
  return (
    <div className={`pcard ${variant}`}>
      <div className="p-head">
        <div className={`p-ava ${avatarClass}`}>{avatar}</div>
        <div>
          <div className="p-name">{name}</div>
          <div className="p-spec">{spec}</div>
        </div>
      </div>
      <div className="p-tags">
        {tags.map((t) => (
          <span key={t.label} className={`p-tag${t.highlight ? ' hl' : ''}`}>
            {t.label}
          </span>
        ))}
      </div>
      <div className="p-stats">
        <div className="p-stat">
          <b>{rating}</b>
        </div>
        <div className="p-stat">
          <b>{statLabel}</b>
          {statValue}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-orb o1" />
      <div className="hero-orb o2" />
      <div className="hero-orb o3" />

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="h-eyebrow reveal">
              <span className="chip">1:1 MATCHING</span>
              <span>보건의료인을 위한 맞춤형 실시간 교육</span>
            </div>
            <h1 className="reveal d1">
              만나고, <br />
              <span className="serif">함께하고,</span>
              <br />
              <span className="grad">기억합니다.</span>
            </h1>
            <p className="hero-sub reveal d2">
              전국의 보건의료 멘토와 1:1로. <br />
              분야가 무엇이든, 직역이 무엇이든. <br />
              매칭부터 강의·기록·정산까지 <b>한 번에</b>.
            </p>
            <div className="hero-ctas reveal d3">
              <a href="#cta" className="btn btn-primary">
                매칭 시작하기
                <Icon name="arrowRight" strokeWidth={2.4} />
              </a>
              <a href="#sol-pool" className="btn btn-ghost">
                <Icon name="play" strokeWidth={2.2} />
                기능 둘러보기
              </a>
            </div>
            <div className="hero-trust reveal d4">
              <div className="stack-faces">
                {['의', '간', '물', '+'].map((f) => (
                  <div key={f} className="face">
                    {f}
                  </div>
                ))}
              </div>
              <span>
                의사 · 간호사 · 물리치료사… <b style={{ color: '#fff' }}>모든 직역</b>을 위한 매칭
              </span>
            </div>
          </div>

          <div className="stack reveal d2">
            <div className="match-bd">매칭 추천</div>
            <ProfileCard
              variant="c1" avatar="J" avatarClass="a1" name="정OO 멘토" spec="응급의료 임상"
              tags={[{ label: '트라우마' }, { label: '소생술' }]}
              rating="★ 4.9" statLabel="경력" statValue="12년"
            />
            <ProfileCard
              variant="c2" avatar="P" avatarClass="a2" name="박OO 멘토" spec="물리치료 · 센터운영"
              tags={[{ label: '개원' }, { label: '운영' }]}
              rating="★ 4.8" statLabel="경력" statValue="15년"
            />
            <ProfileCard
              variant="c3" avatar="K" avatarClass="a3" name="김OO 멘토" spec="간호 국가고시"
              tags={[{ label: '국시', highlight: true }, { label: '막판 점검', highlight: true }, { label: '모의고사' }]}
              rating="★ 4.9" statLabel="출제" statValue="5년"
            />
            <div className="chat-bd">
              <span className="dot" />
              내일 14시, 잘 부탁드려요!
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
