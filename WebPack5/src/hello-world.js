import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/header/header'

const header = new Heading()
header.render('hello world')

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

