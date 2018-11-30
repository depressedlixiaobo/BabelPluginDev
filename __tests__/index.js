 
import identifierReversePlugin from '../identifier-reverse-plugin'
import { transform } from 'babel-core'
 

const input = 'var hello = "hi";'

const allTrans = transform(input ,{plugins:[identifierReversePlugin]})

test('get reverse word ' ,()=>{
    let code = allTrans.code
    console.log(code)
    expect(code).toEqual('var olleh = "hi";');
})
// pluginTester({
//   plugin: identifierReversePlugin,
//   snapshot: true,
//   tests: [
//     {code: '"hello";', snapshot: false},
//     {
//       code: 'var hello = "hi";',
//       output: 'var olleh = "hi";',
//     },
//     `
//       function sayHi(person) {
//         return 'Hello ' + person + '!'
//       }
//       console.log(sayHi('Jenny'))
//     `,
//   ],
// })