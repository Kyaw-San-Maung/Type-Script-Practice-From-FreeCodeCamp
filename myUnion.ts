let studentScore: number | string;

studentScore = 22;
studentScore = "22"

type user = {
    name: string,
    id: number
}

type admin = {
    adminName: string,
    id: number
}

let kyaw: user | admin = { name: "Uesr", id: 225 }

kyaw = { adminName: "Admin", id: 255 }

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    } else {
        
        id + 2
    }

}

getDbId(2);
getDbId("2")

//Array

const data: (number | string)[] = [ 1, 2, 3, 4, "5"]