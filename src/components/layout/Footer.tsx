import type { CompanyInfo } from '../../config/company';

interface FooterProps {
  company: CompanyInfo;
  onOpenNotice: () => void;
}

export function Footer({ company, onOpenNotice }: FooterProps) {
  const rows = [
    { label: '상호명', value: company.name },
    { label: '대표자', value: company.ceo },
    { label: '사업자등록번호', value: company.businessNumber },
    { label: '주소', value: company.address },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <strong className="footer-name">{company.name}</strong>
          <button type="button" className="footer-notice" onClick={onOpenNotice}>
            채권자 이의 및 채권신고 공고
          </button>
        </div>
        <dl className="footer-info">
          {rows.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
        <p className="footer-copy">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
