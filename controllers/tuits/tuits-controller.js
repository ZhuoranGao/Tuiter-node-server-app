import posts from "./tuits.js";
let tuits = posts;




const templateTuit = {

    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0
}


const createTuit = (req, res) => {
    // const newTuit = {
    //     ...req.body,
    //     ...templateTuit
    // };
      const newTuit = req.body;
     newTuit._id = (new Date()).getTime()+'';
     newTuit.likes = 0;
     newTuit.liked = false;
     newTuit.dislikes = 0;
     newTuit.replies = 0;
     newTuit.retuits = 0;
     newTuit.handle = "@nasa";
     newTuit.username = "NASA";
     newTuit.image = "nasa.jpg";
     newTuit.time = "2h";
    tuits.push(newTuit);
    res.json(newTuit);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //                          t._id !== tuitdIdToDelete);
    tuits = tuits.filter(t => String(t._id) !== tuitdIdToDelete);

    res.sendStatus(200);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
     const updates = req.body;
    tuits = tuits.map(t =>
                          String(t._id) === tuitdIdToUpdate ? {...t, ...updates} : t
    );

    // const tuitIndex = tuits.findIndex(
    //     t => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] =
    //     {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}


const findTuits = (req, res) =>
    res.json(tuits);

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}