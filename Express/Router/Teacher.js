import express from "express";
const router = express.Router();

router.get('/all', (req, res) => {
  res.send('Hello Sheba!')
})

router.post('/create', (req, res) => {
    res.send('Teacher Created!')
  })

  router.put('/update', (req, res) => {
    res.send('Teacher Updated!')
  })

  router.delete('/delete', (req, res) => {
    res.send('Teacher Deleted!')
  })

export default router;