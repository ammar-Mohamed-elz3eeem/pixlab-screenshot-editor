import React from 'react';
import './WelcomPage';
import { useCallback ,useState } from 'react'
import { useDropzone } from 'react-dropzone'
import useApp from '../hooks/useContext';
import useFabric from '../hooks/useFabric';
import { fabric } from 'fabric'
const WelcomPage = () => {
    const[show,setShow]=useState('flex');
    const { setImage } = useApp()
  const {
    canvas: { setFabImage, fabContext },
  } = useFabric()
  const { selectedThumbType,setOverLay } = useApp()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const url = URL.createObjectURL(file)
      setImage(url)
      fabric.Image.fromURL(url, (image) => {
        image.scaleToHeight(selectedThumbType?.height! / 1.5)
        image.scaleToWidth(selectedThumbType?.width! / 1.5)
        image.set(
          'clipPath',
          new fabric.Rect({
            width: image.width,
            height: image.height,
            rx: 20, // Set the x-radius to 20 for example, adjust as needed
            ry: 20, // Set the y-radius to 20 for example, adjust as needed
            originX: 'center',
            originY: 'center',
          }),
        )

        // Add the frame to the canvas
        fabContext?.add(image).centerObject(image)
        const frame = new fabric.Rect({
          width: selectedThumbType?.width! / 1.5 + 20,
          height: selectedThumbType?.height! / 1.5 + 20,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 20, // Adjust the thickness of the frame as needed
          originX: 'center',
          originY: 'center',
        })
        fabContext?.add(frame).centerObject(frame)
        console.log(frame, image)
        setFabImage(image)
      })
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div id='welcomPage' style={{backgroundColor:'#e5e5d4',
            // 'rgba(33 38 46)',
            position:'absolute' ,
            width:'65%' ,
            zIndex:21,
            overflow: 'scroll',
            left:'6.5rem',
            top:'2rem',
            height: '85%',
            borderRadius:'15px',
            boxShadow:' 1px 2px 11px 0px white',
            display:show,
            flexDirection:'column',
            rowGap:'3rem',
            alignItems:'center',
            }}
        //  className='editor-container flex items-center h-[200px] md:h-screen md:min-h-screen max-h-screen justify-center md:flex-grow-0 md:flex-basis-2/3 mx-5  flex-col md:justify-center'
         >
            <h1 style={{color:'white',
                        fontSize:'40px',
                        fontWeight:'600',
                        marginTop:'1rem',
            }}>
                PixLab AI-Editor
            </h1>
            <div style={{padding:'1rem',
                         backgroundColor:'#4596fdfc',
                         borderRadius:'40px',
                         width:'40%',
                         display:'flex',
                         flexDirection:'row',
                         justifyContent:'center',
                         alignItems:'center',
            }}>   
        <label htmlFor="upload-input" id="upload-label"
        style={{color:'white',
                backgroundColor:'#4596fdfc',
                fontSize:'30px',
                paddingBottom:'0.5rem',
        }}
        {...getRootProps()}
          onClick={(e) => {
            e.stopPropagation();
            setShow('none');
            setOverLay('none');
          }}
        >
          Load Images 
        </label>
        <input type="file" id="upload-input" style={{ display: 'none' }}
        accept='image/*'
         {...getInputProps()}
          />
      </div>
      <div>
        <img src='https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg'/>
      </div>
      <div>
        <img src='https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg'/>
      </div>
        </div>
    );
};

export default WelcomPage;