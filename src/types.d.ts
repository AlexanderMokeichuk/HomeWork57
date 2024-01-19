export interface User {
  id: string,
  name: string,
  email: string,
  role: string,
  isActive: boolean,
}

export interface UserForm {
  name: string,
  email: string,
  role: string,
  isActive: boolean,
}