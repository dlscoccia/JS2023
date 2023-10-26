import Modal from './Modal'
import { ReactElement } from 'react'

type ModalProps = {
  children: ReactElement
  isModalOpen: boolean
}

const ModalContainer = ({ children, isModalOpen }: ModalProps) => {
  return <div>{isModalOpen && <Modal>{children}</Modal>}</div>
}

export default ModalContainer
