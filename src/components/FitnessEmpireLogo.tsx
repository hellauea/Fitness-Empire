interface FitnessEmpireLogoProps {
  className?: string;
  size?: number;
}

const FitnessEmpireLogo = ({ className = "", size = 32 }: FitnessEmpireLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crown/Empire Icon - Bold, Minimal, Premium */}
      <path
        d="M24 6L30 16L42 12L36 28H12L6 12L18 16L24 6Z"
        fill="currentColor"
        strokeWidth="0"
      />
      {/* Base bar */}
      <rect
        x="10"
        y="30"
        width="28"
        height="6"
        rx="1"
        fill="currentColor"
      />
      {/* Bottom accent */}
      <rect
        x="14"
        y="38"
        width="20"
        height="4"
        rx="1"
        fill="currentColor"
      />
    </svg>
  );
};

export default FitnessEmpireLogo;
