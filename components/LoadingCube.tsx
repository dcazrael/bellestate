const LoadingCube = () => {
  return (
    <div className="w-6 h-6 transform bg-transparent">
      <div
        id="loading-cube"
        className="w-6 h-6 mx-auto rounded-md shadow sk-cube-grid bg-gradient-to-tl from-white to-primary"
      >
        <div className="flex w-6 h-2">
          <div className="w-1/3 bg-white sk-cube sk-cube1 rounded-tl-md"></div>
          <div className="w-1/3 bg-white sk-cube sk-cube2"></div>
          <div className="w-1/3 bg-white sk-cube sk-cube3 rounded-tr-md"></div>
        </div>
        <div className="flex w-6 h-2">
          <div className="w-1/3 bg-white sk-cube sk-cube4"></div>
          <div className="w-1/3 bg-white sk-cube sk-cube5"></div>
          <div className="w-1/3 bg-white sk-cube sk-cube6"></div>
        </div>
        <div className="flex w-6 h-2">
          <div className="w-1/3 bg-white sk-cube sk-cube7 rounded-bl-md"></div>
          <div className="w-1/3 bg-white sk-cube sk-cube8"></div>
          <div className="w-1/3 bg-white sk-cube sk-cube9 rounded-br-md"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingCube
