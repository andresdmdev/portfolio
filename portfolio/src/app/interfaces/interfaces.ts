export interface JobCardInfo {
  company: string,
  position: string,
  date: string,
  description: string[]
}
export interface ProjectCardInfo {
  name: string,
  description: string,
  keyPoints: string[],
  images: string[],
  stack: Stack[],
  links: Link[]
}

type Stack = {
  name: string,
  images: string[],
  styles: string
}

type Link = {
  text: string
  url: string
  icon: string
}