export class UserChat{
    id:number
    firstName:string
    lastName:string
    profile:string
    chats:Chat[]

    constructor(
        id:number,
        firstName:string,
        lastName:string,
        profile:string,
        chats:Chat[],
    ){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.profile = profile
        this.chats = chats
    }
}

export class Chat{
    isSeen:boolean
    isSender:boolean
    content:string
    time:any

    constructor(
        isSeen:boolean,
        isSender:boolean,
        content:string,
        time:any,
    ){
        this.isSeen = isSeen
        this.isSender = isSender
        this.content = content
        this.time = time
    }
}