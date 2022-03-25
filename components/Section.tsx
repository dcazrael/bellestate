import React from 'react'

type SectionProps = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <h2 className="text-xl font-medium border-b-2 max-w-fit border-primary">
        {title}
      </h2>
      <div className="mt-2 max-w-7xl">{children}</div>
    </section>
  )
}

export default Section
