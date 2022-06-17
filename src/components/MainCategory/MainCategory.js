import './MainCategory.css'

export const MainCategory = ({title,imag}) => {
  return (
    <div className='containerMainPage'>
        <figure className='figureMain'>
            <img 
              className='imgMainPage' 
              src={imag}  
              alt='Pick presentation'
            />
            <div className='containerTitleMainPage'>
              <h2 className='titleMainPage'>
                {title} 
              </h2>
            </div>
        </figure>
       
    </div>
  )
}
