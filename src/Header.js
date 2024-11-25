import logo from './img/logo.png';

const header = () =>{
    return(
        <div className='img-container'> 
            <img className='logo' src={logo}/>
        </div>
    );
};

export default header;