type ModalProps = {
  children: ReactElement
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        <div className='bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full'>
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
