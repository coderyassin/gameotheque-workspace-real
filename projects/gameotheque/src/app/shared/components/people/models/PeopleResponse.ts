export interface PeopleResponse {
  name: string,
  gender: string
}

export type PeopleApiReturn = {
  results: PeopleResponse[]
}
