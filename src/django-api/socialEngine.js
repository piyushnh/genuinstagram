// import { useFirebase } from './data/firebaseClient/dependecyRegisterar'
// import { useAws } from './data/awsClient/dependecyRegisterar'
import { useDjangoClient } from './dependecyRegisterar'
import { Container } from 'inversify'


const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const logger = (title, ...data) => {
  const randomColor = getRandomColor()

  window['console']['log'](`\n\n%c =======  ${title} ======= %c${moment().format('HH:mm:ss SSS')} \n`, `color:${randomColor};font-size:15`
  , `color:${getRandomColor()};font-size:15`)
  window['console']['log'](``)
  window['console']['log'](`    `,  data)
  window['console']['log'](`\n =========================================`)

}
/**
 * Developer tools
 */
window['console']['trace'] = logger

/**
 * Initialize container
 */
export const provider = new Container()

/**
 * Register dependencies
 */
// useFirebase(provider)
// useAws(provider)
useDjangoClient(provider)
// useHttpService(provider)

// Features on the roadmap
// useAzure(provider)
// userAspNet(provider)
