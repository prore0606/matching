import { useEffect, type ReactNode } from 'react';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
}

/** 내용과 무관한 범용 모달. ESC 또는 하단 버튼(자식 쪽)으로 닫습니다. */
export function Modal({ open, onClose, labelledBy, children }: ModalProps) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        {children}
      </div>
    </div>
  );
}
