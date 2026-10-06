import { useEffect } from 'react';

/** `.reveal` 요소가 화면에 들어오면 `.in` 클래스를 붙여 등장 애니메이션을 실행 */
export function useRevealOnScroll(selector = '.reveal'): void {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll(selector).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
