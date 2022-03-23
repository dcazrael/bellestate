type MainProps = {
  children: React.ReactNode
}

const MainContent = ({ children }: MainProps) => {
  return <main className="flex flex-col flex-1 mt-28">{children}</main>
}

export default MainContent
