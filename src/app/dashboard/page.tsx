import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-2xl font-semibold text-center'>URL Shortener</h1>
        <form action="" className='flex flex-col space-y-4'>
            <div className='flex flex-col'>
                <label htmlFor="url">Enter your url</label>
                <input type="text" name="url" id="url" className='border border-amber-600 rounded-lg p-1.5 '/>
            </div>
            <button className='bg-amber-300 p-2 rounded-lg cursor-pointer '>Shorten URL</button>
        </form>
        <div>
          <span>Shortned URL</span>
          <div>
            <p>www.short.com</p>
          </div>
        </div>
    </div>
  )
}

export default Dashboard