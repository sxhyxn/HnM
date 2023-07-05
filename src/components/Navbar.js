import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const navigate =useNavigate()
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M HOME",
        "Sale",
        "지속가능성",
    ]
    const gotoLogin = ()=>{
        navigate('/login')
    }
    const gotoMain = ()=>{
        navigate('/')
    }
    const search=(e)=>{
        //console.log(e.key)  /키보드 치는 대로 값나옴
        if(e.key == "Enter"){
            let keyword = e.target.value;
            //console.log(keyword)  /엔터치면 값나옴
            navigate(`/?q=${keyword}`); //주소창에 값들어감
        }
    }
  return (
    <div className='container mt-5'>
        <div className='cursor d-flex justify-content-end align-items-center' onClick={gotoLogin}>
            <i className="fas fa-user-alt"></i>
            {authenticate?(
                    <div onClick={()=>{setAuthenticate(false)}}>
                        <span>로그아웃</span>
                    </div>
                ):(
                    <div onClick={()=>{setAuthenticate(true)}}>
                        <span>로그인</span>
                    </div>
                )}
        </div>
        <div className='text-center'>
            <img onClick={gotoMain} width={100} src='https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg' />
        </div>
        <div className='d-flex mt-4'>
            <ul className='d-flex flex-grow-1 justify-content-center align-items-center'>
                {menuList.map((item)=>{  //map 함수에는 세트로 return 들어가야함
                    return <li key={item} className='px-2'>{item}</li> ;
                })}
            </ul>
            <div>
                <i className="fas fa-search"></i>
                <input className='ms-2' type='text' onKeyDown={(e)=>search(e)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar