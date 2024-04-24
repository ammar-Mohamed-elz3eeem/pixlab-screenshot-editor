/* eslint-disable @typescript-eslint/ban-types */
import { type FC, type ComponentType, type ReactNode } from 'react'
import {
  FancyFrame,
  GlassDarkFrame,
  GlassFrame,
  MacDarkFrame,
  MacFrame,
  WindowsDarkFrame,
  WindowsFrame,
} from './frames'

interface Props {
  children: ReactNode
}

export function withFrame(WrappedComponent: ComponentType<{}>, frame: string): FC<Props> {
  const WithFrame: FC = () => {
    console.log(frame)
    switch (frame) {
      case 'mac':
        console.log('ON MAC FRAME')
        return (
          <MacFrame>
            <WrappedComponent />
          </MacFrame>
        )
      case 'mac-dark':
        return (
          <MacDarkFrame>
            <WrappedComponent />
          </MacDarkFrame>
        )
      case 'glass':
        return (
          <GlassFrame>
            <WrappedComponent />
          </GlassFrame>
        )
      case 'glass-dark':
        return (
          <GlassDarkFrame>
            <WrappedComponent />
          </GlassDarkFrame>
        )
      case 'windows-dark':
        return (
          <WindowsDarkFrame>
            <WrappedComponent />
          </WindowsDarkFrame>
        )
      case 'windows':
        return (
          <WindowsFrame>
            <WrappedComponent />
          </WindowsFrame>
        )
      case 'fancy':
        return (
          <FancyFrame>
            <WrappedComponent />
          </FancyFrame>
        )
      default:
        console.log('HEREEEEEEEEEEEEEEEEEE')
        return <WrappedComponent />
    }
  }

  return WithFrame
}
