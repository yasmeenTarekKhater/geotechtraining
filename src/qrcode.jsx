import { Html5QrcodeScanner } from "html5-qrcode";
import "./qrcode.css"
import { useEffect, useState } from "react";
const Qrcode = () => {
    const [scanResult, setScanResult]=useState(null);
    useEffect(()=>{
    const scanner = new Html5QrcodeScanner('reader',{
        qrbox:{
            width:250,
            height:250,
        },
        fps:5,
    });
    scanner.render(success,error);
    function success(result){
        scanner.clear()
        setScanResult(result);
    };
    function error(err){
        console.warn(err); //write warnning in console
    };
    },[])
    
    return ( <div className="container h-50">
    <h1 className="text-center mt-3">امسح الكيو ار كود</h1>
    {
        scanResult
        ?<div>Success:<a href={scanResult}>{scanResult}</a></div>
        :<div id="reader" style={{width:'500px',margin:'0 auto'}}></div>
    }
    
    </div> );
}
 
export default Qrcode;