const Header = (props) => {
    console.log(props);
    let customparentfun=()=>{
    props.Parentfun('I am yasoo')
    }
    return ( <>
    <h1 className="header-h1">{props.newstring}</h1>
    {props.children}
    <ol style={{backgroundColor:'blue'}}>
        {props.ArrayRef.map(item => {
            return(
                <li style={{color:"white"}} key={item}>{item}</li>
            )
        })}
    </ol>
    <button onClick={()=>{alert('hi yasoo');}} className="btn btn-danger px-5">Click Here</button>
    <button onClick={customparentfun} className="btn btn-primary mx-4">parent child fun</button>
    </> );
}
 
export default Header;