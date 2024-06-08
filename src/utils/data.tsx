import { type ITap } from '../types'
import { Gradient, Image, Solid, Frame, Text } from '../components/tabs'
import Shape from '../components/tabs/Shape'
import FreeDraw from '../components/tabs/freeDraw'

export const modes = [
  {
    mode: 'yt-thumbnail',
    width: 1280,
    height: 720,
    scale: 0.35,
    name: 'Video Thumbnail',
    icon: 'youtube',
  },
  {
    mode: 'fb-news-feed',
    width: 1200,
    height: 1200,
    scale: 0.21,
    name: 'News Feed',
    icon: 'facebook',
  },
  {
    mode: 'fb-stories',
    width: 1080,
    height: 1920,
    scale: 0.13125,
    name: 'Stories',
    icon: 'facebook',
  },
  {
    mode: 'fb-cover-photo',
    width: 1660,
    height: 624,
    scale: 0.278313,
    name: 'Cover Photo',
    icon: 'facebook',
  },
  {
    mode: 'fb-event-photo',
    width: 2672,
    height: 1400,
    scale: 0.172904,
    name: 'Event Photo',
    icon: 'facebook',
  },
  {
    mode: 'fb-group-photo',
    width: 1280,
    height: 668,
    scale: 0.360937,
    name: 'Group Photo',
    icon: 'facebook',
  },
  {
    mode: 'fb-open-graph',
    width: 2400,
    height: 1260,
    scale: 0.1925,
    name: 'Open Graph',
    icon: 'facebook',
  },
  {
    mode: 'ig-square-post',
    width: 1080,
    height: 1080,
    scale: 0.233333,
    name: 'Square Post',
    icon: 'instagram',
  },
  {
    mode: 'ig-portrait-post',
    width: 1080,
    height: 1350,
    scale: 0.186667,
    name: 'Portrait Post',
    icon: 'instagram',
  },
  {
    mode: 'ig-stories',
    width: 1080,
    height: 1920,
    scale: 0.13125,
    name: 'Stories',
    icon: 'instagram',
  },
  {
    mode: 'tw-profile',
    width: 400,
    height: 400,
    scale: 0.42,
    name: 'Profile Photo',
    icon: 'twitter',
  },
  {
    mode: 'tw-landscape',
    width: 1600,
    height: 900,
    scale: 0.28,
    name: 'LandScape',
    icon: 'twitter',
  },
  {
    mode: 'tw-portrait',
    width: 1080,
    height: 1350,
    scale: 0.186667,
    name: 'Portrait',
    icon: 'twitter',
  },
  {
    mode: 'tw-square',
    width: 1080,
    height: 1080,
    scale: 0.233333,
    name: 'Square',
    icon: 'twitter',
  },
  {
    mode: 'tw-cover',
    width: 1500,
    height: 1500,
    scale: 0.168,
    name: 'Cover Photo',
    icon: 'twitter',
  },
]
export const gradientItems = [{ color: 'rgb(150, 98, 234)' }, { color: 'rgb(99, 102, 241)' }]
export const gradientLines = [
  { position: 'to top', icon: 'icon-arrow-up2' },
  { position: 'to right top', icon: 'icon-arrow-up-right2' },
  { position: 'to right', icon: 'icon-arrow-right2' },
  { position: 'to right bottom', icon: 'icon-arrow-down-right2' },
  { position: 'to bottom', icon: 'icon-arrow-down2' },
  { position: 'to left bottom', icon: 'icon-arrow-down-left2' },
  { position: 'to left', icon: 'icon-arrow-left2' },
  { position: 'to left top', icon: 'icon-arrow-up-left2' },
]
export const colorPallets = [
  {
    position: 'to left bottom',
    firstColor: 'rgb(245, 101, 101)',
    secondColor: 'rgb(249, 168, 37)',
    color: 'linear-gradient(to left bottom, rgb(245, 101, 101), rgb(249, 168, 37))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(246, 102, 129)',
    secondColor: 'rgb(245, 101, 101)',
    color: 'linear-gradient(to left bottom, rgb(246, 102, 129), rgb(245, 101, 101))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(244, 114, 182)',
    secondColor: 'rgb(246, 102, 129)',
    color: 'linear-gradient(to left bottom, rgb(244, 114, 182), rgb(246, 102, 129))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(253, 230, 138)',
    secondColor: 'rgb(240, 230, 140)',
    color: 'linear-gradient(to left bottom, rgb(253, 230, 138), rgb(240, 230, 140))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(253, 230, 138)',
    secondColor: 'rgb(240, 230, 140)',
    color: 'linear-gradient(to left bottom, rgb(253, 230, 138), rgb(249, 168, 37))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(249, 168, 37)',
    secondColor: 'rgb(244, 114, 182)',
    color: 'linear-gradient(to left bottom, rgb(249, 168, 37), rgb(244, 114, 182))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(192, 132, 252)',
    secondColor: 'rgb(247, 131, 172)',
    color: 'linear-gradient(to left bottom, rgb(192, 132, 252), rgb(247, 131, 172))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(253, 125, 36)',
    secondColor: 'rgb(217, 119, 249)',
    color: 'linear-gradient(to left bottom, rgb(253, 125, 36), rgb(217, 119, 249))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(163, 230, 53)',
    secondColor: 'rgb(110, 231, 183)',
    color: 'linear-gradient(to left bottom, rgb(163, 230, 53), rgb(110, 231, 183))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(74, 222, 128)',
    secondColor: 'rgb(253, 230, 138)',
    color: 'linear-gradient(to left bottom, rgb(74, 222, 128), rgb(253, 230, 138))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(99, 179, 237)',
    secondColor: 'rgb(171, 235, 198)',
    color: 'linear-gradient(to left bottom, rgb(99, 179, 237), rgb(171, 235, 198))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(99, 179, 237)',
    secondColor: 'rgb(109, 215, 255)',
    color: 'linear-gradient(to left bottom, rgb(99, 179, 237), rgb(109, 215, 255))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(99, 102, 241)',
    secondColor: 'rgb(109, 215, 255)',
    color: 'linear-gradient(to left bottom, rgb(99, 102, 241), rgb(109, 215, 255))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(67, 153, 237)',
    secondColor: 'rgb(150, 98, 234)',
    color: 'linear-gradient(to left bottom, rgb(67, 153, 237), rgb(150, 98, 234))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(194, 107, 230)',
    secondColor: 'rgb(99, 179, 237)',
    color: 'linear-gradient(to left bottom, rgb(194, 107, 230), rgb(99, 179, 237))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(255, 99, 71)',
    secondColor: 'rgb(255, 165, 0)',
    color: 'linear-gradient(to left bottom, rgb(255, 99, 71), rgb(255, 165, 0))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(255, 215, 0)',
    secondColor: 'rgb(50, 205, 50)',
    color: 'linear-gradient(to left bottom, rgb(255, 215, 0), rgb(50, 205, 50))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(138, 43, 226)',
    secondColor: 'rgb(0, 255, 255)',
    color: 'linear-gradient(to left bottom, rgb(138, 43, 226), rgb(0, 255, 255))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(194, 107, 230)',
    secondColor: 'rgb(244, 114, 182)',
    color: 'linear-gradient(to left bottom, rgb(194, 107, 230), rgb(244, 114, 182))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(150, 98, 234)',
    secondColor: 'rgb(176, 64, 188)',
    color: 'linear-gradient(to left bottom, rgb(150, 98, 234), rgb(176, 64, 188))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(150, 98, 234)',
    secondColor: 'rgb(99, 102, 241)',
    color: 'linear-gradient(to left bottom, rgb(150, 98, 234), rgb(99, 102, 241))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(176, 64, 188)',
    secondColor: 'rgb(107, 70, 193)',
    color: 'linear-gradient(to left bottom, rgb(176, 64, 188), rgb(107, 70, 193))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(59, 130, 246)',
    secondColor: 'rgb(84, 93, 110)',
    color: 'linear-gradient(to left bottom, rgb(59, 130, 246), rgb(84, 93, 110))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(34, 197, 94)',
    secondColor: 'rgb(67, 153, 237)',
    color: 'linear-gradient(to left bottom, rgb(34, 197, 94), rgb(67, 153, 237))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(134, 154, 172)',
    secondColor: 'rgb(107, 70, 193)',
    color: 'linear-gradient(to left bottom, rgb(134, 154, 172), rgb(107, 70, 193))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(249, 168, 37)',
    secondColor: 'rgb(236, 72, 153)',
    color: 'linear-gradient(to left bottom, rgb(249, 168, 37), rgb(236, 72, 153))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(255, 211, 182)',
    secondColor: 'rgb(184, 163, 233)',
    color: 'linear-gradient(to left bottom, rgb(255, 211, 182), rgb(184, 163, 233))',
  },
  {
    position: 'to left bottom',
    firstColor: 'rgb(120, 228, 228)',
    secondColor: 'rgb(169, 222, 249)',
    color: 'linear-gradient(to left bottom, rgb(120, 228, 228), rgb(169, 222, 249))',
  },
]
export const colors = [
  { color: 'rgb(255, 87, 51)' },
  { color: 'rgb(51, 255, 87)' },
  { color: 'rgb(87, 51, 255)' },
  { color: 'rgb(255, 51, 161)' },
  { color: 'rgb(161, 255, 51)' },
  { color: 'rgb(51, 161, 255)' },
  { color: 'rgb(255, 51, 102)' },
  { color: 'rgb(102, 51, 255)' },
  { color: 'rgb(51, 255, 161)' },
  { color: 'rgb(255, 161, 51)' },
  { color: 'rgb(161, 51, 255)' },
  { color: 'rgb(51, 255, 161)' },
  { color: 'rgb(255, 51, 161)' },
  { color: 'rgb(161, 255, 51)' },
  { color: 'rgb(51, 161, 255)' },
  { color: 'rgb(255, 87, 51)' },
  { color: 'rgb(51, 255, 87)' },
  { color: 'rgb(87, 51, 255)' },
  { color: 'rgb(255, 51, 161)' },
  { color: 'rgb(161, 255, 51)' },
  { color: 'rgb(255, 51, 204)' },
  { color: 'rgb(204, 255, 51)' },
  { color: 'rgb(51, 204, 255)' },
  { color: 'rgb(255, 102, 51)' },
  { color: 'rgb(51, 255, 204)' },
  { color: 'rgb(204, 51, 255)' },
  { color: 'rgb(255, 153, 51)' },
  { color: 'rgb(51, 255, 153)' },
  { color: 'rgb(153, 51, 255)' },
  { color: 'rgb(255, 51, 102)' },
  { color: 'rgb(102, 255, 51)' },
  { color: 'rgb(51, 102, 255)' },
  { color: 'rgb(255, 51, 102)' },
  { color: 'rgb(102, 51, 255)' },
  { color: 'rgb(51, 255, 153)' },
  { color: 'rgb(255, 204, 51)' },
  { color: 'rgb(51, 255, 102)' },
  { color: 'rgb(204, 255, 51)' },
  { color: 'rgb(255, 51, 102)' },
  { color: 'rgb(255, 51, 204)' },
]
export const images = [
  {
    background:
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1639493115941-a70fcef4f715?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1579547621700-03c2c337370a?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1707742984673-ae30d982bdec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1707742809711-ebcc97af4faf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1614854262178-03c96e9c8c28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1614849286319-2e0b4fc53b93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1524785281156-c3c68d1e03c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1655998233171-ee5b130acba5?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1620120966883-d977b57a96ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1635614017406-7c192d832072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1635431289101-ef85326518f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    background:
      'https://images.unsplash.com/photo-1614850523306-9a6189f919dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
export const frames: string[] = [
  'null',
  'mac',
  'mac-dark',
  'windows',
  'windows-dark',
  'glass-dark',
  'glass',
  'fancy',
]
export const tabs: ITap = {
  gradient: <Gradient />,
  image: <Image />,
  solid: <Solid />,
  frame: <Frame />,
  text: <Text />,
  shape: <Shape />,
  'free-draw': <FreeDraw />,
}
