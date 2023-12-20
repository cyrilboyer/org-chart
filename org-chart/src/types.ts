export interface OrgNodeInterface {
  id: number
  name: string
  parent: number | null
  height: number
  department: string
  programmingLanguage: string | null
  children: OrgNodeInterface[]
}
