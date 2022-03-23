import Image from 'next/image'

type SlideProps = {
  slideNumber: number
  altText: string
}

const Slide = ({ slideNumber, altText }: SlideProps) => {
  return (
    <div className="slide relative flex-[0_0_100%]">
      <Image
        src={`/slideshow/slideshow_${slideNumber}.jpg`}
        alt={altText}
        layout="fill"
        objectFit="cover"
      />
      <div className="snapper"></div>
    </div>
  )
}

export default Slide
