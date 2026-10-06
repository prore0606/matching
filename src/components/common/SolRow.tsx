import type { CSSProperties, ReactNode } from 'react';
import { SolTag } from './SolTag';

interface SolRowProps {
  num: string;
  tag: string;
  title: ReactNode;
  body: ReactNode;
  points: string[];
  /** 목업 화면 */
  visual: ReactNode;
  /** true면 목업이 왼쪽에 위치 */
  reverse?: boolean;
  style?: CSSProperties;
}

/** 솔루션 소개 한 줄: 텍스트(태그·제목·설명·포인트) + 목업 */
export function SolRow({ num, tag, title, body, points, visual, reverse, style }: SolRowProps) {
  return (
    <div className={`sol-row${reverse ? ' rev' : ''}`} style={style}>
      <div className="sol-text">
        <SolTag num={num} label={tag} />
        <h3 className="sol-h3">{title}</h3>
        <p className="sol-p">{body}</p>
        <ul className="sol-list">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="sol-vis reveal d2">{visual}</div>
    </div>
  );
}
