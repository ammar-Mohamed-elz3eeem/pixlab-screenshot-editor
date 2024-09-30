/* eslint-disable no-undef */

import { type IFrameBorder } from "../../types";

export default function GlassDarkFrame({ style }: { style: IFrameBorder | null }): JSX.Element {
  return (
    <div
      key={'glass-dark'}
      style={style ?? {}}
      className={'border-frame border-4  p-[30px] shadow-md border-gray-600 rounded-lg frame-content bg-gray-800 pointer-events-none' + (style ? ' absolute' : ' relative')}
    ></div>
  )
}
