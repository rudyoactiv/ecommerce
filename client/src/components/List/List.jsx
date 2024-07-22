import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Long Sleeve Graphic T-Shirt",
          isNew: true,
          oldPrice: 19,
          newPrice: 12,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1972116/pexels-photo-1972116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          img2: "https://images.pexels.com/photos/1163198/pexels-photo-1163198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          newPrice: 12,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          img2: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Casual Denim Jacket",
          isNew: false,
          oldPrice: 35,
          newPrice: 25,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          img2: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          title: "Leather Boots",
          isNew: true,
          oldPrice: 80,
          newPrice: 60,
        },
      ];

  return (
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
