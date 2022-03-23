type TitleProps = {
  mainTitle: string
  enTitle?: string
}

const Title = ({ mainTitle, enTitle }: TitleProps) => {
  return (
    <div className="relative left-6 before:absolute before:-top-2 before:-left-6 before:-z-10 before:h-20 before:w-0 before:border-2 before:border-primary before:content-['']">
      <div className="text-3xl">{mainTitle}</div>
      <div className="text-base">{enTitle}</div>
    </div>
  )
}

export default Title
