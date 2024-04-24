import { type ExoticComponent, type FC, type ReactNode } from 'react'

export interface IThumb {
  mode?: string
  width?: number
  height?: number
  scale?: number
  name?: string
  icon?: string
}
export interface IPallet {
  position: string
  firstColor: string
  secondColor: string
  color: string
}
export interface IColor {
  color: string
}
export interface IImage {
  background: string
}
export interface IFrame {
  name: string
  element: FC<{ children?: ReactNode }> | ExoticComponent<{ children?: ReactNode | undefined }>
}
export interface IBackground {
  background: string
}
export type ITap = Record<string, ReactNode>
