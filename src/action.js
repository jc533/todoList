export function create(text) {
    return {
        type: "SEND",
        "text":{text:text,checked:false},
    };
}
export function remove(id){
    return {
        "type":"DELETE",
        "id":id
    };
}

export function update(id,text){
    return {
        "type":"UPDATE",
        "id":id,
        "text":text
    };
}