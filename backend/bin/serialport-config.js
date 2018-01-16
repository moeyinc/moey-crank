var config
console.log('environment is ' + process.env.ENV)
if (process.env.ENV === 'MOEY_SEIYA') {
  console.log('moey seiya')
  config = {
    BAUDRATE: 115200,
    SERIAL_PORT: '/dev/tty.usbmodem1709631'
  }
} else if (process.env.ENV === 'SURFACE') {
  console.log('surface')
  config = {
    BAUDRATE: 115200,
    SERIAL_PATH: 'COM5'
  }
}

module.exports = config
