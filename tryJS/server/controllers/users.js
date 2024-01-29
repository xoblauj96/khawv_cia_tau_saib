import { v4 as uuid } from "uuid"
import fs from "fs";

const filePath = './output.json';
let users = [];
// Read data from the file
function readUser(){
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
      let  users_read = JSON.parse(fileContent);
        return users_read;
    } catch (error) {
        console.error('Error reading the file:', error.message);
    }
}

function writeUser(datas,message,response){
    const jsonData = JSON.stringify(datas, null, 2);
    // fs.writeFileSync(filePath, jsonData);
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) throw err;
        console.log(`Data has been written to ${filePath}`);
        response.send(`user ${message}  ....!`)
    });
}

export const getUsers = (req, res) => {
    users = readUser();
    res.send(users)
};

export const createUser = (req, res) => {
    const user = req.body;
    try {
        users = readUser();
        users.push({ ...user, id: uuid() })
        const jsonData = JSON.stringify(users, null, 2);
        fs.writeFileSync(filePath, jsonData);
        console.log(`Data has been written to ${filePath}`);
        res.send("user created...!")
    } catch (error) {
        console.error('Error writing the file:', error.message);
    }
};

export const getUser = (req, res) => {
    users = readUser();
    let singleUser = users.filter((user) => user.id === req.params.id)
    singleUser = singleUser.map((u)=>{ 
        delete u.id;
        return u;
    })
    res.send(singleUser)
};

export const deleteUser = (req, res) => {
    users = readUser();
    let check = users.find((user)=> user.id ===req.params.id);
    if(check){
        users = users.filter((user) => user.id !== req.params.id)
        writeUser(users,'Deleted',res);
    }else{
        res.send("not found user to detete....");
    }
    
}

export const updateUser = (req, res) => {
    users = readUser();
    const user = users.find((user) => user.id === req.params.id)
    if (user){
        user.username = req.body.username;
        user.phone = req.body.phone
       writeUser(users,"updated",res)
    }else{
        res.send(`not found user, id: ${req.params.id}`)
    }
    

}