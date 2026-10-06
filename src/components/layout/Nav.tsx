import { Icon } from '../common/Icon';
import { useScrolled } from '../../hooks/useScrolled';
import logo from '../../assets/logo.jpg';

export function Nav() {
  const scrolled = useScrolled();

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-back">
          <Icon name="chevronLeft" strokeWidth={2.4} />
          뒤로
        </a>
        <div className="nav-logo">
          <img src={logo} alt="ProReOn" />
        </div>
        <a href="#cta" className="nav-cta">
          매칭 시작
        </a>
      </div>
    </nav>
  );
}
