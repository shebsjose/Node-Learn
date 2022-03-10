import express from "express";
const router = express.Router();

router.get('/all', (req, res) => {
  res.send('Hello Sheba!')
})

router.post('/create', (req, res) => {
    res.send('Student Created!')
  })

  router.put('/update', (req, res) => {
    res.send('Student Updated!')
  })

  router.delete('/delete', (req, res) => {
    res.send('Student Deleted!')
  })

export default router;