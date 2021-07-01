import './App.css';
import '@react95/icons/icons.css';
import { List } from '@react95/core';
import { Modal } from '@react95/core';
import { TaskBar } from '@react95/core';
import { ThemeProvider } from '@react95/core';
import { useState } from 'react';


function App() {
  const [resumeOpen, setResumeModalState] = useState(false)
  const [pictureOpen, setPictureModalState] = useState(false)

  const taskbarList = (
    <List>
      <List.Item onClick={() => {setResumeModalState(true)}}>
        Resume.pdf
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {setPictureModalState(true)}}>
        FamilyPicture.jpeg
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {window.open('https://www.github.com/judebusarello')}}>
        Github
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {window.open('https://www.linkedin.com/in/judebusarello')}}>
        LinkedIn
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {window.open('https://www.instagram.com/judebusarello')}}>
        Instagram
      </List.Item>
    </List>
  )

  const centeredWindowStyle = {
    display: "flex",
    'align-items': "center",
  }

  return (
    <ThemeProvider>
      {resumeOpen && (
        <Modal
	  style={centeredWindowStyle}
	  title="resume.txt"
  	  closeModal={() => {setResumeModalState(false)}}
        >
    	  Still Working On This, My Bad
        </Modal>
      )}
      {pictureOpen && (
        <Modal
	  style={centeredWindowStyle}
	  title="picture.jpeg"
  	  closeModal={() => {setPictureModalState(false)}}
        >
    	  Gonna be a deep fried version of my family
        </Modal>
      )}
      <TaskBar list={taskbarList} />
    </ThemeProvider>
  )
}

export default App;
