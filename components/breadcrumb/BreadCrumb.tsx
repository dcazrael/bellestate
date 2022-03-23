import Separator from './Separator'

type BreadCrumbProps = {
  title: string
}

const BreadCrumb = ({ title }: BreadCrumbProps) => {
  return (
    <div className="flex space-x-4 bread-crumb ">
      <a href="/">トップページ</a>
      <Separator />
      <span>{title}</span>
    </div>
  )
}

export default BreadCrumb
