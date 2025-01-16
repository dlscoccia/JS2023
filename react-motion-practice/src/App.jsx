import './App.css'
import { motion } from 'motion/react'

function App() {
  return (
    <div>
      <motion.div
        className='box'
        transition={{ duration: 2 }}
        animate={{
          scale: [1, 2],
          rotate: [0, 90],
          borderRadius: ['20%', '50%'],
        }}
      ></motion.div>
    </div>
  )
}

export default App
