import React from 'react'
import { useState } from 'react'
import {Input} from './Input'

export const Form = () => {
    const [isPri,setIsSpri] = useState(false)
   
    const login = [{
        type:"email",
        label:"Email hoặc số điện thoại",
        error:"Vui lòng nhập email hoặc số điện thoại hợp lệ."
    },
    {
        type:"password",
        label:"Mật khẩu",
        error:"Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự."
    }
]
  return (
    <div className='form-login'>  
        <span className='login'>Đăng nhập</span>
        <div className='form'>
            {login.map((el,index)=> <Input  key={index} label={el.label} type ={el.type} error ={el.error} />
            )
            }
        </div>
        <button className='btn'>Đăng nhập</button>
        <div className='form-help-hybrid'>
            <div className="hybrid">
                <input type="checkbox" id='help-ip'/>
                <label htmlFor="help-ip">Ghi nhớ tôi</label>
            </div>
            
                <a href="https://www.facebook.com/">Bạn cần trợ giúp?</a>
        </div>
        <div className="registration">
            <span>Bạn mới tham gia Netflix?</span>
            <a href="https://www.facebook.com/">Đăng kí ngay.</a>
        </div>
        <div className="form-footer">
        <p >
            <span>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.</span>
            <button className={`${isPri && 'none'}`} onClick={(e)=>{
                setIsSpri((prev)=>{
                    console.log(isPri)
                    return prev = true
                }
                )
            }}>Tìm hiểu thêm</button>
        </p>
        <p className={`none ${isPri && 'block'}`}>
            <span>Thông tin do Google reCAPTCHA thu thập sẽ tuân theo</span>
            <button>Chính sách Quyền riêng tư </button>
            <span>and</span>
            <button>Điều khoản dịch vụ</button>
            <span>của Google, và được dùng để cung cấp, duy trì và cải thiện dịch vụ reCAPTCHA cũng như các mục đích bảo mật nói chung (thông tin này không được dùng để cá nhân hóa quảng cáo của Google).</span>
        </p>
        </div>
    </div>
  )
}
