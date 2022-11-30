import * as tuitsDao from '../tuits/tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}



const createTuit =async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao
        .createTuit(insertedTuit);
    res.json(newTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    //                          t._id !== tuitdIdToDelete);
    // tuits = tuits.filter(t => String(t._id) !== tuitdIdToDelete);

    // res.sendStatus(200);
    res.json(status);
}

const updateTuit =async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
     const updates = req.body;
    // tuits = tuits.map(t =>
    //                       String(t._id) === tuitdIdToUpdate ? {...t, ...updates} : t
    // );

    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
                    updates);
    res.json(status);
    // res.sendStatus(200);
}


const findTuits = async (req, res) =>{
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);}

