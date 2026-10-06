import { Modal } from '../common/Modal';
import type { Notice } from '../../config/notice';

interface CreditorNoticeModalProps {
  notice: Notice;
  open: boolean;
  onClose: () => void;
}

export function CreditorNoticeModal({ notice, open, onClose }: CreditorNoticeModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="notice-title">
      <div className="notice-head">
        <span className="notice-chip">공고</span>
        <h2 id="notice-title">{notice.title}</h2>
      </div>

      <div className="notice-body">
        <p className="notice-intro">{notice.intro}</p>

        <ol className="notice-list">
          {notice.items.map((item, i) => (
            <li key={item.label}>
              <span className="notice-n">{i + 1}.</span>
              <span className="notice-lbl">{item.label}</span>
              <span className="notice-val">{item.value}</span>
            </li>
          ))}
        </ol>

        <p className="notice-warn">{notice.warning}</p>

        <div className="notice-sign">
          <div className="notice-date">{notice.date}</div>
          <div>{notice.issuer}</div>
          <div className="notice-signer">{notice.signer}</div>
        </div>
      </div>

      <div className="notice-foot">
        <button type="button" className="notice-close" onClick={onClose} autoFocus>
          확인
        </button>
      </div>
    </Modal>
  );
}
