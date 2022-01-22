import Heading from './components/header/header'
import KiwiImage from './components/kiwi-image/kiwi-image'
import React from 'react'

const header = new Heading()
header.render('kiwi')

const kiwiImage = new KiwiImage()
kiwiImage.render()