import React, { useState } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import moment from 'moment'

import Modal from '../Modal'
import FormSendTweet from '../FormSendTweet'
import { TWEETS_STORAGE } from '../../utils/constants'

import './SendTweet.scss'

export default function SendTweet(props) {
  const [ isOpenModal, setIsOpenModal ] = useState(false)

  const { setToastProps, allTweets, setReloadTweets } = props

  const openModal = () => 
  {
    setIsOpenModal(true)
  }

  const closeModal = () => 
  {
    setIsOpenModal(false)
  }

  const SendTweet = (e, formValue) => 
  {
    e.preventDefault()
    
    const { name, tweet } = formValue

    let allTweetsArray = []

    if (allTweets) 
    {
      allTweetsArray = allTweets
    }

    if (!name || !tweet) 
    {
      setToastProps({
        open: true,
        text: 'Warning: Todos los campos son obligatorios.'
      });
    }
    else 
    {
      // Añadir una nueva propiedad
      formValue.time = moment()
      allTweetsArray.push(formValue)
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray))
      setToastProps({
        open: true,
        text: 'Success: Tweet enviado correctamente.'
      });
      closeModal()
      setReloadTweets(true)
    }
    // Limpiamos Array 
    allTweetsArray = []
  }

  return (
    <div className="send-tweet">
        <Fab
            className='send-tweet__open-modal'
            color='primary'
            aria-label='add'
            onClick={() => openModal()}
        >
            <AddIcon />
        </Fab>

      {/* Modal Component */}
      <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet SendTweet={SendTweet} />
      </Modal>
    </div>
  )
}
