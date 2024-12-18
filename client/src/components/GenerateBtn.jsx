import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


const GenerateBtn = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () =>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div 
    initial={{ opacity:0.2,y:100 }} 
    transition={{ duration:1 }}
    whileInView={{ opacity:1,y:0 }}
    viewport={{ once: true }}
    className='pb-16 text-center'
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>
            See the magic. Try now
        </h1>

        <button 
        onClick={onClickHandler}
        // className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto transition-all duration-500 hover:scale-105'
        className='inline-flex gap-2 text-white bg-black w-auto m-auto px-12 py-3 items-center gap-2 rounded-full'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity:{ delay:0.8, duration:1 } }}
        >
            Generate Images 
            <img className='h-6' src={assets.star_group} alt="" />
        </button>
        
    </motion.div>
  )
}

export default GenerateBtn
