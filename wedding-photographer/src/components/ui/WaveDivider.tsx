interface WaveDividerProps {
  fill: string
  className?: string
  flip?: boolean
  top?: boolean
}

export default function WaveDivider({ fill, className = '', flip = false, top = false }: WaveDividerProps) {
  return (
    <div
      className={`absolute inset-x-0 overflow-hidden leading-none ${top ? 'top-0' : 'bottom-0'} ${className}`}
      style={{ transform: top ? 'scaleY(-1)' : flip ? 'scaleX(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,35 C200,70 400,0 700,42 C900,65 1150,10 1440,38 L1440,70 L0,70 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
