import React from 'react';
import './App.css';
import { List } from '@react95/core';
import { Video } from '@react95/core';
import { Modal } from '@react95/core';
import { TaskBar } from '@react95/core';
import { ThemeProvider } from '@react95/core';
import { useState } from 'react';
import { Brush } from '@react95/icons';
import { Computer } from '@react95/icons';


function App() {
  const [resumeOpen, setResumeModalState] = useState(false)
  const [familyPictureOpen, setFamilyPictureModalState] = useState(false)
  const [selfPortraitOpen, setSelfPortraitModalState] = useState(false)
  const [videoOpen, setVideoModalState] = useState(false)

  const taskbarList = (
    <List>
      <List.Item onClick={() => {setVideoModalState(true)}}>
        AOL Promotional Material
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {setResumeModalState(true)}}>
        Resume.pdf
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {setSelfPortraitModalState(true)}}>
        picture_of_me.jpg
      </List.Item>
      <List.Divider/>
      <List.Item onClick={() => {setFamilyPictureModalState(true)}}>
        family_portrait.jpg
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


  return (
    <ThemeProvider>
      {selfPortraitOpen && (
        <Modal
          icon={<Computer/>}
          title="self_portrait.jpg"
          closeModal={() => {setSelfPortraitModalState(false)}}
        >
          <img 
            src={require('./static/ProfilePicturePhoto.jpg')} 
            alt="What a hunk. Total cutie."
          />
        </Modal>
      )}
      {familyPictureOpen && (
        <Modal
          icon={<Brush/>}
          title="family_portrait.jpg"
          closeModal={() => {setFamilyPictureModalState(false)}}
        >
          <img 
            src={require('./static/family.jpg')} 
            alt="A family wearing nothing but jeans and velvet???"
          />
        </Modal>
      )}
      {resumeOpen && (
        <Modal
          icon={<Brush/>}
          title="resume.txt"
          closeModal={() => {setResumeModalState(false)}}
        >
          <div dangerouslySetInnerHTML={{__html: require('./resume.html')}} />
        </Modal>
      )}
      {videoOpen && (
        <Video
          src={require('./static/aol_ad.mp4')} 
          name="America On Line" 
        />
      )}
      <TaskBar list={taskbarList} />
    </ThemeProvider>
  )
}

export default App;
