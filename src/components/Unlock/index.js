// Write your code here
import {useState} from 'react'
import {MainContainer, LockButton, Image, Text} from './styledComponents'

const Unlock = () => {
  const [lock, toggleLock] = useState(true)
  const onToggleLock = () => {
    toggleLock(prevState => !prevState)
  }

  const imageUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = lock ? 'lock' : 'unlock'
  const text = lock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = lock ? 'Unlock' : 'Lock'

  return (
    <MainContainer>
      <Image src={imageUrl} alt={altText} />
      <Text>{text}</Text>
      <LockButton onClick={onToggleLock}>{buttonText}</LockButton>
    </MainContainer>
  )
}

export default Unlock
