import Slide from './Slide'

const SlideShow = () => {
  return (
    <section className="relative w-full slideshow" aria-label="Slideshow">
      <div className="absolute inset-0 flex overflow-hidden snap-x scroll-smooth">
        <Slide slideNumber={1} altText="House" />
        <Slide slideNumber={2} altText="Kitchen" />
        <Slide slideNumber={3} altText="Appartment complex" />
      </div>
    </section>
  )
}

export default SlideShow
