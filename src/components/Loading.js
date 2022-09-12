import logo from '../assets/logo.svg'


const Loading = () => {
    return (
      <div className='loading-container'>
        <img className='loading-img' src={logo}  alt=''/><br/>
        <label>Loading...</label>
      </div>
    )
  }
  
  export default Loading
  