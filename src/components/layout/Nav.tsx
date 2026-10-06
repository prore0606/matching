import { Icon } from '../common/Icon';
import { useScrolled } from '../../hooks/useScrolled';

export function Nav() {
  const scrolled = useScrolled();

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-back">
          <Icon name="chevronLeft" strokeWidth={2.4} />
          뒤로
        </a>
        <a href="#cta" className="nav-cta">
          매칭 시작
        </a>
      </div>
    </nav>
  );
}
