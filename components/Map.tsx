const Map = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GMAPS_API}
    &q=1-chōme-7-15+Noritake,+Nakamura+Ward,+Nagoya,+Aichi`}
    ></iframe>
  )
}

export default Map
