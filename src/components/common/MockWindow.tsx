import type { CSSProperties, ReactNode } from 'react';
import { Icon, type IconName } from './Icon';

interface MockBarProps {
  icon: IconName;
  url: ReactNode;
  style?: CSSProperties;
  urlStyle?: CSSProperties;
}

/** 브라우저 창 모양의 상단 바 (신호등 버튼 + 주소창) */
export function MockBar({ icon, url, style, urlStyle }: MockBarProps) {
  return (
    <div className="mock-bar" style={style}>
      <span className="d r" />
      <span className="d y" />
      <span className="d g" />
      <span className="url" style={urlStyle}>
        <Icon name={icon} round={false} /> {url}
      </span>
    </div>
  );
}

interface MockWindowProps {
  variant: string;
  bar?: MockBarProps;
  style?: CSSProperties;
  children: ReactNode;
}

/** 제품 화면 목업 카드 */
export function MockWindow({ variant, bar, style, children }: MockWindowProps) {
  return (
    <div className={`mock ${variant}`} style={style}>
      {bar && <MockBar {...bar} />}
      {children}
    </div>
  );
}
