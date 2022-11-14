import 'luna-menu/luna-menu.css'
import 'luna-menu-bar/luna-menu-bar.css'
import LunaMenuBar from 'luna-menu-bar'
function Menubar() {
  const template = object('Template', [
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
          label: 'Exit'
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
  const menuBar = MenuBar.build(container, cloneDeep(template))

  return menuBar
}

export default Menubar
