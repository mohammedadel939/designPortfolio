fetch("./ampliwy.json").then((datajson) => {
    datajson.json().then((datajs) => {
        console.log(datajs[0].listname);
    })
})
