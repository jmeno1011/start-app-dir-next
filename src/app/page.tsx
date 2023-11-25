'use client'
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {

  const [user, setUser] = useState({
    email: "",
    pw: ""
  });

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <header className='w-full'>
        <div className='w-[80%] h-[60px] mx-auto'>
          <nav className='h-full flex items-center justify-between'>
            <div>
              로고!
            </div>
            <div>
              <button className='h-8 px-3.5 border-slate-300 border-solid border rounded-md bg-black text-center hover:bg-slate-700'>
                <Link href={"/user/login"} className='text-xs text-white'>회원가입/로그인</Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <form className='bg-white py-6 px-8 rounded-lg shadow-lg w-96' onSubmit={onSubmitUser}>
            <header className='py-2'>
              <span className='text-xl text-center w-full inline-block '>로그인</span>
            </header>
            <div>
              <div className='p-2'>
                <input className='py-2 px-3 w-full outline-none border-slate-300 border-solid border bg-slate-50 rounded-md'
                  placeholder='이메일을 입력해주세요.' type='text' value={user.email} name="email" onChange={onChangeUser} />
              </div>
              <div className='p-2'>
                <input className='py-2 px-3 w-full outline-none border-slate-300 border-solid border bg-slate-50 rounded-md'
                  placeholder='비밀번호를 입력해주세요.' type='password' value={user.pw} name="pw" onChange={onChangeUser} />
              </div>
            </div>
            <div className='w-full p-2'>
              <button className='w-full py-2 border-slate-300 border-solid border rounded-md bg-black text-white cursor-pointer'>로그인</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
