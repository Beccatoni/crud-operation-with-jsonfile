const dataPath = './details/users.json'
const fs = require('fs')

const saveAccountData = (data) => {
    const stringfyData = JSON.stringify(data)
    fs.writeFileSync(data, stringfyData);
}

const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}