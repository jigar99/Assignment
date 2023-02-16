import { v4 as uuid } from 'uuid';

let patients = [];

export const getItems = (req, res) => {
    console.log(`Users in the database: ${patients}`);

    res.send(patients);
}

export const createItem = (req, res) => {   
    const patient = req.body;

    patients.push({...patient, id: uuid()});
   
    res.send(patients);
    
    console.log(`User [${patient.patientName}] added to the database.`);
};