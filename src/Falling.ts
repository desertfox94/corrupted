export type Falling = {
    id : string,
    emoticon : string,
    size : number,
    x : number,
    y : number
}

const emoticons = ["🤘", "🎵"];

export function create(maxX : number) : Falling {
    return {
        id : "" + Math.random()*1_000_000,
        emoticon : emoticons[Math.floor(Math.random()*emoticons.length)],
        size: 25 + Math.random()* 10,
        x: Math.random() * maxX,
        y: 0
    }
}