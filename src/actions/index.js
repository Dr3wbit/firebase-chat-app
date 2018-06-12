import types from "./types";
import db from '../firebase';


export function updateChat(roomData) {
    console.log('roomData:', roomData)
    return {
        type: types.UPDATE_CHAT_LOG,
        chatLog: roomData['chatLog'],
        name: roomData.name
    }
}
export function updateInput(name, value) {
    return {
        type: types.UPDATE_INPUT,
        payload: { name, value }
    }
}

export function sendMessageToDatabase(id, message){
    db.ref(`/chat-rooms/${id}/chatLog`).push({
        name: 'steeeeeeve',
        message
    });
}

export function clearInput(name){
    return {
        type: types.CLEAR_INPUT,
        payload: name
    }
}

export async function createRoom(name){

    const newRoom = {
        name: name,
        chatLog: {
            0: {
                message : `Welcome to room: ${name}`,
                name: 'God'
            }
        }
    }
    const response = await db.ref('/chat-rooms').push(newRoom);

    return response.key;
}