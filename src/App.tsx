import { useCallback, useState } from 'react';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { CreditorNoticeModal } from './components/notice/CreditorNoticeModal';
import { COMPANY } from './config/company';
import { CREDITOR_NOTICE } from './config/notice';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { Hero } from './sections/Hero';
import { Why } from './sections/Why';
import { Tech } from './sections/Tech';
import { Marquee } from './sections/Marquee';
import { PoolMatching } from './sections/PoolMatching';
import { SchedulingLive } from './sections/SchedulingLive';
import { SttNote } from './sections/SttNote';
import { Automation } from './sections/Automation';
import { AiProfile } from './sections/AiProfile';
import { Dashboard } from './sections/Dashboard';
import { Cta } from './sections/Cta';

export default function App() {
  // 공고문은 접속할 때마다 항상 표시
  const [noticeOpen, setNoticeOpen] = useState(true);
  const closeNotice = useCallback(() => setNoticeOpen(false), []);
  const openNotice = useCallback(() => setNoticeOpen(true), []);

  useRevealOnScroll();

  return (
    <>
      <Nav />
      <Hero />
      <Why />
      <Tech />
      <Marquee />
      <PoolMatching />
      <SchedulingLive />
      <SttNote />
      <Automation />
      <AiProfile />
      <Dashboard />
      <Cta />
      <Footer company={COMPANY} onOpenNotice={openNotice} />

      <CreditorNoticeModal notice={CREDITOR_NOTICE} open={noticeOpen} onClose={closeNotice} />
    </>
  );
}
