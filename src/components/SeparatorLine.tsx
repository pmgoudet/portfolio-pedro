interface SeparatorLineProps {
  width?: string;
}

const SeparatorLine = ({ width }: SeparatorLineProps) => {
  return (
    <div className={`h-[2px] m-auto bg-gradient-to-r from-[#8F288D] to-[#682F90] ${width || 'w-[90vw]'}`} />
  )
}

export default SeparatorLine;