interface SolTagProps {
  num: string;
  label: string;
}

/** 솔루션 번호 태그 (예: "04 일정 조율") */
export function SolTag({ num, label }: SolTagProps) {
  return (
    <span className="sol-tag">
      <span className="num">{num}</span>
      {label}
    </span>
  );
}
