import useApp from '../hooks/useContext';
const OverlayLeft = () => {
    const{overLay,setOverLay}=useApp();
    return (
        <div style={{position:'absolute',
        top:'3.75rem',
        left:'0',
        height:'100%',
        width:'5%',
        backgroundColor:'#e5e5d4',
        zIndex:'35',
        opacity:'0.8',
        display:overLay,
   }}>
            
        </div>
    );
};

export default OverlayLeft;