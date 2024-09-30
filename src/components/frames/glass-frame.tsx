/* eslint-disable no-undef */

import { type IFrameBorder } from "../../types";

export default function GlassFrame({ style }: { style: IFrameBorder | null }): JSX.Element {
  return (
    <div
      key={'glass'}
      style={style ?? {}}
      className={
        'border-frame border-[5px]  p-[30px] shadow-md border-[#ffffffc7] rounded-lg frame-content pointer-events-none' +
        (style ? ' absolute' : ' relative')
      }
    ></div>
  )
}
