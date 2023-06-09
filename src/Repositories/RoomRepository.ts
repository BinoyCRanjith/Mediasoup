import { IRoom } from '../Abstracts/IRoom';
import { Room } from '../Schemas/Room'
import { IRoomRepository } from './../Abstracts/IRoomRepository'

export class RoomRepository implements IRoomRepository {
    async findRoomById(roomID: string): Promise<IRoom> {
        const getRoom: IRoom = await Room.findOne({ id: roomID });
        return getRoom
    }
    async findRoomByName(roomName: string): Promise<IRoom> {
        const getRoom: IRoom = await Room.findOne({ name: roomName });
        return getRoom
    }
    async getAllRooms(): Promise<IRoom[]> {
        const listAllRoom: IRoom[] = await Room.find();
        return listAllRoom
    }
    async createRoom(room: IRoom): Promise<IRoom> {
        const createNewRoom = await Room.create(room)
        return createNewRoom
    }
    async updateUserList(RoomName: number,userDetails:any): Promise<any> {
        const UpdateResult = await Room.updateOne(
            { name: RoomName },
            { $set: { users: userDetails } }
         )
        return UpdateResult
    }
    async updateUserListPush(RoomName: number,userDetails:any): Promise<any> {
        const UpdateResult = await Room.updateOne(
            { name: RoomName },
            { $push: { users: userDetails } }
         )
        return UpdateResult
    }
}
