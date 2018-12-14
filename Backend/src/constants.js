let BDB_HOST = process.env.BDB || localhost


const DB_ENDPOINT = {
  db: "http://"+BDB_HOST+":9984/api/v1/",
  ws: "ws://"+BDB_HOST+":9985/api/v1/streams/valid_transactions"
}
const DRONE_PARAMS = {
  agents: 1,
  simulated: true,
  id: 'SEARCHANDRESCUE_TEST',
  willDetect: false,
  timeout: 1000,
  deployObjective: true,
  objectiveRadius: 10,
  moveSpeed: 10,
  gt: false
}

const saveOnClose = true

const GRID_SIZE = { x: 100, y: 100 }

// hexamove
const LANE_SIZE = 10

module.exports = { DB_ENDPOINT, DRONE_PARAMS, saveOnClose, GRID_SIZE, LANE_SIZE }