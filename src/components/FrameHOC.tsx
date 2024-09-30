/* eslint-disable @typescript-eslint/ban-types */
import { type FC } from 'react'
import {
  FancyFrame,
  GlassDarkFrame,
  GlassFrame,
  MacDarkFrame,
  MacFrame,
  WindowsDarkFrame,
  WindowsFrame,
} from './frames'
import { type IFrameBorder } from '../types'

export function withFrame(frame: string, style: {borderStyle: IFrameBorder} | null = null): FC {
  const WithFrame: FC = () => {
    // console.log('frame', frame)
    switch (frame) {
      case 'mac':
        // console.log('ON MAC FRAME')
        return (
          <MacFrame style={style ? style.borderStyle : null}>
          </MacFrame>
        )
      case 'mac-dark':
        return (
          <MacDarkFrame style={style ? style.borderStyle : null}>
          </MacDarkFrame>
        )
      case 'glass':
        return <GlassFrame style={style ? style.borderStyle : null}></GlassFrame>
      case 'glass-dark':
        return <GlassDarkFrame style={style ? style.borderStyle : null}></GlassDarkFrame>
      case 'windows-dark':
        return <WindowsDarkFrame style={style ? style.borderStyle : null}></WindowsDarkFrame>
      case 'windows':
        return <WindowsFrame style={style ? style.borderStyle : null}></WindowsFrame>
      case 'fancy':
        return <FancyFrame style={style ? style.borderStyle : null}></FancyFrame>
      default:
        return <></>
    }
  }

  return WithFrame
}
