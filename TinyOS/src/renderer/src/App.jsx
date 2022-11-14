import 'luna-window/luna-window.css'
import LunaWindow from 'luna-window'
import cloneDeep from 'licia/cloneDeep'
import 'luna-menu/luna-menu.css'
import 'luna-menu-bar/luna-menu-bar.css'
import LunaMenuBar from 'luna-menu-bar'
function CreateWindow(nof, wname, sx, sy, w, h, data) {
  var WOBJ = nof
  return (WOBJ = new LunaWindow({
    title: wname,
    x: sx,
    y: sy,
    width: w,
    height: h,
    content: data
  }))
}


function menuBar() {
  const menu = object('Template', [
    {
      label: 'File',
      submenu: [
        {
          type: 'submenu',
          label: 'Open',
          submenu: [
            {
              label: 'index.html'
            },
            {
              label: 'example.js'
            }
          ]
        },
        {
          type: 'separator'
        },
        {
          label: 'Exit',
          click() {
            console.log('Exit clicked')
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Cut'
        },
        {
          label: 'Copy'
        },
        {
          label: 'Paste'
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About Luna'
        }
      ]
    }
  ])
  let menuBar = MenuBar.build(container, cloneDeep(template))
}


function App() {
  menuBar()
  CreateWindow('d', 'DAM', 0, 0, 100, 100, 'dam')
  
}

export default App
