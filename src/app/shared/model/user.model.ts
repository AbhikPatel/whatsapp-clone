export class UserChat {
    id: number
    firstName: string
    lastName: string
    profile: string
    sender?: string
    chats: Chat[]

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        profile: string,
        chats: Chat[],
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.profile = profile
        this.chats = chats
    }
}

export class Chat {
    isSeen: boolean
    isSender: boolean
    content: string
    newMessage: boolean
    time: any

    constructor(
        isSeen: boolean,
        isSender: boolean,
        content: string,
        newMessage: boolean,
        time: any,
    ) {
        this.isSeen = isSeen
        this.isSender = isSender
        this.content = content
        this.time = time
        this.newMessage = newMessage
    }
}