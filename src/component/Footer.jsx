import React from 'react'
import {Itemfooter} from './Itemfooter'

export const Footer = () => {
  const itemfooters = ['Câu hỏi thường gặp','Trung tâm trợ giúp','Điều khoản sử dụng','Quyền riêng tư',
'Tùy chọn cookie','Thông tin doanh nghiệp']
  return (
    <div className='footer'>
     <footer>

      <button className='top-footer'>Bạn có câu hỏi? Liên hệ với chúng tôi.</button>
      <div className='center-footer'>
      {
        itemfooters.map((el,index)=>{
          
          return <Itemfooter key={index} title ={el}/>
         
        })
      }
      </div>

      <div className='language'>
        <select name="" id="language">
          <option value="vietnam">Việt Nam</option>
          <option value="english">English</option>
        </select>
      </div>
       </footer>
    </div>
   
  )
}
