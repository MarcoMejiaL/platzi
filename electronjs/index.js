'use strict'

/* crea la instancia de los objetos de la app y BrowserWindow */
const {app, BrowserWindow} = require('electron');




/* imprime un mensaje desde consola antes de salir */
app.on('before-quit', ()=>{
    console.log('saliendo')
})

/* ejecuta la orden cuando este lista */
app.on('ready',()=>{
    /* crea la ventana */
    let win = new BrowserWindow({
        width: 1024,
        height: 600,
        title: 'hola mundo',
        center: true,
        maximizable: false,
        show: false
    })

win.once('ready-to-show', () =>{
    win.show()
})

    /* ve la posicion de la ventana */
win.on('move', ()=>{
    const position = win.getPosition()
    console.log(`la posicion es ${position}`)
})




    /* detecta cuando cierra la ventana y aplica el mensaje de salir */
    win.on('closed', ()=>{
win =null
app.quit()
    })
    win.loadURL(`file://${__dirname}/index.html`)
})


