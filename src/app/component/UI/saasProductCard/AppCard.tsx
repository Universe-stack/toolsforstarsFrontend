import React from 'react'

interface ProductCardProps {
    data:any
}

const AppCard : React.FC<ProductCardProps>= ({data}) => {
  return (
    <div className=''>
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="indicator">
                <span className="indicator-item badge badge-primary">new</span> 
                <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
            </div>
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Get it</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppCard