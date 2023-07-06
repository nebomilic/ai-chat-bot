export type TextData = {
  id: number
  text: string
  title: string
}

export enum Route {
  Home = '/',
  SignIn = '/sign-in',
  TextData = '/text-data',
  AddTextData = '/text-data/add',
  Settings = '/settings',
  Integration = '/integration',
  Api = '/api',
}

export * from './supabase'
