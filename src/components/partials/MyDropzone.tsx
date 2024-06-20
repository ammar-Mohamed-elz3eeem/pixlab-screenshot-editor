// /* eslint-disable no-undef */
// /* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
// import { useCallback } from 'react'
// import { useDropzone } from 'react-dropzone'
// import useFabricImage from '../../hooks/useFabricImage'

// export default function MyDropzone(): JSX.Element {
//   const fabricImageInit = useFabricImage()

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     acceptedFiles.forEach((file: File) => {
//       fabricImageInit(file)
//     })
//   }, [])

//   const { getRootProps, getInputProps } = useDropzone({ onDrop })

//   return (
//     <div className='absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//       <div className='droppable-area p-2 border-[12px] border-[#f2f0f069] rounded-3xl bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  shadow-xl text-xs px-2 flex flex-col items-center justify-center text-white mt-4 md:mt-0'>
//         <label
//           {...getRootProps()}
//           htmlFor='imageFile'
//           onClick={(e) => {
//             e.stopPropagation()
//           }}
//           className='cursor-pointer text-center p-4 md:p-16 m-12 md:my-16 flex flex-col items-center'
//         >
//           <div className='flex items-center justify-center w-12 h-12 mb-3 rounded-full border border-white p-3'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='32'
//               height='32'
//               viewBox='0 0 24 24'
//               fill='none'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               className='lucide lucide-upload w-12 h-12 text-white'
//             >
//               <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
//               <polyline points='17 8 12 3 7 8'></polyline>
//               <line x1='12' x2='12' y1='3' y2='15'></line>
//             </svg>
//           </div>
//           <p className='mt-3 text-white max-w-xs mx-auto'>
//             <span className='text-xl'>
//               Paste your image by pressing
//               <span className='font-semibold'>CTRL + V</span> or
//               <span className='font-semibold'>⌘ + V</span>
//               <br />
//               Alternatively, click to choose or drop your file here
//             </span>
//           </p>
//         </label>
//         <input
//           {...getInputProps()}
//           id='imageFile'
//           accept='image/*'
//           className='hidden'
//           type='file'
//         />
//       </div>
//     </div>
//   )
// }
